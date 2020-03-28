const request = require('supertest')
const app = require('../../app')
const connection = require('../../database/connection')

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback()
    await connection.migrate.latest()
  })

  afterAll(async () => {
    await connection.destroy();
  })

  it('Should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: 'Marcio',
        email: 'marciostome@gmail.com',
        whatsapp: '45999143098',
        city: 'Medianeira',
        uf:'PR'
    })

    expect(response.body).toHaveProperty('id')
    expect(response.body.id).toHaveLength(8)
  })
})