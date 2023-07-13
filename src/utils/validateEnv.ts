/*
 *validateEnv.ts validate the type of the environment variables in .env with envalid
 */

import * as envalid from 'envalid';

const validateEnv = () => {
  envalid.cleanEnv(process.env, {
    NODE_ENV: envalid.str(),
    PORT: envalid.port(),
    POSTGRES_VERSION: envalid.str(),
    POSTGRES_USER: envalid.str(),
    POSTGRES_PASSWORD: envalid.str(),
    POSTGRES_DB: envalid.str(),
    DATABASE_URL: envalid.str(),
    POSTGRES_PORT: envalid.port(),
    REDIS_VERSION: envalid.str(),
    REDIS_PORT: envalid.port(),
  });
};

export default validateEnv;
