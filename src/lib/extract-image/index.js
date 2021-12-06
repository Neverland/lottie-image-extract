/**
 * @file extract image
 * @author ienix(enix@foxmail.com)
 *
 * @since 2021/12/06
 */

import path from 'path';

import log from '@/log';

import scanJson from './scan-json';
import loadJson from './load-json';

export default async function (fileName) {
    let filePath = path.join(process.cwd(), fileName);
    let json = loadJson(filePath, fileName);

    if (json && scanJson(json, fileName)) {
        log.info('Extract done!');

        return;
    }

    log.error(`Extract '${fileName}' failed !`);
}
