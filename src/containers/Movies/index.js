import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/all";
import StyledMovies from "../../styles/pages/movies";
import SwitchSelector from "react-switch-selector";
import Urls from "../../utils/urls";
import { sendQuery } from "../../utils/axios";
import Card from "../Card";
import PeopleCard from "../People/PeopleCard";
import Slider from "react-slick";
import axios from "axios";
import keys from "../../configs";

function Movies() {
  const [state, setState] = useState({
    theaters: [],
    tv: [],
    day: [],
    week: [],
    favourite: [],
    favouriteMovie: [],
  });
  const [tabName, setTabName] = useState("ontv");
  const [trend, setTrend] = useState("day");
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 8000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleTab = (type) => {
    setTabName(type);
  };

  const handleTrend = (type) => {
    setTrend(type);
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

  const fetchTrendingDay = async () => {
    const result = await sendQuery(Urls.TRENDING);
    console.log(result);
    setState((state) => ({ ...state, day: result?.results }));
  };

  const fetchTrendingWeek = async () => {
    const result = await sendQuery(Urls.TRENDING_WEEK);
    console.log(result);
    setState((state) => ({ ...state, week: result?.results }));
  };

  const fetchFavourites = async () => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/account/eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjk4NjU5OTQ3NDczZmFlN2MyZGNmYzkyYzIyOTJhZSIsInN1YiI6IjYxZGJjOTliYmM4NjU3MDA2Yzc4ZTZiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.chskjREVlS7KZrIUcb5IBb7IZyG7s5Iik0TWrBlovrI/favorite/tv?api_key=3b98659947473fae7c2dcfc92c2292ae&session_id=83003c7d76d85eaa3361f7317bfcf79a0f657dd3&language=en-US&&sort_by=created_at.asc&page=1"
    );
    setState((state) => ({ ...state, favourite: data.results }));
  };

  const fetchFavouriteMovies = async () => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/account/eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjk4NjU5OTQ3NDczZmFlN2MyZGNmYzkyYzIyOTJhZSIsInN1YiI6IjYxZGJjOTliYmM4NjU3MDA2Yzc4ZTZiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.chskjREVlS7KZrIUcb5IBb7IZyG7s5Iik0TWrBlovrI/favorite/movies?api_key=3b98659947473fae7c2dcfc92c2292ae&session_id=83003c7d76d85eaa3361f7317bfcf79a0f657dd3&language=en-US&&sort_by=created_at.asc&page=1"
    );
    setState((state) => ({ ...state, favouriteMovie: data.results }));
  };

  const handleSearchInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = async () => {
    if (!search) {
      fetchTheaters();
      fetchTV();
      fetchTrendingDay();
      fetchTrendingWeek();
      fetchFavourites();
      fetchFavouriteMovies();
      setData([]);
    } else {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/multi?api_key=${
          keys.API_KEY
        }&query=${search.toLowerCase()}`
      );
      setData(data);
    }
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

  const trendOptions = [
    {
      label: "Today",
      value: "day",
      selectedBackgroundColor: "var(--red)",
    },
    {
      label: "This Week",
      value: "week",
      selectedBackgroundColor: "var(--red)",
    },
  ];

  useEffect(() => {
    fetchTheaters();
    fetchTV();
    fetchTrendingDay();
    fetchTrendingWeek();
    fetchFavourites();
    fetchFavouriteMovies();
  }, []);

  const initialSelectedIndex = options.findIndex(({ value }) => value === "");
  const initialSelectedTrendIndex = trendOptions.findIndex(
    ({ value }) => value === ""
  );
  return (
    <StyledMovies>
      <div className="container">
        <div className="movie__inner">
          <div className="movie__search">
            <input
              onChange={handleSearchInputChange}
              value={search}
              type="text"
              placeholder="Search for a movie, tv show......"
              className="movie__search-inp"
            />
            <button onClick={handleSearch}>
              <AiOutlineSearch size={24} />
              Search
            </button>
          </div>
          {data?.results ? (
            <div className="card-inner">
              {data?.results?.map((item) => {
                if (item?.known_for_department) {
                  <PeopleCard
                    img={item?.profile_path}
                    title={item?.name}
                    id={item?.id}
                    known_for={item?.known_for}
                  />;
                } else {
                  return (
                    <Card
                      mediaType={item?.media_type}
                      like={
                        state?.favourite?.find((i) => i?.id == item?.id) ||
                        state?.favouriteMovie?.find((i) => i?.id == item?.id)
                          ? true
                          : false
                      }
                      key={item?.id}
                      img={
                        item?.poster_path ??
                        item?.backdrop_path ??
                        item?.profile_path
                      }
                      progress={item?.vote_average}
                      title={item?.title}
                      date={new Date(item?.release_date)
                        .toUTCString()
                        .split(" ")
                        .slice(0, 4)
                        .join(" ")}
                      id={item?.id}
                    />
                  );
                }
              })}
            </div>
          ) : (
            <div className="movie__inner">
              <div className="movie__switch">
                <h2 className="movie__title">What's Popular</h2>
                <SwitchSelector
                  onChange={handleTab}
                  options={options}
                  initialSelectedIndex={initialSelectedIndex}
                  backgroundColor={"white"}
                  fontColor={"black"}
                  fontSize={"20px"}
                />
              </div>
              <Slider {...settings}>
                {tabName == "ontv"
                  ? state?.tv?.map((item) => (
                      <Card
                        mediaType={"tv"}
                        like={
                          state?.favourite?.find((i) => i?.id == item?.id) ||
                          state?.favouriteMovie?.find((i) => i?.id == item?.id)
                            ? true
                            : false
                        }
                        key={item?.id}
                        img={item?.poster_path}
                        progress={item?.vote_average}
                        title={item?.name}
                        date={new Date(item?.first_air_date)
                          ?.toUTCString()
                          ?.split(" ")
                          ?.slice(0, 4)
                          ?.join(" ")}
                        id={item?.id}
                      />
                    ))
                  : state?.theaters?.map((item) => (
                      <Card
                        mediaType={"movie"}
                        like={
                          state?.favourite?.find((i) => i?.id == item?.id) ||
                          state?.favouriteMovie?.find((i) => i?.id == item?.id)
                            ? true
                            : false
                        }
                        key={item?.id}
                        img={item?.poster_path}
                        progress={item?.vote_average}
                        title={item?.title}
                        date={new Date(item?.release_date)
                          ?.toUTCString()
                          ?.split(" ")
                          ?.slice(0, 4)
                          ?.join(" ")}
                        id={item?.id}
                      />
                    ))}
              </Slider>
              <div className="movie__switch" style={{ marginTop: "100px" }}>
                <h2 className="movie__title">What's Popular</h2>
                <SwitchSelector
                  onChange={handleTrend}
                  options={trendOptions}
                  initialSelectedIndex={initialSelectedTrendIndex}
                  backgroundColor={"white"}
                  fontColor={"black"}
                  fontSize={"20px"}
                />
              </div>
              <Slider style={{ marginTop: "20px" }} {...settings}>
                {trend == "day"
                  ? state?.day?.map((item) => (
                      <Card
                        mediaType={item?.media_type}
                        like={
                          state?.favourite?.find((i) => i?.id == item?.id) ||
                          state?.favouriteMovie?.find((i) => i?.id == item?.id)
                            ? true
                            : false
                        }
                        key={item?.id}
                        img={item?.poster_path}
                        progress={item?.vote_average}
                        title={item?.title}
                        date={new Date(item?.release_date)
                          ?.toUTCString()
                          ?.split(" ")
                          ?.slice(0, 4)
                          ?.join(" ")}
                        id={item?.id}
                      />
                    ))
                  : state?.week?.map((item) => (
                      <Card
                        mediaType={item?.media_type}
                        like={
                          state?.favourite?.find((i) => i?.id == item?.id) ||
                          state?.favouriteMovie?.find((i) => i?.id == item?.id)
                            ? true
                            : false
                        }
                        key={item?.id}
                        img={item?.poster_path}
                        progress={item?.vote_average}
                        title={item?.title}
                        date={new Date(item?.release_date)
                          ?.toUTCString()
                          ?.split(" ")
                          ?.slice(0, 4)
                          ?.join(" ")}
                        id={item?.id}
                      />
                    ))}
              </Slider>
            </div>
          )}
        </div>
      </div>
    </StyledMovies>
  );
}

export default Movies;
