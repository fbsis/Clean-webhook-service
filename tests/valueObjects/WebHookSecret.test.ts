/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable array-callback-return */

import { WebHookSecret } from '@/domain/valueObjects'

describe('WebHookSecret Value object', () => {
  const valueToBeValid = [
    '123',
    'mysecretkey',
    'mysecretkeymysecretkeymysecretkey'
  ]

  it('should not throw a error on blank', async () => {
    expect(() =>
      new WebHookSecret('')
    ).not.toThrow()
  })

  valueToBeValid.map(e => {
    it('should not throw a error ' + e, async () => {
      expect(() =>
        new WebHookSecret(e)
      ).not.toThrow()
    })
  })

  it('should has a method to get the value', async () => {
    const method = new WebHookSecret(valueToBeValid[0])
    expect(method.toString()).toBe(valueToBeValid[0])
  })
})
