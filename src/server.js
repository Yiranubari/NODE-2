import express from "express";
import { config } from "dotenv";

// Import Routes (note: routes folder is outside src)
import movieRoutes from "../routes/movieRoutes.js";

config();

const app = express();

// API Routes
app.use("/movies", movieRoutes);

const PORT = 5001;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
