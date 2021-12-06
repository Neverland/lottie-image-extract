/**
 * @file generator js
 * @author ienix(enix@foxmail.com)
 *
 * @since 2021/12/06
 */

 import path from 'path';
 import {writeFileSync} from 'fs';

 import log from '@/log';

export default function create (collection, json, fileName) {

    let jsString = '';

    collection.forEach((name, index) => {
        jsString += `import lottie${index} from './${name}';\n`
    });

    jsString += `export default ${JSON.stringify(json)};`

    collection.forEach((item, index) => {
        let seed = `lottie${index}`;
        let regExp = new RegExp(`"{##${seed}##}"`, 'gi');

        jsString = jsString.replace(regExp, seed);
    });

    let name = `${fileName}.lottie.js`;
    let src = path.resolve(process.cwd(), name);

    try {
        writeFileSync(src, jsString);
    }
    catch (e) {
        log.error(e.message);

        return false;
    }

    log.info(`Generator js file '${name}' for lottie successfully!`);

    return true;
}
