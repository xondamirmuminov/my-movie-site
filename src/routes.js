import React from "react";
import Home from "./containers/Home";
import Movies from "./containers/Movies";

export const routes = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/movies",
    component: <Movies />,
  },
];
