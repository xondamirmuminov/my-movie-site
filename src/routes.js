import React from "react";
import Home from "./containers/Home";
import Movie from "./containers/Movies/Movie";
import MovieView from "./containers/Movies/MovieView";
import MovieCast from "./containers/Movies/MovieCast";
import Person from "./containers/Person";

export default [
  {
    path: "/",
    component: Home,
    key: "home",
  },
  {
    path: "/movies",
    component: Movie,
    key: "movie",
  },
  {
    path: "/movie/:id",
    component: MovieView,
    key: "movieDetails",
  },
  {
    path: "/movie/:id/cast",
    component: MovieCast,
    key: "movieCast",
  },
  {
    path: "/person/:id",
    component: Person,
    key: "person",
  },
];
