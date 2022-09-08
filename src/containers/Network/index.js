import React from "react";
import { Link } from "react-router-dom";
import { Pagination } from "antd";
import axios from "axios";
import keys from "../../configs";
import StyledNetwork from "../../styles/pages/network";
import { useEffect, useState } from "react";
import {
  FaIdCardAlt,
  MdLocationOn,
  FaGlobeAmericas,
  BsLink,
} from "react-icons/all";
import DefaultImage from "../../assets/image.svg";

function Network(props) {
  const [data, setData] = useState({});
  const [movies, setMovies] = useState({});
  const { id } = props.match.params;

  const fetchData = async () => {
    const { data } = await axios.get(`
    /network/${id}?api_key=${keys.API_KEY}`);
    setData(data);
  };

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `/discover/tv?api_key=${keys.API_KEY}&sort_by=network=${id}`
    );
    setMovies(data);
  };

  const changePagination = async (page) => {
    const { data } = await axios.get(
      `/discover/tv?api_key=${keys.API_KEY}&sort_by=network=${id}&page=${page}`
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
            <img src={keys.IMG_URL + data?.logo_path} alt={data?.name} />
            <h1>{movies?.total_results?.toLocaleString()} shows</h1>
          </div>
          <div className="home__info">
            <h3>
              <FaIdCardAlt size={24} />
              <span>{data?.name}</span>
            </h3>
            <h3>
              <MdLocationOn size={24} />
              <span>{data?.headquarters}</span>
            </h3>
            <h3>
              <FaGlobeAmericas size={24} />
              <span>{data?.origin_country}</span>
            </h3>
            <h3>
              <BsLink size={28} />
              <a target="_blank" href={data?.homepage}>
                Homepage
              </a>
            </h3>
          </div>
        </div>
      </div>
      <div className="network__movies">
        <div className="container">
          <div className="network__movies-inner">
            {movies?.results?.map((item) => (
              <div className="card" key={item?.id}>
                <Link to={`/tv/${item?.id}`}>
                  <img
                    src={
                      item?.poster_path
                        ? keys.IMG_URL + item.poster_path
                        : item?.poster_path
                        ? keys.IMG_URL + item?.backdrop_path
                        : DefaultImage
                    }
                    alt={item?.title ?? item?.name}
                  />
                </Link>
                <div className="card__block">
                  <h2>
                    <Link to={`/tv/${item?.id}`}>
                      {item?.name ?? item?.title}
                    </Link>
                  </h2>
                  <p>
                    {new Date(item?.first_air_date)
                      ?.toUTCString()
                      ?.split(" ")
                      ?.slice(0, 4)
                      ?.join(" ")}
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

export default Network;
