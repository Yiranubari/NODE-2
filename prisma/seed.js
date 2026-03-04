import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const userId = "3980f8e9-68c6-468b-bb04-268a223b5ba2";

const movies = [
  {
    title: "Inception",
    overview:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    releaseYear: 2010,
    genres: ["Sci-Fi"],
    runtime: 148,
    posterUrl: "https://example.com/posters/inception.jpg",
    createdBy: userId,
  },
  {
    title: "The Matrix",
    overview:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    releaseYear: 1999,
    genres: ["Sci-Fi"],
    posterUrl: "https://example.com/posters/the-matrix.jpg",
    createdBy: userId,
  },
  {
    title: "Interstellar",
    overview:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    releaseYear: 2014,
    genres: ["Sci-Fi"],
    posterUrl: "https://example.com/posters/interstellar.jpg",
    createdBy: userId,
  },
  {
    title: "The Dark Knight",
    overview:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    releaseYear: 2008,
    genres: ["Action"],
    posterUrl: "https://example.com/posters/the-dark-knight.jpg",
    createdBy: userId,
  },
  {
    title: "Pulp Fiction",
    overview:
      "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    releaseYear: 1994,
    genres: ["Crime"],
    posterUrl: "https://example.com/posters/pulp-fiction.jpg",
    createdBy: userId,
  },
  {
    title: "The Shawshank Redemption",
    overview:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    releaseYear: 1994,
    genres: ["Drama"],
    posterUrl: "https://example.com/posters/the-shawshank-redemption.jpg",
    createdBy: userId,
  },
  {
    title: "The Godfather",
    overview:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    releaseYear: 1972,
    genres: ["Crime"],
    posterUrl: "https://example.com/posters/the-godfather.jpg",
    createdBy: userId,
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    overview:
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    releaseYear: 2003,
    genres: ["Fantasy"],
    posterUrl:
      "https://example.com/posters/the-lord-of-the-rings-the-return-of-the-king.jpg",
    createdBy: userId,
  },
  {
    title: "Fight Club",
    overview:
      "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much, much more.",
    releaseYear: 1999,
    genres: ["Drama"],
    posterUrl: "https://example.com/posters/fight-club.jpg",
    createdBy: userId,
  },
];

const main = async () => {
  console.log("Seeding database with movies...");

  for (const movie of movies) {
    await prisma.movie.create({
      data: movie,
    });
    console.log(`Inserted movie: ${movie.title}`);
  }

  console.log("Seeding completed.");
};

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
