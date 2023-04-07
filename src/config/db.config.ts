import { registerAs } from '@nestjs/config';

export default registerAs('db', () => ({
  protocol: process.env.DB_PROTOCOL,
  host: process.env.DB_HOST || '127.0.0.1',
  port: parseInt(process.env.DB_PORT, 10) || 5432,
  name: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
}));
