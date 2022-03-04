import React, { useEffect, useState } from "react";
import { Progress, Popover, Rate } from "antd";
import { Link } from "react-router-dom";
import {
  FiMoreHorizontal,
  RiMenuAddLine,
  MdFavoriteBorder,
  MdFavorite,
  BsBookmarkPlus,
  BsFillBookmarkFill,
  AiOutlineStar,
  AiFillStar,
  AiOutlineClose,
} from "react-icons/all";
import StyledCard from "../styles/card";
import axios from "axios";
import keys from "../configs";
import DefaultImage from "../assets/image.svg";

function Card({ img, title, date, progress, id, mediaType }) {
  const [state, setState] = useState({
    more: false,
  });
  const [account, setAccount] = useState({});
  const [favorite, setFavorite] = useState();
  const [watchList, setWatchList] = useState();
  let progressNumber = progress?.toString();
  let progressArr = progressNumber?.split(".");
  let progressPercent = progressArr?.join("");

  if (progressPercent?.length == 1) {
    progressPercent = progressPercent + "0";
  }

  if (progressPercent == "10") {
    progressPercent = progressPercent + "0";
  }

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
        media_type: mediaType,
        media_id: `${id}`,
        favorite: favorite,
      }
    );
    setState({ more: false });
  };

  const handleWatchlist = async (watchlist) => {
    const { data } = await axios.post(
      `
      https://api.themoviedb.org/3/account/eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjk4NjU5OTQ3NDczZmFlN2MyZGNmYzkyYzIyOTJhZSIsInN1YiI6IjYxZGJjOTliYmM4NjU3MDA2Yzc4ZTZiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.chskjREVlS7KZrIUcb5IBb7IZyG7s5Iik0TWrBlovrI/watchlist?api_key=${keys.API_KEY}&session_id=${keys.SESSION_ID}`,
      {
        media_type: mediaType,
        media_id: `${id}`,
        watchlist,
      }
    );
    setState({ more: false });
  };

  const handleRate = async (value) => {
    const { data } = await axios.post(
      `https://api.themoviedb.org/3/movie/${id}/rating?api_key=${keys.API_KEY}&session_id=${keys.SESSION_ID}`,
      {
        value: `${value * 2}`,
      }
    );
    setState({ more: false });
  };

  useEffect(() => {
    fetchAccount();
    setState({ more: false });
  }, []);

  return (
    <StyledCard bg={state.more ? "#000000f2" : "none"}>
      <button
        onClick={() => setState((state) => ({ ...state, more: !state.more }))}
        className="card__more"
      >
        {state.more ? (
          <AiOutlineClose size={20} />
        ) : (
          <FiMoreHorizontal size={20} />
        )}
      </button>
      <div className={`${state.more ? "card__dropdown" : "none"}`}>
        <div
          className="card__dropdown-item"
          onClick={() => {
            setFavorite(!favorite);
            handleFavorite(!favorite);
          }}
        >
          {favorite ? (
            <MdFavorite size={20} color="var(--red)" />
          ) : (
            <MdFavoriteBorder size={20} />
          )}
          <p>Favourite</p>
        </div>
        <div
          className="card__dropdown-item"
          onClick={() => {
            setWatchList(!watchList);
            handleWatchlist(!watchList);
          }}
        >
          {watchList ? (
            <BsFillBookmarkFill size={20} color={"#21D07A"} />
          ) : (
            <BsBookmarkPlus size={20} />
          )}
          <p>Watchlist</p>
        </div>
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
          <div className="card__dropdown-item">
            {account?.rated?.value ? (
              <AiFillStar size={20} color={"#FADB14"} />
            ) : (
              <AiOutlineStar size={20} />
            )}
            <p>Your rating</p>
          </div>
        </Popover>
      </div>
      <Link to={`/${mediaType || "tv"}/${id}`}>
        <img
          src={img ? keys.IMG_URL + img : DefaultImage}
          alt={title}
          className="card__img"
        />
      </Link>
      <Progress
        type="circle"
        percent={progressPercent}
        width={50}
        status="active"
        trailColor={`${
          progress < 4
            ? "#4F1533"
            : progress >= 7
            ? "#1E4228"
            : progress < 7
            ? "#423D0F"
            : ""
        }`}
        strokeColor={`${
          progress < 4
            ? "#DB2360"
            : progress >= 7
            ? "#21D07A"
            : progress < 7
            ? "#D2D531"
            : ""
        }`}
      />
      <div className="content">
        <Link to={`/${mediaType || "tv"}/${id}`}>
          <h2 className="card__title">{title}</h2>
        </Link>
        <p className="card__text">{date}</p>
      </div>
    </StyledCard>
  );
}

export default Card;
