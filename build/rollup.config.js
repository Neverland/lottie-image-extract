/**
 * @file rollup.config
 * @author ienix(enix@foxmail.com)
 *
 * @since 2021/12/01
 */

import path from 'path';

import babel from '@rollup/plugin-babel';
import {terser} from 'rollup-plugin-terser';
import json from '@rollup/plugin-json';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import alias from '@rollup/plugin-alias';

let resolve = dir => path.join(path.resolve(__dirname), dir); ;

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/index.js',
        format: 'cjs',
        name: 'lottie-image-extract',
        sourcemap: true,
        globals: {

        },
        banner: '#!/usr/bin/env node',
        exports: 'auto',
        inlineDynamicImports: true,
    },
    plugins: [
        babel({
            exclude: 'node_modules/**',
            include: 'src/**',
            babelHelpers: 'runtime',
        }),
        nodeResolve({
          extensions: ['.js'],
          modulesOnly: true,
          preferredBuiltins :false
        }),
        terser(),
        json(),
        commonjs(),
        alias({
            entries: [
                {
                    find: '@',
                    replacement: resolve('../src/'),
                },
            ]
        },)
    ],
    external: [
        'fs',
        'path',
        'commander',
        'pino',
        'pino-pretty',
        '@babel/runtime/regenerator',
    ],
};
