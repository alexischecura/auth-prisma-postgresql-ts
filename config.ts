import envalid from 'envalid'

const env = envalid.cleanEnv(process.env,{
  NODE_ENV: envalid.str(),
  PORT: envalid.port(),
  POSTGRES_VERSION: envalid.str(),
  POSTGRES_USER: envalid.str(),
  POSTGRES_PASSWORD: envalid.str(),
  POSTGRES_DB: envalid.str(),
  DATABASE_URL: envalid.str(),
  POSTGRES_PORT: envalid.port(),
  REDIS_VERSION: envalid.str(),
  REDIS_PORT: envalid.port()
})

export default env;