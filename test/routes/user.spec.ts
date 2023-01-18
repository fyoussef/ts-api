import { UserDTO } from "../../src/dto/user/user-dto"
import { api } from "../../src/utils/axios"

describe('should test user route', () => {
  let user_id: string
  it('should create user', async () => {
    const { data } = await api.post('/user', {
      email: 'filipiemail@gmail.com',
      name: 'Filipi Youssef',
      password: 'any_pass',
      phone: '17999999999'
    })
    
    const user = data.user
    user_id = user.id

    expect(user).not.toBeUndefined()
    expect(user).toHaveProperty('id')
    expect(user).toHaveProperty('name')
    expect(user).toHaveProperty('phone')
    expect(user).toHaveProperty('email')
  })

  it('shout delete an user', async () => {
    const { status } = await api.delete('/user/' + user_id)

    expect(status).toBeGreaterThanOrEqual(200)
    expect(status).toBeLessThan(300)
  })
})