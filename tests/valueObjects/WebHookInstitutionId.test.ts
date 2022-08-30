/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable array-callback-return */

import { WebHookInstitutionId } from '@/domain/valueObjects'

describe('WebHookInstitutionId Value object', () => {
  const valueToBeValid = [
    1,
    99,
    71483983048
  ]

  it('should not throw a error on blank', async () => {
    expect(() =>
      new WebHookInstitutionId(0)
    ).not.toThrow()
  })

  valueToBeValid.map(e => {
    it('should not throw a error ' + e, async () => {
      expect(() =>
        new WebHookInstitutionId(e)
      ).not.toThrow()
    })
  })

  it('should has a method to get the value', async () => {
    const method = new WebHookInstitutionId(valueToBeValid[0])
    expect(method.toNumber()).toBe(valueToBeValid[0])
  })
})
