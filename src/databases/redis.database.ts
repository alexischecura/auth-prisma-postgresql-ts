import config from 'config'
import { createClient } from 'redis';

export const redisClient = createClient({
  url: config.get<string>('redisUrl'),
});

export const connectRedisDB = async () => {
  try {
    await redisClient.connect();
    console.log('Redis DB connection successful');
    redisClient.set('connectMessage', 'Redis DB connection successful')
  } catch (error) {
    console.error(error);
    setTimeout(connectRedisDB, 2000);
  }
};

