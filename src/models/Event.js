const { Sequelize, Model } = require("sequelize");

class Event extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
          defaultValue: Sequelize.UUIDV4,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        location: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        starts_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        finishes_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        vacancy_limit: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

module.exports = Event;
