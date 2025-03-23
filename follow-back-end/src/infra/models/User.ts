import { DataTypes, Sequelize } from "sequelize";

const sequelize = new Sequelize("follow-cep-db", "postgres", "admin", {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
});

export const User = sequelize.define("user", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

(async () => {
  await sequelize.sync({ force: false });
})();
