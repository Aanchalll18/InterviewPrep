const jwt = require('jsonwebtoken');
const User = require('../Models/UserModel');

const protect = async (req, res, next) => {
  try {
    let token = req.headers.authorization;
    console.log(token)

    if (token && token.startsWith("Bearer ")) {
      token = token.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");

      if (!req.user) {
        return res.status(401).json({ message: "User not found" });
      }

      next();
    } else {
      return res.status(401).json({ message: "Not Authorized, token missing or malformed" });
    }
  } catch (error) {
    console.error("Auth error:", error);
    return res.status(401).json({ message: "Not Authorized, token failed" });
  }
};
module.exports = {protect};
