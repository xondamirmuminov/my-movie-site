import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/all";
import StyledMovies from "../../styles/pages/movies";
import SwitchSelector from "react-switch-selector";
import Urls from "../../utils/urls";
import { sendQuery } from "../../utils/axios";
import Card from "../Card";
import Slider from "react-slick";

function Movies() {
  const [state, setState] = useState({
    theaters: [],
    tv: [],
    day: [],
    week: [],
  });
  const [tabName, setTabName] = useState("ontv");
  const [trend, setTrend] = useState("day");
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
              type="text"
              placeholder="Search for a movie, tv show, person......"
              className="movie__search-inp"
            />
            <button className="movie__search-btn">
              <AiOutlineSearch size={24} /> Search
            </button>
          </div>
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
                ? state.tv.map((item) => (
                    <Card
                      img={item?.poster_path}
                      progress={item?.vote_average}
                      title={item?.name}
                      date={new Date(item?.first_air_date)
                        .toUTCString()
                        .split(" ")
                        .slice(0, 4)
                        .join(" ")}
                      id={item?.id}
                    />
                  ))
                : state.theaters.map((item) => (
                    <Card
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
                ? state.day.map((item) => (
                    <Card
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
                  ))
                : state.week.map((item) => (
                    <Card
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
            </Slider>
          </div>
        </div>
      </div>
    </StyledMovies>
  );
}

export default Movies;
