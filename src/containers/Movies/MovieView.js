import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import { Link } from "react-router-dom";
import axios from "axios";
import { Image, Tabs, Rate, Popover } from "antd";
import keys from "../../configs";
import StyledMovieDetails from "../../styles/pages/movieDetails";
import moment from "moment";
import { Progress } from "antd";
import {
  RiMenuAddLine,
  MdFavorite,
  BsFillBookmarkFill,
  FaStar,
  BsArrowRight,
  AiOutlineCalendar,
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillInstagram,
  BsLink,
} from "react-icons/all";
import Avatar from "../../assets/avatar-icon-images-4.jpg";
import DefaultImage from "../../assets/image.svg";
import ModalMovie from "./ModalMovie";
import Slider from "react-slick";

const { TabPane } = Tabs;

function MovieView(props) {
  const [state, setState] = useState({});
  const [credits, setCredits] = useState({});
  const [image, setImage] = useState({});
  const [video, setVideo] = useState({});
  const [collection, setCollection] = useState({});
  const [recommendations, setRecommendations] = useState({});
  const [keywords, setKeywords] = useState({});
  const [social, setSocial] = useState({});
  const [account, setAccount] = useState({});
  const [favorite, setFavorite] = useState();
  const [watchList, setWatchList] = useState();
  const { id } = props.match.params;

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 7000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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

  const fetchImages = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${keys.API_KEY}`
    );
    setImage(data);
  };

  const fetchVideos = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${keys.API_KEY}`
    );
    setVideo(data);
  };

  const fetchCollection = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/collection/${state?.belongs_to_collection?.id}?api_key=${keys.API_KEY}`
    );
    setCollection(data);
  };

  const fetchRecommendations = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${keys.API_KEY}`
    );
    setRecommendations(data);
  };

  const fetchKeywords = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/keywords?api_key=${keys.API_KEY}`
    );
    setKeywords(data);
  };

  const fetchSocial = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/external_ids?api_key=${keys.API_KEY}`
    );
    console.log(data);
    setSocial(data);
  };

  const fetchAccount = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/account_states?api_key=${keys.API_KEY}&session_id=${keys.SESSION_ID}`
    );
    setAccount(data);
    setFavorite(data?.favorite);
    setWatchList(data?.watchlist);
  };

  const handleFavorite = async (favorite) => {
    const { data } = await axios.post(
      `https://api.themoviedb.org/3/account/eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjk4NjU5OTQ3NDczZmFlN2MyZGNmYzkyYzIyOTJhZSIsInN1YiI6IjYxZGJjOTliYmM4NjU3MDA2Yzc4ZTZiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.chskjREVlS7KZrIUcb5IBb7IZyG7s5Iik0TWrBlovrI/favorite?api_key=${keys.API_KEY}&session_id=${keys.SESSION_ID}`,
      {
        media_type: "movie",
        media_id: `${id}`,
        favorite: favorite,
      }
    );
  };

  const handleWatchlist = async (watchlist) => {
    const { data } = await axios.post(
      `
      https://api.themoviedb.org/3/account/eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjk4NjU5OTQ3NDczZmFlN2MyZGNmYzkyYzIyOTJhZSIsInN1YiI6IjYxZGJjOTliYmM4NjU3MDA2Yzc4ZTZiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.chskjREVlS7KZrIUcb5IBb7IZyG7s5Iik0TWrBlovrI/watchlist?api_key=${keys.API_KEY}&session_id=${keys.SESSION_ID}`,
      {
        media_type: "movie",
        media_id: `${id}`,
        watchlist,
      }
    );
  };

  const handleRate = async (value) => {
    const { data } = await axios.post(
      `https://api.themoviedb.org/3/movie/${id}/rating?api_key=${keys.API_KEY}&session_id=${keys.SESSION_ID}`,
      {
        value: `${value * 2}`,
      }
    );
  };

  useEffect(() => {
    fetchData();
    fetchCredits();
    fetchImages();
    fetchVideos();
    fetchRecommendations();
    fetchKeywords();
    fetchSocial();
    fetchAccount();
  }, []);

  useEffect(() => {
    fetchData();
    fetchCredits();
    fetchImages();
    fetchVideos();
    fetchRecommendations();
    fetchKeywords();
    fetchSocial();
    fetchAccount();
  }, [id]);

  useEffect(() => {
    if (state?.belongs_to_collection) {
      fetchCollection();
    }
  }, [state]);

  const popularCredit = [
    { ...(credits?.cast ? credits?.cast[0] : null) },
    { ...(credits?.cast ? credits?.cast[1] : null) },
    { ...(credits?.cast ? credits?.cast[2] : null) },
    { ...(credits?.cast ? credits?.cast[3] : null) },
    { ...(credits?.cast ? credits?.cast[4] : null) },
    { ...(credits?.cast ? credits?.cast[5] : null) },
    { ...(credits?.cast ? credits?.cast[6] : null) },
    { ...(credits?.cast ? credits?.cast[7] : null) },
    { ...(credits?.cast ? credits?.cast[8] : null) },
  ];
  const hour = Math.floor(state?.runtime / 60);
  const minute = state?.runtime % 60;
  let progressNumber = state?.vote_average?.toString();
  let progressArr = progressNumber?.split(".");
  let progressPercent = progressArr?.join("");

  if (progressPercent?.length == 1) {
    progressPercent = progressPercent + "0";
  }

  return (
    <StyledMovieDetails
      bg={keys.IMG_URL + state?.backdrop_path || state?.poster_path}
      collectionBg={
        collection.parts
          ? keys.IMG_URL + state?.belongs_to_collection?.poster_path
          : null
      }
    >
      <div className="detail__inner">
        <div className="home">
          <div className="container">
            <Image
              width={300}
              height={450}
              src={
                state?.poster_path
                  ? keys.IMG_URL + state?.poster_path
                  : state?.backdrop_path
                  ? keys.IMG_URL + state?.backdrop_path
                  : DefaultImage
              }
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
              <div className="home__inner-date">
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
              <div className="home__inner-score">
                <Progress
                  type="circle"
                  percent={progressPercent}
                  width={68}
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
                    <RiMenuAddLine size={20} color="white" />
                  </button>
                  <button
                    onClick={() => {
                      setFavorite(!favorite);
                      handleFavorite(!favorite);
                    }}
                  >
                    <MdFavorite size={19} color={favorite ? "red" : "white"} />
                  </button>
                  <button
                    onClick={() => {
                      setWatchList(!watchList);
                      handleWatchlist(!watchList);
                    }}
                  >
                    <BsFillBookmarkFill
                      size={19}
                      color={watchList ? "#21D07A" : "white"}
                    />
                  </button>
                  <Popover
                    placement="bottom"
                    content={
                      <Rate
                        allowHalf
                        defaultValue={account?.rated?.value / 2}
                        onChange={handleRate}
                      />
                    }
                    trigger="click"
                    style={{ backgroundColor: "#001529" }}
                    style={{ backgroundColor: "var(--bg-detail)" }}
                  >
                    <button>
                      <FaStar
                        size={19}
                        color={account?.rated?.value ? "#FADB14" : "white"}
                      />
                    </button>
                  </Popover>
                </div>
              </div>
              <i>{state?.tagline}</i>
              <div className="home__overview">
                <h3>Overview</h3>
                <p>{state?.overview}</p>
              </div>
              <div className="home__jobs">
                {credits?.crew
                  ?.filter((item) => item.job == "Director")
                  .map((item) => (
                    <div key={item?.id}>
                      <h3>
                        <Link
                          style={{ color: "white" }}
                          to={`/person/${item?.id}`}
                        >
                          {item?.name}
                        </Link>
                      </h3>
                      <p>{item?.job}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <main className="body">
          <div className="container">
            <section className="body__block--large">
              <h2 className="block__title">Top Billed Cast</h2>
              <div className="card-inner">
                {popularCredit?.map((item) => (
                  <div key={item?.id} className="card">
                    <Link to={`/person/${item.id}`}>
                      <img
                        src={
                          item?.profile_path
                            ? keys.IMG_URL + item?.profile_path
                            : Avatar
                        }
                        alt={item?.name}
                        className="card__img"
                      />
                    </Link>
                    <div className="card__body">
                      <h3 className="card__title">
                        <Link to={`/peson/${item.id}`}>{item?.name}</Link>
                      </h3>
                      <p className="card__text">{item?.character}</p>
                    </div>
                  </div>
                ))}
                <Link to={`/movie/${id}/cast`} className="card__view">
                  View More <BsArrowRight size={25} />
                </Link>
              </div>
              <Link className="cast" to={`/movie/${state?.id}/cast`}>
                Full Cast & Crew
              </Link>
              <div className="media">
                <h2>Media</h2>
                <Tabs defaultActiveKey="1">
                  <TabPane tab="Most Popular" key="1">
                    <img
                      src={keys.IMG_URL + state?.backdrop_path}
                      alt={state?.title}
                    />
                    <img
                      src={keys.IMG_URL + state?.poster_path}
                      alt={state?.title}
                    />
                  </TabPane>
                  <TabPane tab={`Videos ${video?.results?.length}`} key="2">
                    {video?.results?.map((item) => {
                      return (
                        <>
                          <ModalMovie
                            videoId={item?.key}
                            channel={item?.site?.toLowerCase()}
                            id={item?.id}
                            image={keys.IMG_URL + state?.backdrop_path}
                          />
                        </>
                      );
                    })}
                  </TabPane>
                  <TabPane
                    tab={`Backdrops ${image?.backdrops?.length}`}
                    key="3"
                  >
                    {image?.backdrops?.map((item) => (
                      <img
                        key={item?.file_path}
                        src={keys.IMG_URL + item?.file_path}
                        alt={state?.title}
                      />
                    ))}
                  </TabPane>
                  <TabPane tab={`Posters ${image?.posters?.length}`} key="4">
                    {image?.posters?.map((item) => (
                      <img
                        key={item?.file_path}
                        src={keys.IMG_URL + item?.file_path}
                        alt={state?.title}
                      />
                    ))}
                  </TabPane>
                </Tabs>
              </div>
              {state?.belongs_to_collection ? (
                <div className="collection">
                  <h1>Part of the {state?.belongs_to_collection?.name}</h1>
                  <p>
                    Includes{" "}
                    {collection?.parts?.map((item) => (
                      <span>{item?.title}, </span>
                    ))}
                  </p>
                  <Link to={`/collection/${state?.belongs_to_collection?.id}`}>
                    View Collection
                  </Link>
                </div>
              ) : null}
              {recommendations?.results ? (
                <div className="recommendations">
                  <h1>Recommendations</h1>
                  <Slider style={{ marginTop: "20px" }} {...settings}>
                    {recommendations?.results?.map((item) => {
                      let progressItemNumber = item?.vote_average?.toString();
                      let progressItemArr = progressItemNumber?.split(".");
                      progressItemArr[1] = progressItemArr[1]?.slice(0, 1);
                      let progressItemPercent = progressItemArr?.join("");

                      if (progressItemPercent?.length == 1) {
                        progressItemPercent = progressItemPercent + "0";
                      }
                      return (
                        <div key={item?.id} className="recommendations__card">
                          <Link className="img-inner" to={`/movie/${item?.id}`}>
                            <img
                              src={keys.IMG_URL + item?.backdrop_path}
                              alt={item?.title}
                            />
                          </Link>
                          <h3 className="recommendations__card-hidden">
                            <AiOutlineCalendar size={20} />
                            <span>{item?.release_date}</span>
                          </h3>
                          <div className="recommendations__card-body">
                            <h2>
                              <Link to={`/movie/${item?.id}`}>
                                {item?.title}
                              </Link>
                            </h2>
                            <Progress
                              type="circle"
                              percent={progressItemPercent}
                              width={40}
                              trailColor={`${
                                item?.vote_average < 4
                                  ? "#4F1533"
                                  : item?.vote_average >= 7
                                  ? "#1E4228"
                                  : item?.vote_average < 7
                                  ? "#423D0F"
                                  : ""
                              }`}
                              strokeColor={`${
                                item?.vote_average < 4
                                  ? "#DB2360"
                                  : item?.vote_average >= 7
                                  ? "#21D07A"
                                  : item?.vote_average < 7
                                  ? "#D2D531"
                                  : ""
                              }`}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </Slider>
                </div>
              ) : null}
            </section>
            <section className="body__block--sm">
              <div className="social">
                {social?.facebook_id ? (
                  <a
                    href={`https://www.facebook.com/${social?.facebook_id}`}
                    target="_blank"
                  >
                    <AiFillFacebook color="white" size={35} />
                  </a>
                ) : null}
                {social?.instagram_id ? (
                  <a
                    href={`https://www.instagram.com/${social?.instagram_id}`}
                    target="_blank"
                  >
                    <AiFillInstagram color="white" size={35} />
                  </a>
                ) : null}
                {social?.twitter_id ? (
                  <a
                    href={`https://www.twitter.com/${social?.twitter_id}`}
                    target="_blank"
                    className="border"
                  >
                    <AiOutlineTwitter color="white" size={35} />
                  </a>
                ) : null}
                {state?.homepage ? (
                  <a href={state?.homepage} target="_blank">
                    <BsLink color="white" size={35} />
                  </a>
                ) : null}
              </div>
              <div className="about">
                <h3>Status</h3>
                <p>{state?.status}</p>
                <h3>Original Language</h3>
                <p>{state?.original_language?.toUpperCase()}</p>
                <h3>Budget</h3>
                <p>$ {state?.budget?.toLocaleString("en")}</p>
                <h3>Revenue</h3>
                <p>$ {state?.revenue?.toLocaleString("en")}</p>
                <h3>Keywords</h3>
                <div>
                  {keywords?.keywords?.map((item) => (
                    <Link to={`/keywords/${item?.id}`} key={item?.id}>
                      <button style={{ color: "white", cursor: "pointer" }}>
                        {item?.name}
                      </button>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </StyledMovieDetails>
  );
}

export default MovieView;
