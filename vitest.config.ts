import { resolve } from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['packages/**/*.(spec|test).ts'],
    exclude: ['node_modules/**'],
  },
  base: '.',
  plugins: [
    tsconfigPaths({
      projects: [resolve('./tsconfig.json')],
    }),
  ],
})
