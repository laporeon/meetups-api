const { Sequelize, Model } = require("sequelize");

class Participant extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
          defaultValue: Sequelize.UUIDV4,
        },
        first_name: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "Field FIRST_NAME is required.",
            },
          },
        },
        last_name: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "Field LAST_NAME is required.",
            },
          },
        },
        attendance: {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
          allowNull: false,
        },
        rate: {
          type: Sequelize.FLOAT,
          allowNull: true,
        },
        comments: {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: "",
        },
      },
      { sequelize }
    );
    return this;
  }
}

module.exports = Participant;
