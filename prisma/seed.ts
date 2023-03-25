import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.services.createMany({
    data: [
      {
        name: 'Cabelo'
      },
      {
        name: 'Barba'
      },
      {
        name: 'Cabelo e Barba'
      },
      {
        name: 'Progressiva'
      },
      {
        name: 'Relachamento'
      },
      {
        name: 'Tonalizante'
      },
      {
        name: 'Hidratação'
      }
    ]
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)

    await prisma.$disconnect()

    process.exit(1)
  })
