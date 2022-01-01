module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("events", {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
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
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("events");
  },
};
