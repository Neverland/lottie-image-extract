/**
 * @file bin
 * @author ienix(enix@foxmail.com)
 *
 * @since 2021/12/03
 */

import {Command} from 'commander';
import {version} from '../package.json';

let program = new Command();

program.version(version);
program.parse(process.argv);
program.usage('[option] [...value]');

program
    .command('extract <file>')
    .description('Extract base64 image from json file.')
    .alias('e')
    .action(async file => {
        let extract = await import('./lib/extract-image');

        extract.default(file);
    });

    program.parse(process.argv);

if (!program.args.length) {
    program.help();
}
