const { Sequelize, Model } = require("sequelize");
const { hash } = require("bcrypt");

class Admin extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
          defaultValue: Sequelize.UUIDV4,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: {
            args: true,
            msg: "Email already registered.",
          },
          validate: {
            isEmail: {
              msg: "Invalid email.",
            },
          },
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            len: {
              args: [8, 20],
              msg: "Password must have between 8 and 20 characters.",
            },
          },
        },
      },
      {
        sequelize,
      }
    );

    this.addHook("beforeSave", async (admin) => {
      if (admin.password) admin.password = await hash(admin.password, 8);
    });

    return this;
  }
}

module.exports = Admin;
