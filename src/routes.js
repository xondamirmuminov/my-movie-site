import React from "react";
import Home from "./containers/Home";
import Movie from "./containers/Movies/Movie";
import MovieView from "./containers/Movies/MovieView";
import MovieCast from "./containers/Movies/MovieCast";
import Person from "./containers/Person";
import TV from "./containers/TV";
import TvView from "./containers/TV/TvView";
import TvCast from "./containers/TV/TvCast";

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
  {
    path: "/tv",
    component: TV,
    key: "tv",
  },
  {
    path: "/tv/:id",
    component: TvView,
    key: "tvView",
  },
  {
    path: "/tv/:id/cast",
    component: TvCast,
    key: "tvCast",
  },
];
