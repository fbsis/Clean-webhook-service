/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable array-callback-return */

import { WebHookName } from '@/domain/valueObjects'

describe('WebHookName Value object', () => {
  const valueToBeValid = [
    'authentication.pre.sso',
    'authentication.post.sso',
    'authentication.pre.otp',
    'authentication.post.token',
    'authentication.pre.token',
    'authentication.post.token',
    'authentication.failed.login'
  ]

  it('should throw a error on blank', async () => {
    expect(() =>
      new WebHookName('')
    ).toThrow()
  })

  valueToBeValid.map(e => {
    it('should not throw a error ' + e, async () => {
      expect(() =>
        new WebHookName(e)
      ).not.toThrow()
    })
  })

  it('should has a method to get the value', async () => {
    const method = new WebHookName(valueToBeValid[0])
    expect(method.toString()).toBe(valueToBeValid[0])
  })
})
