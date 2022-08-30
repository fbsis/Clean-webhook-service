/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable array-callback-return */

import { WebHookUrl } from '@/domain/valueObjects'

describe('WebHookUrl Value object', () => {
  const valueToBeValid = [
    'http://www.ig.com.br/',
    'http://www.ig.com.br',
    'https://www.ig.com.br/',
    'http://www.ig.com.br/foo/bar'
  ]

  it('should throw a error on blank', async () => {
    expect(() =>
      new WebHookUrl('')
    ).toThrow()
  })

  it('should throw a error on other values', async () => {
    expect(() =>
      new WebHookUrl('othervalues')
    ).toThrow()
  })

  valueToBeValid.map(e => {
    it('should not throw a error ' + e, async () => {
      expect(() =>
        new WebHookUrl(e)
      ).not.toThrow()
    })
  })

  it('should has a method to get the value', async () => {
    const method = new WebHookUrl(valueToBeValid[0])
    expect(method.toString()).toBe(valueToBeValid[0])
  })
})
