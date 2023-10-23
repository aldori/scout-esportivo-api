import Sequelize from "sequelize";
import db from "../repositories/db.js";

const Team = db.define(
  "team",
  {
    teamId: {
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
      allowNull: false,
    },
  },
  {
    underscored: true,
  }
);
await Team.sync();
export default Team;
