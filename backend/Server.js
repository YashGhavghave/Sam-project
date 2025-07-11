// server.js

import express, { Router } from "express";
import cors from "cors";
import { DB_Connection } from "./Database/Database.DB_Connection.js";
// import DataModelSchema from "./Data_model/userdatamodel.data_model.js";
// import { TokenGeneration } from "./middleware/tokenGeneration.js";
import cookieParser from "cookie-parser";
// import jwt from "jsonwebtoken";
import dotenvx from '@dotenvx/dotenvx'
import userroute from './routes/register.route.js'
import logoutuser from './routes/logout.route.js'
import profileroute from './routes/profile.route.js'
import loginuser from './routes/login.route.js'

dotenvx.config()

// ==== Connect to DB ====
try {
  DB_Connection();
} catch (err) {
  console.error("Database connection failed:", err);
  process.exit(1);
}

// ==== Initialize App ====
const app = express();
const port = 3000;

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// ==== REGISTER ROUTE ====

// app.post("/register", async (req, res) => {
//   const { user, pass } = req.body;

//   try {
//     const existingUser = await DataModelSchema.findOne({ user });
//     if (existingUser) {
//       return res.status(409).json({ message: "User already exists" });
//     }

//     const newUser = await DataModelSchema.create({ user, pass });
//     console.log("✅ User registered:", newUser.user);

//     res.status(201).json({ message: "Registration Successful" });
//   } catch (err) {
//     console.error("❌ Registration error:", err);
//     res.status(500).json({ message: "Registration Failed" });
//   }
// });

app.use('/', userroute) 

app.use('/', logoutuser) 

app.use('/', profileroute)

app.use('/', loginuser)


// // ==== LOGIN ROUTE ====
// app.post("/login", async (req, res) => {
//   const { user, pass } = req.body;

//   try {
//     const existingUser = await DataModelSchema.findOne({ user });

//     if (!existingUser) {
//       return res.status(400).json({ message: "User Not Found" });
//     }

//     if (existingUser.pass !== pass) {
//       return res.status(401).json({ message: "Invalid Password" });
//     }

//     const token = TokenGeneration(existingUser._id, existingUser.user);

//     res.cookie("token", token, {
//       // path: '/',
//       httpOnly: true,
//       secure: false, // set to true in production with HTTPS
//       sameSite: "Strict",
//       // maxAge: 1h
//     });

//     return res.status(200).json({ message: "Login Success" });
//   } catch (error) {
//     console.error("❌ Error during login:", error);
//     return res.status(500).json({ message: "Login Failed" });
//   }
// });

// ==== VERIFY MIDDLEWARE ====
// const verifyUser = (req, res, next) => {
//   const token = req.cookies.token;
//   if (!token) return res.status(401).json({ message: "No token found" });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRATE_KEY);
//     req.user = decoded;
//     next();
//   } catch (err) {
//     return res.status(403).json({ message: "Invalid token" });
//   }
// };

// // ==== PROFILE ROUTE ====
// app.get("/api/profile", verifyUser, async (req, res) => {
//   try {
//     const user = await DataModelSchema.findById(req.user.id).select("-pass");
//     if (!user) return res.status(404).json({ message: "User not found" });
//     res.status(200).json({ user });
//   } catch (err) {
//     res.status(500).json({ message: "Failed to fetch user" });
//   }
// });

// ==== LOGOUT ROUTE ====
// app.get("/logout", (req, res) => {
//   res.clearCookie("token");
//   res.status(200).json({ message: "Logged out successfully" });
// });






// ==== Start Server ====
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
