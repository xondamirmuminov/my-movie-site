import React, { useState } from "react";
import { sendQuery } from "../../utils/axios";
import { useEffect } from "react";
import Urls from "../../utils/urls";
import StyledHome from "../../styles/pages/home";
import { Link } from "react-router-dom";

function Home() {
  const [state, setState] = useState({
    popular: [],
    trending: [],
  });

  const fetchPopularMovie = async () => {
    const data = await sendQuery(Urls.POPULAR_MOVIES);
    setState((state) => ({ ...state, popular: [...data.results] }));
  };

  const fetchTrendingMovie = async () => {
    const data = await sendQuery(Urls.TRENDING);
    console.log(data);
    setState((state) => ({ ...state, trending: [...data.results] }));
  };

  useEffect(() => {
    fetchPopularMovie();
    fetchTrendingMovie();
  }, []);

  return (
    <>
      <StyledHome
        bg={state.trending[0]?.backdrop_path ?? state.trending[0]?.poster_path}
      >
        <div className="container">
          <div className="home__inner">
            <h1 className="home__title">{state.trending[0]?.title}</h1>
            <p className="home__text">{state.trending[0]?.overview}</p>
            <Link to={`/movie/${state.trending[0]?.id}`} className="home__btn">
              View More
            </Link>
          </div>
        </div>
      </StyledHome>
    </>
  );
}

export default Home;
