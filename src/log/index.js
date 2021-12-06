/**
 * @file log
 * @author ienix(enix@foxmail.com)
 *
 * @since 2021/12/06
 */

import pino from 'pino';
import pretty from 'pino-pretty';

let logger = pino(
    pretty({
        prettyPrint: { colorize: true }
    })
);

export default logger;
