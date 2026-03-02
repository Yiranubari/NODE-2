const express = require("express");
const app = express();

// Import Routes
import movieRoutes from "./routes/movieRoutes.js";

// API Routes
app.use("/movies", movieRoutes);

const PORT = 5001;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default router;
