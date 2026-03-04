import { prisma } from "../config/db.js";

const addToWatchlist = async (req, res) => {
  const { movieId, status, rating, notes } = req.body;

  // Check if movie exists
  const movie = await prisma.movie.findUnique({
    where: { id: movieId },
  });

  if (!movie) {
    return res.status(404).json({ message: "Movie not found" });
  }

  // Check if already in watchlist
  const existingInWatchlist = await prisma.watchlistItem.findUnique({
    where: { id: movieId },
  });
};
