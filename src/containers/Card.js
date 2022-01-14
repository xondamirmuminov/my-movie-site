import React, { useEffect, useState } from "react";
import { Progress } from "antd";
import { Link } from "react-router-dom";
import {
  FiMoreHorizontal,
  RiMenuAddLine,
  MdFavoriteBorder,
  MdFavorite,
  BsBookmarkPlus,
  AiOutlineStar,
  AiOutlineClose,
} from "react-icons/all";
import StyledCard from "../styles/card";
import axios from "axios";
import keys from "../configs";

function Card({ img, title, date, progress, id, like, mediaType }) {
  const [state, setState] = useState({
    more: false,
  });
  const [favourite, setFavourite] = useState(false);
  let progressNumber = progress?.toString();
  let progressArr = progressNumber?.split(".");
  let progressPercent = progressArr?.join("");

  if (progressPercent?.length == 1) {
    progressPercent = progressPercent + "0";
  }

  const dislike = !like;

  const handleFavourite = async (type, id) => {
    const result = await axios.post(
      `https://api.themoviedb.org/3/account/eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjk4NjU5OTQ3NDczZmFlN2MyZGNmYzkyYzIyOTJhZSIsInN1YiI6IjYxZGJjOTliYmM4NjU3MDA2Yzc4ZTZiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.chskjREVlS7KZrIUcb5IBb7IZyG7s5Iik0TWrBlovrI/favorite?api_key=${keys.API_KEY}&session_id=${keys.SESSION_ID}`,
      {
        media_type: `${mediaType}`,
        media_id: `${id}`,
        favorite: dislike,
      }
    );
    console.log(result);
  };

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
        <div className="card__dropdown-item">
          <RiMenuAddLine size={20} />
          <p>Add to list</p>
        </div>
        <div
          className="card__dropdown-item"
          onClick={() => {
            setFavourite(!favourite);
            handleFavourite("movie", id);
          }}
        >
          {like || favourite ? (
            <MdFavorite size={20} color="var(--red)" />
          ) : (
            <MdFavoriteBorder size={20} />
          )}
          <p>Favourite</p>
        </div>
        <div className="card__dropdown-item">
          <BsBookmarkPlus size={20} />
          <p>Watchlist</p>
        </div>
        <div className="card__dropdown-item">
          <AiOutlineStar size={20} />
          <p>Your rating</p>
        </div>
      </div>
      <Link to={`/tv/${id}`}>
        <img src={keys.IMG_URL + img} alt={title} className="card__img" />
      </Link>
      <Progress
        type="circle"
        percent={progressPercent}
        width={50}
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
        <Link to={`/tv/${id}`}>
          <h2 className="card__title">{title}</h2>
        </Link>
        <p className="card__text">{date}</p>
      </div>
    </StyledCard>
  );
}

export default Card;
