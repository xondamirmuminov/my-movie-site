import React, { useState, useEffect } from "react";
import StyledMovies from "../../styles/pages/movies";
import SwitchSelector from "react-switch-selector";
import Urls from "../../utils/urls";
import { sendQuery } from "../../utils/axios";
import Card from "../Card";

function Movies() {
  const [state, setState] = useState({
    theaters: [],
    tv: [],
  });
  const [tabName, setTabName] = useState("ontv");

  const handleTab = (type) => {
    setTabName(type);
  };

  const fetchTheaters = async () => {
    const result = await sendQuery(Urls.NOW_PLAYING);
    console.log(result);
    setState((state) => ({ ...state, theaters: result?.results }));
  };

  const fetchTV = async () => {
    const result = await sendQuery(Urls.TV_POPULAR);
    console.log(result);
    setState((state) => ({ ...state, tv: result?.results }));
  };

  const options = [
    {
      label: "On Tv",
      value: "ontv",
      selectedBackgroundColor: "var(--red)",
    },
    {
      label: "In Theaters",
      value: "theaters",
      selectedBackgroundColor: "var(--red)",
    },
  ];

  useEffect(() => {
    fetchTheaters();
    fetchTV();
  }, []);

  console.log(tabName);

  const initialSelectedIndex = options.findIndex(({ value }) => value === "");
  return (
    <StyledMovies>
      <div className="conatiner">
        <div className="movie__search">
          <input type="text" className="movie__search-inp" />
          <button className="movie__search-btn">Search</button>
        </div>
        <div className="movie__inner">
          <h2 className="movie__title">What's Popular</h2>
          <SwitchSelector
            onChange={handleTab}
            options={options}
            initialSelectedIndex={initialSelectedIndex}
            backgroundColor={"white"}
            fontColor={"black"}
            fontSize={"20px"}
          />
          <Card
            img={state.tv[0]?.poster_path}
            progress={state.tv[0]?.vote_average}
            title={state.tv[0]?.name}
            date={new Date(state.tv[0]?.first_air_date)
              .toUTCString()
              .split(" ")
              .slice(0, 4)
              .join(" ")}
            id={state.tv[0]?.id}
          />
        </div>
      </div>
    </StyledMovies>
  );
}

export default Movies;
