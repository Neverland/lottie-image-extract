/**
 * @file load json
 * @author ienix(enix@foxmail.com)
 *
 * @since 2021/12/06
 */

import {readFileSync} from 'fs';

import parseJSON from './parse-json';

import log from '@/log';

export default function load(filePath, fileName) {
    let unknown;

    try {
        unknown = readFileSync(filePath, 'utf8');
    }
    catch (e) {
        log.error(e.message);
    }

    log.info(`'${fileName}', load successfully!`);

    if (unknown) {
        unknown = parseJSON(unknown);
    }

    return unknown;
}
