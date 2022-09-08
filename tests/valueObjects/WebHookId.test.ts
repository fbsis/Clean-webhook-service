/* eslint-disable array-callback-return */

import { WebHookId } from '@/domain/valueObjects'

describe('WebHookId Value object', () => {
  const valueToBeValid = [
    '701d446bb0211bb9d9c5cc240c50ebef'
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
