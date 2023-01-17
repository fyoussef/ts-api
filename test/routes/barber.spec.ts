import { Barber } from "@prisma/client";
import { api } from "../../src/utils/axios"

describe('Test route to create barber', () => {
  let barber: Barber;
  
  it('should create barber', async () => {
    const { data } = await api.post('/barber', {name: 'Youssef'})

    barber = data
    
    expect(barber).not.toBeUndefined()
    expect(barber).toHaveProperty('id')
    expect(barber).toHaveProperty('name')
    expect(barber.name).toEqual('Youssef')
  })

  it('shold get barber', async () => {
    const { data: barberFound } = await api.get('/barber/' + barber.id)

    expect(barberFound).not.toBeUndefined()
    expect(barberFound).toHaveProperty('id')
    expect(barberFound).toHaveProperty('name')
  })

  it('should get barbers', async () => {
    const { data } = await api.get('/barber')
    const barbers = data

    expect(barbers).not.toBeUndefined()
    expect(barbers).toBeTruthy()
  })

  it('shoud update barber', async () => {

    const { data } = await api.put('/barber/' + barber.id, {
      name: 'Filipi'
    })
    const barberUpdated = data.barber

    expect(barberUpdated).not.toBeUndefined()
    expect(barberUpdated).toHaveProperty('id')
    expect(barberUpdated).toHaveProperty('name')
    expect(barberUpdated.name).toBe('Filipi')
  })

  it('should delete barber', async () => {
    const res = await api.delete('/barber/' + barber.id)
    const { status, data } = res

    expect(data.msg).toBe('Barber deleted')
    expect(status).toBeGreaterThan(200);
    expect(status).toBeLessThan(300)
  })
})