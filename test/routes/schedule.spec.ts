import { api } from "../../src/utils/axios"

describe('Test schedule route', () => {
  it('should create an schedule to barber', async () => {
    const { data } = await api.post('/schedules', {
      barber_id: '08b154b3-4b41-413e-8b9d-88bd7891fa15',
      start_hour: '09:00',
      end_hour: '19:00',
      interval: 30
    })
  })
})