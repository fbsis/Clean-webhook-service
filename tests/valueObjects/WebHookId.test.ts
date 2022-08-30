/* eslint-disable array-callback-return */

import { WebHookId } from '@/domain/valueObjects'

describe('WebHookId Value object', () => {
  const valueToBeValid = [
    '65806832015',
    '17174724000',
    '71483983048',
    '77945793000146',
    '97990755000112',
    '31910744000177',
    'WebHookId'
  ]

  it('should not throw a error on blank', async () => {
    expect(() =>
      new WebHookId('')
    ).not.toThrow()
  })

  valueToBeValid.map(e => {
    it('should not throw a error ' + e, async () => {
      expect(() =>
        new WebHookId(e)
      ).not.toThrow()
    })
  })

  it('should has a method to get the value', async () => {
    const method = new WebHookId(valueToBeValid[0])
    expect(method.toString()).toBe(valueToBeValid[0])
  })
})
