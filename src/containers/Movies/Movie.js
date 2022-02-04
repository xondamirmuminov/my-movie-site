import React, { useState, useEffect } from "react";
import { sendQuery } from "../../utils/axios";
import URLS from "../../utils/urls";
import StyledMovie from "../../styles/pages/moviePage";
import Card from "../Card";

function Movie() {
  const [data, setData] = useState({});

  const fetchData = async () => {
    const data = await sendQuery(URLS.POPULAR_MOVIES);
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StyledMovie>
      <div className="container">
        <div className="movie__inner">
          <div className="card-inner">
            {data?.results?.map((item) => (
              <Card
                mediaType={"movie"}
                // like={
                //   state.favourite.find((i) => i?.id == item?.id) ||
                //   state.favouriteMovie.find((i) => i?.id == item?.id)
                //     ? true
                //     : false
                // }
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
        </div>
      </div>
    </StyledMovie>
  );
}

export default Movie;
