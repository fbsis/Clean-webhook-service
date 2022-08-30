/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable array-callback-return */

import { WebHookAction } from '@/domain/valueObjects'

describe('WebHookAction Value object', () => {
  const valueToBeValid = [
    'authentication.pre.sso',
    'authentication.post.sso',
    'authentication.pre.otp',
    'authentication.post.token',
    'authentication.pre.token',
    'authentication.post.token',
    'authentication.failed.login'
  ]

  it('should not throw a error on blank', async () => {
    expect(() =>
      new WebHookAction('')
    ).not.toThrow()
  })

  it('should not throw a error on other values', async () => {
    expect(() =>
      new WebHookAction('othervalues')
    ).not.toThrow()
  })

  valueToBeValid.map(e => {
    it('should not throw a error ' + e, async () => {
      expect(() =>
        new WebHookAction(e)
      ).not.toThrow()
    })
  })

  it('should has a method to get the value', async () => {
    const method = new WebHookAction(valueToBeValid[0])
    expect(method.toString()).toBe(valueToBeValid[0])
  })
})
