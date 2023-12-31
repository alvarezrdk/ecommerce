const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
const { INTEGER } = require('sequelize');
const { STRING } = require('sequelize');

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: STRING,
      allowNull:false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
