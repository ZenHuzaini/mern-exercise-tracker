const router = require("express").Router();
let User = require("../models/user");

router.get("/", async (req, res) => {
  try {
    console.log("get something in get ");

    const user = await User.find();
    console.log("get user ", user);
    res.status(200).json({ data: user });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.post("/", async (req, res) => {
  const { username } = req.body;
  try {
    console.log("load save username", username);
    const newUser = new User({ username });
    console.log("get user ", newUser);
    await newUser.save();

    res.status(200).json("User Added!");
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

module.exports = router;
