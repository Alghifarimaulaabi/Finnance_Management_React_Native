import 'dotenv/config'
import app from './app.ts'
import { prisma } from './lib/prisma.ts'

const PORT = process.env.PORT ?? 3000

async function main() {
  // Verifikasi koneksi database sebelum server start
  await prisma.$connect()
  console.log('✅ Database connected')

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`)
  })
}

main().catch(async (err) => {
  console.error('❌ Failed to start server:', err)
  await prisma.$disconnect()
  process.exit(1)
})
