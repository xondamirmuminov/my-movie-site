import React from "react";
import Home from "./containers/Home";
import MovieView from "./containers/Movies/MovieView";

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
];
