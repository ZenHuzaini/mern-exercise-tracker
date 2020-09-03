const router = require("express").Router();
let Exercise = require("../models/exercise");

router.get("/", async (req, res) => {
  console.log("get something ");
  try {
    const exercise = await Exercise.find();
    res.status(200).json({ data: exercise });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id);
    res.status(200).json({ data: exercise });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.post("/", async (req, res) => {
  const { username, description, date, duration } = req.body;
  try {
    const newExercise = new Exercise(req.body);
    await newExercise.save();
    res.status(200).json("Exercise Added!");
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.delete("/:id", async (req, res) => {
  console.log("get something ");
  try {
    const exercise = await Exercise.findByIdAndDelete(req.params.id);
    res.status(200).json({ data: exercise, message: "deleted!" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.put("/:id", async (req, res) => {
  const { username, description, date, duration } = req.body;
  try {
    const result = await Exercise.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({ message: "exercise updated!", data: result });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

module.exports = router;
