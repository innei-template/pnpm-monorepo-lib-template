import { resolve } from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['tests/**/*.(spec|test).ts'],
  },

  plugins: [
    tsconfigPaths({
      projects: [resolve('./tsconfig.json')],
    }),
  ],
})
