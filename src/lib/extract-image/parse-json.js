/**
 * @file parse json
 * @author ienix(enix@foxmail.com)
 *
 * @since 2021/12/06
 */

 import log from '@/log';

export default function parse (unknown) {
    let json;

    try {
        json = JSON.parse(unknown);
    }
    catch (e) {
        log.error(e.message);
    }

    return json;
}
