import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import { Link } from "react-router-dom";
import axios from "axios";
import { Image, Tabs } from "antd";
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
} from "react-icons/all";
import Avatar from "../../assets/avatar-icon-images-4.jpg";
import ModalMovie from "./ModalMovie";

const { TabPane } = Tabs;

function MovieView(props) {
  const [state, setState] = useState({});
  const [credits, setCredits] = useState({});
  const [image, setImage] = useState({});
  const [video, setVideo] = useState({});
  const [collection, setCollection] = useState({});
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

  useEffect(() => {
    fetchData();
    fetchCredits();
    fetchImages();
    fetchVideos();
  }, []);

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
                  <button>
                    <MdFavorite size={19} color="white" />
                  </button>
                  <button>
                    <BsFillBookmarkFill size={19} color="white" />
                  </button>
                  <button>
                    <FaStar size={19} color="white" />
                  </button>
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
                      <h3>{item?.name}</h3>
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
                    <Link to={`/credit/${item.credit_id}`}>
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
                        <Link to={`/credit/${item.credit_id}`}>
                          {item?.name}
                        </Link>
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
            </section>
            <section className="body__block--sm"></section>
          </div>
        </main>
      </div>
    </StyledMovieDetails>
  );
}

export default MovieView;
