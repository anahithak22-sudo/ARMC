# 🇦🇲 ARMCALC — Armenia Price Calculator

> **Everything has a price. Even this.**

## Install & Run

```bash
npm install
npm start
```

Open `http://localhost:3000`

## API Endpoints

```bash
# Calculate price
curl -X POST http://localhost:3000/calculate \
  -H "Content-Type: application/json" \
  -d '{"item": "Ferrari"}'

# Random idea
curl http://localhost:3000/random
```

## Structure

```
ARMCalculation/
├── src/
│   ├── server.js       — Express server
│   ├── calculator.js   — Price logic
│   ├── database.js     — Known items
│   └── equivalents.js  — Armenian equivalents
├── public/
│   ├── index.html      — UI
│   ├── style.css       — Styles
│   └── app.js          — Frontend logic
└── package.json
```
