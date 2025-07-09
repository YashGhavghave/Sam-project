import { Router } from "express";


Router.post("/register", async (req, res) => {
  const { user, pass } = req.body;

  try {
    const existingUser = await DataModelSchema.findOne({ user });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const newUser = await DataModelSchema.create({ user, pass });
    console.log("✅ User registered:", newUser.user);

    res.status(201).json({ message: "Registration Successful" });
  } catch (err) {
    console.error("❌ Registration error:", err);
    res.status(500).json({ message: "Registration Failed" });
  }
});