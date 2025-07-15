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

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
