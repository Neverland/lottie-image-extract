/**
 * @file index
 * @author ienix(enix@foxmail.com)
 *
 * @since 2021/12/03
 */

import fs from 'fs';
import path from 'path';

import {program} from 'commander';

import {version} from '../package.json';

program.version(version);
program.parse(process.argv);

program
    .command('extract')
    .option('-f, --file <stirng>', 'Lottie json file path.')
    .description('Extract base64 image from json file.')
    .alias('e')
    .action(() => {
        import('./lib/extract-image.js');
    });;

if (!program.args.length) {
    program.help();
}