import React, { useState } from "react";
import { Progress } from "antd";
import { Link } from "react-router-dom";
import {
  FiMoreHorizontal,
  RiMenuAddLine,
  MdOutlineFavoriteBorder,
  BsBookmarkPlus,
  AiOutlineStar,
} from "react-icons/all";
import StyledCard from "../styles/card";
import keys from "../configs";

function Card({ img, title, date, progress, id }) {
  const [state, setState] = useState({
    more: false,
  });
  let progressNumber = progress?.toString();
  let progressArr = progressNumber?.split(".");
  let progressPercent = progressArr?.join("");

  return (
    <StyledCard bg={state.more ? "rgba(0,0,0,0.5)" : "none"}>
      <button className="card__more">
        <FiMoreHorizontal size={20} />
      </button>
      <Link to={`/tv/${id}`}>
        <img src={keys.IMG_URL + img} alt={title} className="card__img" />
      </Link>
      <Progress type="circle" percent={progressPercent} />
      <Link to={`/tv/${id}`}>
        <h2 className="card__title">{title}</h2>
      </Link>
      <p className="card__text">{date}</p>
    </StyledCard>
  );
}

export default Card;
