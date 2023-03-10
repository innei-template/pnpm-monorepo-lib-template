import { describe, expect, it, test } from 'vitest'

import { getTime } from '@pnpm-template/core'

describe('test', () => {
  it('should be define', () => {
    expect(test).toBeDefined()
  })

  it('should getTime', () => {
    expect(getTime()).toBeDefined()
  })
})
