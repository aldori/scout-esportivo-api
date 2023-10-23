import Sequelize from "sequelize";
import db from "../repositories/db.js";
import Athlete from "./athlete.model.js";
import Match from "./match.model.js";

const Lineup = db.define(
  "lineup",
  {
    lineupId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
  },
  {
    underscored: true,
  }
);

Lineup.belongsTo(Athlete, { foreignKey: "athletId" });
Lineup.belongsTo(Match, { foreignKey: "matchId" });

await Lineup.sync();

export default Lineup;
