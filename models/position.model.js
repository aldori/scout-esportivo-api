import Sequelize from "sequelize";
import db from "../repositories/db.js";

const Position = db.define(
  "positions",
  {
    positionId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
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

await Position.sync();

export default Position;
