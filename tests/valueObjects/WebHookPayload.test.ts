/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable array-callback-return */

import { WebHookPayload } from '@/domain/valueObjects'

describe('WebHookPayload Value object', () => {
  const valueToBeValid = [
    {
      username: 'felipe.braga+ory2@nimbus.house',
      secret: '[y5qwsPHGfm+P~C',
      partnerId: '1'
    },
    {
      name: 'name',
      born_date: 'born_date'
    }
  ]

  it('should throw a error on blank', async () => {
    expect(() =>
    // @ts-expect-error
      new WebHookPayload()
    ).toThrow()
    expect(() =>
    // @ts-expect-error
      new WebHookPayload(undefined)
    ).toThrow()
  })

  it('should throw a error on other values', async () => {
    expect(() =>
    // @ts-expect-error
      new WebHookPayload('othervalues')
    ).toThrow()
  })

  valueToBeValid.map(e => {
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    it('should not throw a error ' + e, async () => {
      expect(() =>
        new WebHookPayload(e)
      ).not.toThrow()
    })
  })

  it('should has a method to get the value', async () => {
    const method = new WebHookPayload(valueToBeValid[0])
    expect(method.toString()).toBe(valueToBeValid[0])
  })
})
