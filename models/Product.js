// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init({
  product_name:{
    // define columns
    type: DataTypes.STRING,
    allowNull: false,
  },
  price:{
    type: DataTypes.DECIMAL,
    allowNull: false,
    validate:{
      isDecimal: true,
    },
  },
  stock:{ 
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  category_id:{
    type: DataTypes.INTEGER,
    primaryKey: true
  }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Product',
    tableName: 'product',
  }
);

module.exports = Product;
