// @ts-check

import fs from 'fs'
import esbuild, { minify } from 'rollup-plugin-esbuild'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'

const packageJson = JSON.parse(
  fs.readFileSync('./package.json', { encoding: 'utf-8' }),
)

const globals = {
  ...packageJson.devDependencies,
}

const dir = 'dist'

/**
 * @type {import('rollup').RollupOptions[]}
 */
const config = [
  {
    input: 'src/index.ts',
    // ignore lib
    external: [
      'react',
      'react-dom',
      'lodash',
      'lodash-es',
      ...Object.keys(globals),
    ],

    output: [
      {
        file: `${dir}/index.cjs.js`,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: `${dir}/index.cjs.min.js`,
        format: 'cjs',
        sourcemap: true,
        plugins: [minify()],
      },
      {
        file: `${dir}/index.esm.js`,
        format: 'es',
        sourcemap: true,
      },
      {
        file: `${dir}/index.esm.min.js`,
        format: 'es',
        sourcemap: true,
        plugins: [minify()],
      },
    ],
    plugins: [
      commonjs({ include: 'node_modules/**' }),
      typescript({ tsconfig: './tsconfig.json', declaration: false }),
      esbuild({
        include: /\.[jt]sx?$/,
        exclude: /node_modules/,
        sourceMap: false,
        minify: process.env.NODE_ENV === 'production',
        target: 'es2017',
        jsxFactory: 'React.createElement',
        jsxFragment: 'React.Fragment',
        define: {},
        tsconfig: './src/tsconfig.json',
        loaders: {
          '.json': 'json',
          '.js': 'jsx',
        },
      }),
      // @ts-ignore
      peerDepsExternal(),
      // babel({}),
    ],

    treeshake: true,
  },
]

export default config
