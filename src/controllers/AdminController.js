const Admin = require("../models/Admin");

class AdminController {
  async create(req, res) {
    try {
      const { email, password } = req.body;

      const admin = await Admin.create({ email, password });

      return res.status(201).json(admin);
    } catch (e) {
      return res.status(404).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

module.exports = new AdminController();
