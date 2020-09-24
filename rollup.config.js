import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import copy from 'rollup-plugin-copy'
import babel from 'rollup-plugin-babel'

export default {
  input: ['src/index.js', 'src/TestComponent/index.js'],
  output: [
    {
      dir: 'build',
      format: 'cjs',
      sourcemap: true,
    },
  ],
  preserveModules: true, // Important if we want to code split
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    postcss(),
    copy({
      targets: [
        {
          src: 'src/variables.scss',
          dest: 'build',
          rename: 'variables.scss',
        },
        {
          src: 'src/typography.scss',
          dest: 'build',
          rename: 'typography.scss',
        },
      ],
    }),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
}
