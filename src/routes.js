import React from "react";
import Home from "./containers/Home";
import MovieView from "./containers/Movies/MovieView";
import MovieCast from "./containers/Movies/MovieCast";

export default [
  {
    path: "/",
    component: Home,
    key: "home",
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
];
