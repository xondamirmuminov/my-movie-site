import React, { useState } from "react";
import { sendQuery } from "../../utils/axios";
import { useEffect } from "react";
import Urls from "../../utils/urls";
import StyledHome from "../../styles/pages/home";
import { Link } from "react-router-dom";
import Movies from "../Movies";

function Home() {
  const [popular, setPopular] = useState([]);
  const [trending, setTrending] = useState([]);

  const fetchPopularMovie = async () => {
    const data = await sendQuery(Urls.POPULAR_MOVIES);
    setPopular([...data?.results]);
  };

  const fetchTrendingMovie = async () => {
    const data = await sendQuery(Urls.TRENDING);
    setTrending([...data?.results]);
  };

  useEffect(() => {
    fetchPopularMovie();
    fetchTrendingMovie();
  }, []);

  return (
    <>
      <StyledHome bg={trending[0]?.backdrop_path ?? trending[0]?.poster_path}>
        <div className="container">
          <div className="home__inner">
            <h1 className="home__title">{trending[0]?.title}</h1>
            <p className="home__text">{trending[0]?.overview}</p>
            <Link to={`/movie/${trending[0]?.id}`} className="home__btn">
              View More
            </Link>
          </div>
        </div>
      </StyledHome>
      <Movies />
    </>
  );
}

export default Home;
