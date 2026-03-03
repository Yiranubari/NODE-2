import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const creatorId = "3980f8e9-68c6-468b-bb04-268a223b5ba2";

const movies = [
  {
    title: "Inception",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    releaseDate: new Date("2010-07-16"),
    genre: "Sci-Fi",
    rating: 8.8,
    creatorId: creatorId,
  },
  {
    title: "The Matrix",
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    releaseDate: new Date("1999-03-31"),
    genre: "Sci-Fi",
    rating: 8.7,
    creatorId: creatorId,
  },
  {
    title: "Interstellar",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    releaseDate: new Date("2014-11-07"),
    genre: "Sci-Fi",
    rating: 8.6,
    creatorId: creatorId,
  },
  {
    title: "The Dark Knight",
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    releaseDate: new Date("2008-07-18"),
    genre: "Action",
    rating: 9.0,
    creatorId: creatorId,
  },
  {
    title: "Pulp Fiction",
    description:
      "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    releaseDate: new Date("1994-10-14"),
    genre: "Crime",
    rating: 8.9,
    creatorId: creatorId,
  },
  {
    title: "The Shawshank Redemption",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    releaseDate: new Date("1994-09-23"),
    genre: "Drama",
    rating: 9.3,
    creatorId: creatorId,
  },
  {
    title: "The Godfather",
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    releaseDate: new Date("1972-03-24"),
    genre: "Crime",
    rating: 9.2,
    creatorId: creatorId,
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    description:
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    releaseDate: new Date("2003-12-17"),
    genre: "Fantasy",
    rating: 8.9,
    creatorId: creatorId,
  },
  {
    title: "Fight Club",
    description:
      "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much, much more.",
    releaseDate: new Date("1999-10-15"),
    genre: "Drama",
    rating: 8.8,
    creatorId: creatorId,
  },
];
