import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("todolist", "root", "password", {
  dialect: "mysql",
  host: "localhost",
});
