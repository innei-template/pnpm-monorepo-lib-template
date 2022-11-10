import { resolve } from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {},
  base: '.',
  plugins: [
    tsconfigPaths({
      projects: [resolve('./tsconfig.json')],
    }),
  ],
})
