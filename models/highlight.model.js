import Sequelize from "sequelize";
import db from "../repositories/db.js";
import Action from "./action.model.js";
import Athlete from "./athlete.model.js";
import Match from "./match.model.js";

const Highlight = db.define(
  "highlights",
  {
    highlightId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    minute: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    pointX: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    pointY: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    underscored: true,
  }
);

Highlight.belongsTo(Match, { foreignKey: "matchId" });
Highlight.belongsTo(Action, { foreignKey: "actionId" });
Highlight.belongsTo(Athlete, { foreignKey: "athleteId" });

await Highlight.sync();

export default Highlight;
