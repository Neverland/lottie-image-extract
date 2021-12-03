/**
 * @file rollup.config
 * @author ienix(enix@foxmail.com)
 *
 * @since 2021/12/01
 */

import babel from '@rollup/plugin-babel';
import {terser} from 'rollup-plugin-terser';

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/index.js',
        format: 'cjs',
        name: 'lottie-image-extract',
        sourcemap: true,
        globals: {

        },
        exports: 'auto',
    },
    plugins: [
        babel({
            exclude: 'node_modules/**',
            include: 'src/**',
            babelHelpers: 'bundled',
        }),
        terser()
    ],
    external: [
        'fs'
    ],
};