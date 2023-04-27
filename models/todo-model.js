import { Sequelize } from "sequelize";
import { sequelize } from "../db/index.js";

export const Student = sequelize.define("todolist", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  chore: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
