import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Task } from "./entity/task.js";
import { parse } from "pg-connection-string";

const dbConfig = parse(process.env.DATABASE_URL);

export const AppDataSource = new DataSource({
  type: "postgres",
  host: dbConfig.host,
  port: parseInt(dbConfig.port),
  username: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database,
  ssl: { rejectUnauthorized: false },
  synchronize: true,
  logging: false,
  entities: [Task],
});
