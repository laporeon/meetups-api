const { sign } = require("jsonwebtoken");
const { compare } = require("bcrypt");

const Admin = require("../models/Admin");

class TokenController {
  async store(req, res) {
    try {
      const { email, password } = req.body;

      const admin = await Admin.findOne({ where: { email } });

      if (!admin)
        return res.status(401).json({ error: "Invalid credentials." });

      const passwordMatches = await compare(password, admin.password);

      if (!passwordMatches)
        return res.status(401).json({ error: "Invalid credentials." });

      const { id } = admin;

      const token = sign({ id, email }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION_TIME,
      });

      return res.status(200).json({ token });
    } catch (error) {
      return res
        .status(400)
        .json({ errors: error.errors.map((err) => err.message) });
    }
  }
}

module.exports = new TokenController();
