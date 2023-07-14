require('dotenv').config()
import express, { Response } from 'express';
import { PrismaClient } from '@prisma/client';

import { connectRedisDB } from './databases/redis.database';
import { env } from './configs/env.config';

connectRedisDB();

const prisma = new PrismaClient();
const app = express();

async function startServer() {
  app.get('/api/test', async (_, res: Response) => {
    res.status(200).json({
      status: 'success',
      message: 'Server running',
    });
  });
  const port = env.PORT
  app.listen(port, () => {
    console.log(`Server running in port: ${port}`);
  });
}

startServer()
  .catch((err) => {
    throw err;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
