import { DataTypes, Sequelize } from "sequelize";

const sequelize = new Sequelize("follow-cep-db", "postgres", "admin", {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
});

export const User = sequelize.define("user", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

(async () => {
  await sequelize.sync({ force: true });
})();
