import { api } from "../../src/utils/axios"

describe('Test schedule route', () => {
  let barber_id = 'a92d4389-8a32-4a63-8340-a626da4fe430'

  it('should create an schedule to barber', async () => {
    const { data, status } = await api.post('/schedules', {
      barber_id,
      start_hour: '09:00',
      end_hour: '19:00',
      interval: 30
    })

    expect(status).toBeGreaterThanOrEqual(200)
    expect(status).toBeLessThan(300)
    expect(data).not.toBeUndefined()
    expect(data.msg).not.toBeUndefined()
    expect(data.msg).toBe('Barber schedule created')
  })

  it('should get barber schedules', async () => {
    const { data } = await api.get('/schedules/' + barber_id)

    expect(data).toHaveProperty('schedules')
  })

  it('should delete barber schedules', async () => {

    const {data, status} = await api.delete('/schedules/' + barber_id)

    expect(data).toHaveProperty('msg')
    expect(data.msg).toBe('Barber schedule has been deleted')
    expect(status).toBeGreaterThanOrEqual(200);
    expect(status).toBeLessThan(300)

  })
})