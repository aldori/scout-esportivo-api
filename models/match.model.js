import Sequelize from "sequelize";
import db from "../repositories/db.js";
import Opponent from "./opponent.model.js";

const Match = db.define(
  "matches",
  {
    matchId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    place: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    date: {
      type: Sequelize.DATE,
      allowNull: false
    },
    hour: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    goalScored: {
      type: Sequelize.INTEGER,
    },
    goalReceived: {
      type: Sequelize.INTEGER,
    },
  },
  {
    underscored: true,
  }
);

Match.belongsTo(Opponent, { foreignKey: "opponentId" });

await Match.sync();

export default Match;
