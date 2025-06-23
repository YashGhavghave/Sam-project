import express from "express";
import cors from "cors";
import { DB_Connection } from "./Database/Database.DB_Connection.js";
import mongoose from "mongoose";
import DataModelSchema from "./Data_model/model.data_model.js";

try {
  DB_Connection();
} catch (err) {
  console.error("Database connection failed:", err);
  process.exit(1);
}

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

// REGISTER ROUTE
app.post("/register", async (req, res) => {
  const { user, pass } = req.body;

  try {
    const existingUser = await DataModelSchema.findOne({ user });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const newUser = await DataModelSchema.create({ user, pass });
    console.log("User registered:", newUser);

    res
      .status(201)
      .json({ message: "Registration Successful", token: "123ABC" });
  } catch (err) {
    console.error("Registration error:", err);
    res
      .status(500)
      .json({ message: "Registration Failed", token: "Not Defined" });
  }
});

// LOGIN ROUTE
app.post("/", async (req, res) => {
  const { user, pass } = req.body;

  try {
    const existingUser = await DataModelSchema.findOne({ user });

    if (!existingUser) {
      return res.status(400).json({ message: "User Not Found" });
    }

    if (existingUser.pass !== pass) {
      return res.status(401).json({ message: "Invalid Password" });
    }

    return res
      .status(200)
      .json({ message: "Login Successful", token: "123ABC" });
  } catch (error) {
    console.error("Error during login:", error);
    return res
      .status(400)
      .json({ message: "Login Failed", token: "Not Defined" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
