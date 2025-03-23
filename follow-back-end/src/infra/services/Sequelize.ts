import {  Sequelize } from "sequelize";

export const SequelizeService = new Sequelize("follow-cep-db", "postgres", "admin", {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
});