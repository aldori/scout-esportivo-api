import Sequelize from "sequelize";
import db from "../repositories/db.js";

const Opponent = db.define(
  "opponents",
  {
    opponentId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    logo: {
      type: Sequelize.STRING,
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

await Opponent.sync();

export default Opponent;
