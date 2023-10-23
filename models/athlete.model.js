import Sequelize from "sequelize";
import db from "../repositories/db.js";
import Position from "./position.model.js";

const Athlete = db.define(
  "athletes",
  {
    athleteId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    picture: {
      type: Sequelize.STRING,
    },
    number: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    phone: {
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

Athlete.belongsTo(Position, { foreignKey: "positionId" });

await Athlete.sync();

export default Athlete;
