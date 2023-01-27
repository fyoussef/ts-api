import { User } from '../../src/domain/entities/user'

describe('User entity', () => {
  it('should test user entity method validate', () => {
    const user = new User({
      email: 'filipinho@gmail.com',
      name: 'Filipi',
      password: '123456789',
      phone: '17991814999'
    })

    const valid = user.validate()

    expect(valid).toBe(true)
  })
})
