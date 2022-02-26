import React, { useState, useEffect } from "react";
import { Pagination } from "antd";
import { AiOutlineSearch } from "react-icons/all";
import axios from "axios";
import { sendQuery } from "../../utils/axios";
import URLS from "../../utils/urls";
import StyledMovie from "../../styles/pages/moviePage";
import Card from "../Card";
import keys from "../../configs";

function Movie() {
  const [data, setData] = useState({});
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    const data = await sendQuery(URLS.POPULAR_MOVIES);
    setData(data);
  };

  const changePagination = async (page) => {
    const { data } = await axios.get(
      `${
        search
          ? `https://api.themoviedb.org/3/search/movie?api_key=${
              keys.API_KEY
            }&query=${search.toLowerCase()}&page=${page}`
          : `https://api.themoviedb.org/3/movie/popular?api_key=${keys.API_KEY}&page=${page}`
      }`
    );
    setData(data);
  };

  const handleSearchInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = async () => {
    if (!search) {
      fetchData();
    } else {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${
          keys.API_KEY
        }&query=${search.toLowerCase()}`
      );
      setData(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StyledMovie>
      <div className="container">
        <div className="movie__inner">
          <h1>Movies</h1>
          <div className="movie__search">
            <input
              onChange={handleSearchInputChange}
              value={search}
              type="text"
              placeholder="Search movie"
            />
            <button onClick={handleSearch}>
              <AiOutlineSearch size={24} />
              Search
            </button>
          </div>
          <div className="card-inner">
            {data?.results?.map((item) => (
              <Card
                mediaType={"movie"}
                key={item?.id}
                img={item?.poster_path}
                progress={item?.vote_average}
                title={item?.title}
                date={new Date(item?.release_date)
                  .toUTCString()
                  .split(" ")
                  .slice(0, 4)
                  .join(" ")}
                id={item?.id}
              />
            ))}
          </div>
          <Pagination
            current={data?.page}
            onChange={changePagination}
            total={data?.total_pages}
          />
        </div>
      </div>
    </StyledMovie>
  );
}

export default Movie;
