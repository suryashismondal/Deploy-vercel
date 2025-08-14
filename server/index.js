const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const questionRoutes = require('./routes/questionRoutes');
const resultRoutes = require('./routes/resultRoutes');

const app = express();
app.use(express.json());
app.use(cors(
  {
    origin: ["https://deploy-vercel-xjqj.vercel.app"],
    methods: ["POST","GET"],
    credentials: true
  }
));

mongoose
  .connect(
    process.env.MONGO_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use('/api/questions', questionRoutes);

app.use('/api/results',resultRoutes);

app.listen(3001, () => {
  console.log("Server listening on https://deploy-vercel-snowy-nine.vercel.app/");
});