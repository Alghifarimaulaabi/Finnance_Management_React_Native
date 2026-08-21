import 'dotenv/config'
import { PrismaClient, TransactionType } from '../generated/prisma/client.ts'
import pg from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'

const connectionString = process.env.DATABASE_URL
const pool = new pg.Pool({ connectionString })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
  const categories = [
    { name: 'Gaji', type: TransactionType.income, isDefault: true },
    { name: 'Bonus', type: TransactionType.income, isDefault: true },
    { name: 'Makanan & Minuman', type: TransactionType.expense, isDefault: true },
    { name: 'Transportasi', type: TransactionType.expense, isDefault: true },
    { name: 'Tagihan & Utilitas', type: TransactionType.expense, isDefault: true },
    { name: 'Belanja', type: TransactionType.expense, isDefault: true },
    { name: 'Hiburan', type: TransactionType.expense, isDefault: true },
    { name: 'Kesehatan', type: TransactionType.expense, isDefault: true },
    { name: 'Lainnya', type: TransactionType.expense, isDefault: true },
  ]

  console.log('Start seeding...')
  for (const c of categories) {
    const category = await prisma.category.findFirst({
      where: { name: c.name, type: c.type },
    })
    
    if (!category) {
      await prisma.category.create({
        data: c,
      })
      console.log(`Created category: ${c.name} (${c.type})`)
    } else {
      console.log(`Category already exists: ${c.name} (${c.type})`)
    }
  }
  console.log('Seeding finished.')
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
