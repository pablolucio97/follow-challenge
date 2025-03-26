import { Sequelize } from "sequelize";

export const sequelizeDb = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASSWORD!,
  {
    host: "postgres",
    port: 5432,
    dialect: "postgres",
    logging: false,
  }
);
