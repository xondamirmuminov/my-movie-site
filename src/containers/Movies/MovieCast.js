import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import keys from "../../configs";
import StyledCast from "../../styles/pages/movieCast";
import { BsArrowLeftShort } from "react-icons/all";
import Avatar from "../../assets/avatar-icon-images-4.jpg";

function MovieCast(props) {
  const [state, setState] = useState({
    data: {},
    movie: {},
  });
  const { id } = props.match.params;

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${keys.API_KEY}`
    );
    setState((state) => ({ ...state, data }));
  };

  const fetchMovie = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${keys.API_KEY}`
    );
    setState((state) => ({ ...state, movie: data }));
  };

  useEffect(() => {
    fetchData();
    fetchMovie();
  }, []);

  const { movie, data } = state;
  return (
    <StyledCast>
      <div className="cast__movie">
        <div className="container">
          <div className="movie-inner">
            <Link to={`/movie/${movie?.id}`}>
              <img src={keys.IMG_URL + movie?.poster_path} alt={movie?.title} />
            </Link>
            <div>
              <h2>
                <Link to={`/movie/${movie?.id}`}>{movie?.title}</Link>
                <span>
                  (
                  {movie?.release_date?.slice(
                    0,
                    movie?.release_date?.indexOf("-")
                  )}
                  )
                </span>
              </h2>
              <Link className="movie__link" to={`/movie/${movie?.id}`}>
                <BsArrowLeftShort size={25} />
                Back to Main
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="cast-inner">
        <div className="container">
          <div className="cast__block">
            <h3>
              Cast <span>{data?.cast?.length}</span>
            </h3>
            {data?.cast?.map((item) => (
              <div key={item?.id} className="cast__card">
                <Link to={`/credit/${item.credit_id}`}>
                  <img
                    src={
                      item?.profile_path
                        ? keys.IMG_URL + item?.profile_path
                        : Avatar
                    }
                    alt={item?.name}
                  />
                </Link>
                <div>
                  <h4>
                    <Link to={`/credit/${item.credit_id}`}>{item?.name}</Link>
                  </h4>
                  <p>{item?.character}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="cast__block">
            <h3>
              Crew <span>{data?.crew?.length}</span>
            </h3>
            {data?.crew?.map((item) => (
              <div key={item?.id} className="cast__card">
                <Link to={`/credit/${item.credit_id}`}>
                  <img
                    src={
                      item?.profile_path
                        ? keys.IMG_URL + item?.profile_path
                        : Avatar
                    }
                    alt={item?.name}
                  />
                </Link>
                <div>
                  <h4>
                    <Link to={`/credit/${item.credit_id}`}>{item?.name}</Link>
                  </h4>
                  <p>{item?.character}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </StyledCast>
  );
}

export default MovieCast;
