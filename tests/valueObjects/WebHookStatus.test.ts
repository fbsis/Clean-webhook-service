/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable array-callback-return */

import { WebHookStatus } from '@/domain/valueObjects'

describe('WebHookStatus Value object', () => {
  const valueToBeValid = [
    true,
    false
  ]

  it('should throw a error on blank', async () => {
    expect(() =>
    // @ts-expect-error:next-line
      new WebHookStatus()
    ).toThrow()
  })

  it('should throw a error if value is not boolean as string', async () => {
    expect(() =>
    // @ts-expect-error:next-line
      new WebHookStatus('teste')
    ).toThrow()
  })

  it('should throw a error if value is not boolean as number', async () => {
    expect(() =>
    // @ts-expect-error:next-line
      new WebHookStatus(123)
    ).toThrow()
  })

  valueToBeValid.map(e => {
    it('should not throw a error ' + e, async () => {
      expect(() =>
        new WebHookStatus(e)
      ).not.toThrow()
    })
  })

  it('should has a method to get the value', async () => {
    const method = new WebHookStatus(valueToBeValid[0])
    expect(method.toBoolean()).toBe(valueToBeValid[0])
  })
})
