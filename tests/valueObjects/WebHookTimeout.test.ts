/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable array-callback-return */

import { WebHookTimeout } from '@/domain/valueObjects'

describe('WebHookTimeout Value object', () => {
  const valueToBeValid = [
    60,
    99,
    119
  ]

  it('should not throw a error on blank', async () => {
    expect(() =>
    // @ts-expect-error:next-line
      new WebHookTimeout()
    ).not.toThrow()
  })

  it('should throw a error on more than 120', async () => {
    expect(() =>
      new WebHookTimeout(999)
    ).toThrow()
  })

  valueToBeValid.map(e => {
    it('should not throw a error ' + e, async () => {
      expect(() =>
        new WebHookTimeout(e)
      ).not.toThrow()
    })
  })

  it('should has a method to get the value', async () => {
    const method = new WebHookTimeout(valueToBeValid[0])
    expect(method.toNumber()).toBe(valueToBeValid[0])
  })
})
