import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import copy from 'rollup-plugin-copy'
import postcss from 'rollup-plugin-postcss'

export default {
  input: {
    TestComponent: 'src/TestComponent/TestComponent.js',
    TestComponent2: 'src/TestComponent2/TestComponent2.js',
    index: 'src/index.js',
  }, // src/index.js for those who want to import whole library
  output: [
    {
      dir: 'build',
      format: 'cjs',
      sourcemap: true,
      exports: 'auto',
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
    postcss(),
    commonjs(),
    terser(), // minifies generated bundles
    copy({
      targets: [
        {
          src: 'src/common.scss',
          dest: 'build',
          rename: 'common.scss',
        },
      ],
    }),
  ],
}
