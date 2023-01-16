import { api } from "../../src/utils/axios"

describe('Test schedule route', () => {
  let barber_id = '08b154b3-4b41-413e-8b9d-88bd7891fa15'
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
})