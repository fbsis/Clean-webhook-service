import { DatabaseService } from '@/infra/repository'
jest.setTimeout(15000)

const webhookData = {
  action: 'authentication.pre.sso',
  id: '9a1fe0bc019d631250da422a67ea8a69',
  institutionId: 1,
  method: 'post',
  name: 'name',
  secret: '',
  status: true,
  timeout: 15,
  url: 'http://www.ig.com.br/dfg'
}
jest.spyOn(DatabaseService.prototype, 'getAll').mockReturnValue(Promise.resolve(
  [webhookData]
))
jest.spyOn(DatabaseService.prototype, 'connection')
jest.spyOn(DatabaseService.prototype, 'create').mockReturnValue(Promise.resolve())
jest.spyOn(DatabaseService.prototype as any, 'hashData').mockReturnValue('blabla')

describe('database list webhook', () => {
  it('should return all webhooks registered', async () => {
    const database = new DatabaseService()
    const getAll = await database.getAll()
    expect(getAll).toEqual(
      [webhookData]
    )
  })
})

describe.skip('database create webhook', () => {
  it('should return registered webhooks', async () => {
    const database = new DatabaseService()
    const create = await database.create(
      {
        ...webhookData,
        id: ''
      }
    )

    expect(create).toEqual(
      undefined
    )
  })
})
