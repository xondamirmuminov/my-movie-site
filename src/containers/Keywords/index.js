import React from "react";
import axios from "axios";
import keys from "../../configs";
import { Link } from "react-router-dom";
import { Pagination } from "antd";
import StyledNetwork from "../../styles/pages/network";
import { useState } from "react";
import { useEffect } from "react";
import DefaultImage from "../../assets/image.svg";

function Keywords(props) {
  const [data, setData] = useState({});
  const [movies, setMovies] = useState({});
  const { id } = props.match.params;

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/keyword/${id}?api_key=${keys.API_KEY}`
    );
    setData(data);
  };

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/keyword/${id}/movies?api_key=${keys.API_KEY}`
    );
    setMovies(data);
  };

  const changePagination = async (page) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/keyword/${id}/movies?api_key=${keys.API_KEY}&page=${page}`
    );
    setMovies(data);
  };

  useEffect(() => {
    fetchData();
    fetchMovies();
  }, []);

  return (
    <StyledNetwork>
      <div className="network__home">
        <div className="container">
          <div className="home__image">
            <h1>{data?.name}</h1>
            <h2>{movies?.total_results?.toLocaleString()} movies and shows</h2>
          </div>
        </div>
      </div>
      <div className="network__movies">
        <div className="container">
          <div className="network__movies-inner">
            {movies?.results?.map((item) => (
              <div className="card" key={item?.id}>
                <Link to={`/movie/${item?.id}`}>
                  <img
                    src={
                      item?.poster_path
                        ? keys.IMG_URL + item?.poster_path
                        : item?.poster_path
                        ? keys.IMG_URL + item?.backdrop_path
                        : DefaultImage
                    }
                    alt={item?.title ?? item?.name}
                  />
                </Link>
                <div className="card__block">
                  <h2>
                    <Link to={`/movie/${item?.id}`}>
                      {item?.name ?? item?.title}
                    </Link>
                  </h2>
                  <p>
                    {new Date(item?.release_date)
                      .toUTCString()
                      .split(" ")
                      .slice(0, 4)
                      .join(" ")}
                  </p>
                  <p className="card__text">{item?.overview}</p>
                </div>
              </div>
            ))}
          </div>
          <Pagination
            current={movies?.page}
            onChange={changePagination}
            total={movies?.total_pages}
          />
        </div>
      </div>
    </StyledNetwork>
  );
}

export default Keywords;
