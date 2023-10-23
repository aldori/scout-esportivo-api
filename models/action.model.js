import Sequelize from "sequelize";
import db from "../repositories/db.js";

const Action = db.define(
  "actions",
  {
    actionId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    color: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    active: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
  },
  {
    underscored: true,
  }
);

await Action.sync();

export default Action;
