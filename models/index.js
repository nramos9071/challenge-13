// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' });

// Categories have many Products
Category.hasMany(Product, { foreignKey: 'categoryId', as: 'products' });

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, { through: ProductTag, foreignKey: 'productId', otherKey: 'tagId', as: 'tags' });

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { through: ProductTag, foreignKey: 'tagId', otherKey: 'productId', as: 'products' });


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
