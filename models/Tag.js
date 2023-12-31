const { Model, DataTypes, INET } = require('sequelize');

const sequelize = require('../config/connection.js');
const { INTEGER } = require('sequelize');
const { STRING } = require('sequelize');

class Tag extends Model {}

Tag.init(
  {
    // define columns
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tag_name: {
      type: STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
