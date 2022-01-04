const { verify } = require("jsonwebtoken");
const Admin = require("../models/Admin");

async function ensureAuthenticated(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ error: "Login required." });

  const [, token] = authorization.split(" ");

  try {
    const { id, email } = verify(token, process.env.TOKEN_SECRET);
    console.log(id, email);

    const admin = await Admin.findByPk(id);

    console.log(admin);

    if (!admin)
      return res.status(404).json({ error: "User invalid or not found." });

    req.adminId = id;
    return next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid or expired token." });
  }
}

module.exports = ensureAuthenticated;
