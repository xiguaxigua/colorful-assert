import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'index.js',
      format: 'cjs',
      exports: 'named'
    },
    {
      file: 'index.es.js',
      format: 'es',
      exports: 'named'
    }
  ],
  external: id => /lodash/.test(id),
  plugins: [
    resolve(),
    commonjs({
      include: 'node_modules/**',
      sourceMap: false,
    }),
    babel()
  ]
}
