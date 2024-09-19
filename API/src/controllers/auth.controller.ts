const { readjson, savejson } = require("../utils");
const jwt = require("jsonwebtoken");
// const { v4 } = require("uuid");
// const login = async (req, res) => {
//   const { email, password } = req.body;
//   const users = readjson("users.json");

//   const user = users.find(
//     (user) => user.email === email && user.password === password
//   );

//   if (!user) res.status(401).json({ message: "Invalid creadentials" });

//   const token = jwt.sign(
//     {
//       username: user.username,
//       email: user.email,
//       id: user.id,
//     },
//     process.env.JWT_SECRET
//   );
//   res.json({
//     token,
//     user: {
//       username: user.username,
//       email: user.email,
//       id: user.id,
//     },
//   });
// };
