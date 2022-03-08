import React from "react";
import { Link } from "react-router-dom";
import StyledCard from "../../styles/card";
import keys from "../../configs";

function PeopleCard({ img, name, known_for, id }) {
  return (
    <StyledCard bg="none">
      <Link to={`/person/${id}`}>
        <img src={keys.IMG_URL + img} alt={name} className="card__img" />
      </Link>
      <div className="content">
        <Link to={`/person/${id}`}>
          <h2 className="card__title">{name}</h2>
        </Link>
        <p className="card__genre">
          {known_for?.map((item) => item?.title ?? item?.name + ", ")}
        </p>
      </div>
    </StyledCard>
  );
}

export default PeopleCard;
