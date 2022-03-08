import React, { useState, useEffect } from "react";
import { Pagination } from "antd";
import { AiOutlineSearch } from "react-icons/all";
import axios from "axios";
import { sendQuery } from "../../utils/axios";
import URLS from "../../utils/urls";
import StyledMovie from "../../styles/pages/moviePage";
import PeopleCard from "./PeopleCard";
import keys from "../../configs";

function People() {
  const [data, setData] = useState({});
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    const data = await sendQuery(URLS.PEOPLE_POPULAR);
    setData(data);
  };

  const changePagination = async (page) => {
    const { data } = await axios.get(
      `${
        search
          ? `https://api.themoviedb.org/3/search/person?api_key=${
              keys.API_KEY
            }&query=${search.toLowerCase()}&page=${page}`
          : `https://api.themoviedb.org/3/person/popular?api_key=${keys.API_KEY}&page=${page}`
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
        `https://api.themoviedb.org/3/search/person?api_key=${
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
          <h1>Popular People</h1>
          <div className="movie__search">
            <input
              onChange={handleSearchInputChange}
              value={search}
              type="text"
              placeholder="Search People    "
            />
            <button onClick={handleSearch}>
              <AiOutlineSearch size={24} />
              Search
            </button>
          </div>
          <div className="card-inner">
            {data?.results?.map((item) => (
              <PeopleCard
                img={item?.profile_path}
                name={item?.name}
                known_for={item?.known_for}
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

export default People;
