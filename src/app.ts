require('dotenv').config()
import express, { Response } from 'express';
import { PrismaClient } from '@prisma/client';
import config from 'config';

import validateEnv from './utils/validateEnv';
import { redisClient, connectRedisDB } from './databases/redis.database';

validateEnv();

connectRedisDB();

const prisma = new PrismaClient();
const app = express();

async function bootstrap() {
  app.get('/api/test', async (_, res: Response) => {
    const message = await redisClient.get('connectMessage');
    res.status(200).json({
      status: 'success',
      message,
    });
  });
  const port = config.get<number>('port');
  app.listen(port, () => {
    console.log(`Server on port: ${port}`);
  });
}

bootstrap()
  .catch((err) => {
    throw err;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
