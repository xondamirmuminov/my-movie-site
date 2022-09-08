import React, { useState, useEffect } from "react";
import { Image } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import keys from "../../configs";
import StyledCollection from "../../styles/pages/collection";
import DefaultImage from "../../assets/image.svg";

function Collection(props) {
  const [data, setData] = useState({});
  const { id } = props.match.params;

  const fetchData = async () => {
    const { data } = await axios.get(`
    /collection/${id}?api_key=${keys.API_KEY}`);
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StyledCollection
      bg={keys.IMG_URL + data?.backdrop_path || data?.poster_path}
    >
      <div className="collection__inner">
        <div className="collection__home">
          <div className="container">
            <Image
              width={300}
              height={450}
              src={keys.IMG_URL + data?.poster_path}
            />
            <div className="collection__home-block">
              <h1>{data?.name ?? data?.title}</h1>
              <h3>Overview</h3>
              <p>{data?.overview}</p>
              <h3>Number of Movies: {data?.parts?.length}</h3>
            </div>
          </div>
        </div>
        <div className="collection__movies">
          <div className="container">
            <h2>{data?.parts?.length} movies</h2>
            <div className="card-inner">
              {data?.parts?.map((item) => (
                <div className="card" key={item?.id}>
                  <Link to={`/movie/${item?.id}`}>
                    <img
                      src={
                        item?.poster_path
                          ? keys.IMG_URL + item?.poster_path
                          : item?.poster_path
                          ? keys.IMG_URL + item?.backdrop_path
                          : DefaultImage
                      }
                      alt={item?.title ?? item?.name}
                    />
                  </Link>
                  <div className="card__block">
                    <h2>
                      <Link to={`/movie/${item?.id}`}>
                        {item?.name ?? item?.title}
                      </Link>
                    </h2>
                    <p>
                      {new Date(item?.release_date)
                        ?.toUTCString()
                        ?.split(" ")
                        ?.slice(0, 4)
                        ?.join(" ")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </StyledCollection>
  );
}

export default Collection;
