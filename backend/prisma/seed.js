import bcrypt from 'bcryptjs';
import prisma from '../src/config/prisma.js';

async function main() {
  const hashedPassword = await bcrypt.hash('Admin@12345', 10);

  const admin = await prisma.staffUser.upsert({
    where: { email: 'admin@nexorasolutions.com' },
    update: {},
    create: {
      username: 'admin',
      email: 'admin@nexorasolutions.com',
      password: hashedPassword,
      role: 'SUPERADMIN'
    }
  });

  console.log(`[SEED SUCCESS] Admin account verified: ${admin.email}`);
}

main()
  .catch((e) => {
    console.error('Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });