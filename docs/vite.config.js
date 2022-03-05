import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
const { resolve } = require('path')

export default defineConfig({
  base: '',
  plugins: [
    tsconfigPaths({
      projects: [
        resolve('./tsconfig.json'),
        resolve(__dirname, '../tsconfig.json'),
      ],
    }),
  ],
})
