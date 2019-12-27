import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import replace from '@rollup/plugin-replace';

const production = !process.env.ROLLUP_WATCH;

export default {
    input: 'src/demo.js',
    output: {
        file: 'public/bundle.js',
        format: 'iife',
        sourcemap: true
    },
    plugins: [
        resolve(),
        commonjs(),
        postcss({ extensions: ['.css'] }),
        replace({ ___MAPBOX_ACCESS_TOKEN__: process.env.MAPBOX_API_TOKEN })
    ]
};