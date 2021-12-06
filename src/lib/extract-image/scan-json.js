/**
 * @file scan json
 * @author ienix(enix@foxmail.com)
 *
 * @since 2021/12/06
 */

import path from 'path';
import {writeFileSync} from 'fs';

import log from '@/log';

import createJs from './generator-js';

const BASE64_IMAGE_REG = /^data:image\/\w+/gi;
const BASE64_IMAGE_EXT = /[^:]\w+\/[\w-+\d.]+(?=;|,)/;

export default function scan (data, fileName) {
    if (!data.assets) {
        log.error('This isn\'t a lottie JSON file, The `$root.assets` is required!');

        return false;
    }

    let json = Object.assign({}, data);
    let collection = [];

    json.assets.forEach((item, index) => {
        BASE64_IMAGE_REG.lastIndex = 0;
        BASE64_IMAGE_EXT.lastIndex = 0;

        let {p = ''} = item;

        if (!BASE64_IMAGE_REG.test(p)) {
            log.info(`'${fileName}' ${index} item ineligible!`);

            return;
        }

        let ext = p.match(BASE64_IMAGE_EXT)[0]?.split('/')[1];
        let base64 = p.replace(/^data:image\/\w+;base64,/, '');
        let name = `${fileName}.image.${index}.${ext}`;
        let src = path.resolve(process.cwd(), name);

        let buffer = Buffer.from(base64, 'base64');

        try {
            writeFileSync(src, buffer);
        }
        catch (e) {
            log.error(e.message);

            return false;
        }

        log.info(`Generator '${name}' write successfully!`);

        json.assets[index].p = `{##lottie${index}##}`;

        collection.push(name);

        return item;
    });

    return createJs(collection, json, fileName);
}
