const { Sequelize, Model } = require("sequelize");

class Category extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
          defaultValue: Sequelize.UUIDV4,
        },
        category_name: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "",
          unique: {
            args: true,
            msg: "Category already registered.",
          },
        },
      },
      { sequelize, tableName: "categories" }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Event);
  }
}

module.exports = Category;
