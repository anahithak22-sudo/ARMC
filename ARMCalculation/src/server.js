const express = require("express");
const cors = require("cors");
const path = require("path");
const { calculate, getRandomIdea } = require("./calculator");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve frontend
app.use(express.static(path.join(__dirname, "../public")));

// POST /calculate
app.post("/calculate", (req, res) => {
  const { item } = req.body;
  if (!item || typeof item !== "string" || item.trim() === "") {
    return res.status(400).json({ error: "Поле 'item' обязательно и не может быть пустым." });
  }
  const result = calculate(item.trim());
  res.json(result);
});

// GET /random
app.get("/random", (req, res) => {
  const idea = getRandomIdea();
  const result = calculate(idea);
  res.json(result);
});

// GET /
app.get("/api", (req, res) => {
  res.json({
    name: "Armenia Price Calculator API",
    description: "Сколько бы это стоило в Армении?",
    slogan: "Everything has a price. Even this.",
    endpoints: {
      "POST /calculate": "Body: { item: string }",
      "GET /random": "Случайная идея с расчётом",
    },
  });
});

app.listen(PORT, () => {
  console.log(`ARMCALC running at http://localhost:${PORT}`);
});
