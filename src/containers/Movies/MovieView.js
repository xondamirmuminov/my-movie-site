import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import { Link } from "react-router-dom";
import axios from "axios";
import { Image } from "antd";
import keys from "../../configs";
import StyledMovieDetails from "../../styles/pages/movieDetails";
import moment from "moment";
import { Progress } from "antd";
import {
  RiMenuAddLine,
  MdFavorite,
  BsFillBookmarkFill,
  FaStar,
} from "react-icons/all";

function MovieView(props) {
  const [state, setState] = useState({});
  const [credits, setCredits] = useState({});
  const { id } = props.match.params;

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${keys.API_KEY}`
    );
    setState(data);
  };

  const fetchCredits = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${keys.API_KEY}`
    );
    setCredits(data);
  };

  useEffect(() => {
    fetchData();
    fetchCredits();
  }, []);

  const hour = Math.floor(state?.runtime / 60);
  const minute = state?.runtime % 60;
  let progressNumber = state?.vote_average?.toString();
  let progressArr = progressNumber?.split(".");
  let progressPercent = progressArr?.join("");

  if (progressPercent?.length == 1) {
    progressPercent = progressPercent + "0";
  }
  return (
    <StyledMovieDetails>
      <div className="container">
        <div className="detail__inner">
          <div className="home">
            <Image
              width={300}
              height={450}
              src={`${keys.IMG_URL + state?.poster_path}`}
            />
            <div className="home__block">
              <h2 className="home__title">
                {state?.original_title}
                <span>
                  (
                  {state?.release_date?.slice(
                    0,
                    state?.release_date?.indexOf("-")
                  )}
                  )
                </span>
              </h2>
              <div>
                <p className="home__text">
                  {moment(state?.release_date).format("L")}
                </p>
                {state?.production_countries?.map((item) => (
                  <p className="home__text" key={item?.iso_3166_1}>
                    ({item?.iso_3166_1})
                  </p>
                ))}
                <div className="home__inner-link">
                  {state?.genres?.map((item, index, arr) => (
                    <Link key={item.id} to={`/${item?.name.toLowerCase()}`}>
                      {item.name}
                      {arr[arr.length - 1] ? ", " : ""}
                    </Link>
                  ))}
                </div>
                <p className="home__text">
                  {hour}h {minute}m
                </p>
              </div>
              <div>
                <Progress
                  type="circle"
                  percent={progressPercent}
                  width={50}
                  trailColor={`${
                    state?.vote_average < 4
                      ? "#4F1533"
                      : state?.vote_average >= 7
                      ? "#1E4228"
                      : state?.vote_average < 7
                      ? "#423D0F"
                      : ""
                  }`}
                  strokeColor={`${
                    state?.vote_average < 4
                      ? "#DB2360"
                      : state?.vote_average >= 7
                      ? "#21D07A"
                      : state?.vote_average < 7
                      ? "#D2D531"
                      : ""
                  }`}
                />
                <span>User Score</span>
                <div className="home__inner-btn">
                  <button>
                    <RiMenuAddLine size={20} />
                  </button>
                  <button>
                    <MdFavorite size={20} />
                  </button>
                  <button>
                    <BsFillBookmarkFill size={20} />
                  </button>
                  <button>
                    <FaStar size={20} />
                  </button>
                </div>
                <i>{state?.tagline}</i>
              </div>
              <div className="home__overview">
                <h3>Overview</h3>
                <p>{state?.overview}</p>
              </div>
              <div className="home__jobs">
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledMovieDetails>
  );
}

export default MovieView;
