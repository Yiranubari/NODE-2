import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const userId = "3980f8e9-68c6-468b-bb04-268a223b5ba2";

const movies = [
  {
    title: "Inception",
    overview:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    releaseYear: new Date("2010-07-16"),
    genres: "Sci-Fi",
    runtime: 148,
    posterUrl: "https://example.com/posters/inception.jpg",
    createdBy: userId,
  },
  {
    title: "The Matrix",
    overview:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    releaseYear: new Date("1999-03-31"),
    genres: "Sci-Fi",
    rating: 8.7,
    posterUrl: "https://example.com/posters/the-matrix.jpg",
    createdBy: userId,
  },
  {
    title: "Interstellar",
    overview:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    releaseYear: new Date("2014-11-07"),
    genres: "Sci-Fi",
    rating: 8.6,
    posterUrl: "https://example.com/posters/interstellar.jpg",
    createdBy: userId,
  },
  {
    title: "The Dark Knight",
    overview:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    releaseYear: new Date("2008-07-18"),
    genres: "Action",
    rating: 9.0,
    posterUrl: "https://example.com/posters/the-dark-knight.jpg",
    createdBy: userId,
  },
  {
    title: "Pulp Fiction",
    overview:
      "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    releaseYear: new Date("1994-10-14"),
    genres: "Crime",
    rating: 8.9,
    posterUrl: "https://example.com/posters/pulp-fiction.jpg",
    createdBy: userId,
  },
  {
    title: "The Shawshank Redemption",
    overview:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    releaseYear: new Date("1994-09-23"),
    genres: "Drama",
    rating: 9.3,
    posterUrl: "https://example.com/posters/the-shawshank-redemption.jpg",
    createdBy: userId,
  },
  {
    title: "The Godfather",
    overview:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    releaseYear: new Date("1972-03-24"),
    genres: "Crime",
    rating: 9.2,
    posterUrl: "https://example.com/posters/the-godfather.jpg",
    createdBy: userId,
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    overview:
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    releaseYear: new Date("2003-12-17"),
    genres: "Fantasy",
    rating: 8.9,
    posterUrl:
      "https://example.com/posters/the-lord-of-the-rings-the-return-of-the-king.jpg",
    createdBy: userId,
  },
  {
    title: "Fight Club",
    overview:
      "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much, much more.",
    releaseYear: new Date("1999-10-15"),
    genres: "Drama",
    rating: 8.8,
    posterUrl: "https://example.com/posters/fight-club.jpg",
    createdBy: userId,
  },
];
