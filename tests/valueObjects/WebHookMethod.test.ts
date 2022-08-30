/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable array-callback-return */

import { WebHookMethod } from '@/domain/valueObjects'

describe('WebHookMethod Value object', () => {
  const valueToBeValid = [
    'get',
    'post',
    'put',
    'delete'
  ]

  it('should not throw a error on blank', async () => {
    expect(() =>
      new WebHookMethod('')
    ).not.toThrow()
  })

  it('should throw a error on other values', async () => {
    expect(() =>
      new WebHookMethod('othervalues')
    ).toThrow()
  })

  valueToBeValid.map(e => {
    it('should not throw a error ' + e, async () => {
      expect(() =>
        new WebHookMethod(e)
      ).not.toThrow()
    })
  })

  it('should has a method to get the value', async () => {
    const method = new WebHookMethod(valueToBeValid[0])
    expect(method.toString()).toBe(valueToBeValid[0])
  })
})
