import React from "react";
import { useState } from "react/cjs/react.development";

function MovieView(props) {
  const [state, setState] = useState({});
  const { id } = props.match.params;
  return <>hello</>;
}

export default MovieView;
