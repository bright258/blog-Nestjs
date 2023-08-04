import 'reflect-metadata';
import { DataSource } from 'typeorm';
import 'dotenv/config';
import { BlogPost } from './../src/post/post.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.HOST,
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: false,
  logging: false,
  entities: [BlogPost],
  migrations: ['./src/migration/*.ts'],
  subscribers: [],
});
