import jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";

export const comparePassword = (password, hash) => {
  const match = bcrypt.compare(password, hash);
  return match;
};

export const hashPassword = (password) => {
  const hash = bcrypt.hash(password, 5);
  return hash;
};

export const createJWT = (user) => {
  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET
  );
  return token;
};

export const protect = (req, res, next) => {
  console.log("protect");
  const bearer = req.headers.authorization;
  if (!bearer) {
    res.status(401);
    res.json({ message: "not authorized" });
    return;
  }
  const [, token] = bearer.split(" ");

  if (!token) {
    res.status(401);
    res.json({ message: "not valid token" });
    return;
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(401);
    res.json({ message: "not valid token" });
    return;
  }
};
