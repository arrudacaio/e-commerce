// Test our most important entity

import supertest from 'supertest'


describe('Some functional tests', () => {
  it('should return a entity with just a few times', async () => {
    const { body, status } = await supertest(app).get('/entity')

    expect(status).toBe(200)
    expect(body).toBe({ 'some': 'thing' })
  })
})