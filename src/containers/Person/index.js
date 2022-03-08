import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Image } from "antd";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillInstagram,
  BsLink,
} from "react-icons/all";
import keys from "../../configs";
import StyledPerson from "../../styles/pages/person";
import NoneImage from "../../assets/image.svg";

function Person(props) {
  const [credit, setCredit] = useState({});
  const [credits, setCredits] = useState({});
  const [social, setSocial] = useState({});
  const { id } = props.match.params;

  const fetchCredit = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/person/${id}?api_key=${keys.API_KEY}`
    );
    setCredit(data);
  };

  const fetchSocial = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/person/${id}/external_ids?api_key=${keys.API_KEY}`
    );
    setSocial(data);
  };

  const fetchCredits = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${keys.API_KEY}`
    );
    setCredits(data);
  };

  useEffect(() => {
    fetchCredit();
    fetchSocial();
    fetchCredits();
  }, []);

  useEffect(() => {
    fetchCredit();
    fetchSocial();
    fetchCredits();
  }, [id]);

  return (
    <StyledPerson>
      <div className="container">
        <div className="person__inner">
          <div className="person__block--sm">
            <Image
              width={300}
              height={450}
              src={`${
                credit?.profile_path
                  ? keys.IMG_URL + credit?.profile_path
                  : NoneImage
              }`}
            />
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
              {credit?.homepage ? (
                <a href={credit?.homepage} target="_blank">
                  <BsLink color="white" size={35} />
                </a>
              ) : null}
            </div>
            <div className="personal">
              <h1>Personal Info</h1>
              <p>Known For</p>
              <h3>{credit?.known_for_department}</h3>
              <p>Known Credits</p>
              <h3>{credits?.cast?.length + credits?.crew?.length}</h3>
              <p>Gender</p>
              <h3>{credit?.gender == 2 ? "Male" : "Female"}</h3>
              <p>Birthday</p>
              <h3>
                {credit?.deathday
                  ? credit?.birthday
                  : credit?.birthday +
                    " " +
                    `(${
                      new Date().getFullYear() - credit?.birthday?.split("-")[0]
                    } years old)`}
              </h3>
              {credit?.deathday ? (
                <>
                  <p>Day of Death</p>
                  <h3>
                    {credit?.deathday}{" "}
                    {`(${
                      credit?.deathday?.split("-")[0] -
                      credit?.birthday?.split("-")[0]
                    } years old)`}
                  </h3>
                </>
              ) : null}
              <p>Place of Birth</p>
              <h3>{credit?.place_of_birth ?? "-"}</h3>
              <p>Also Known As</p>
              {credit?.also_known_as
                ? credit?.also_known_as?.map((item) => <h3>{item}</h3>)
                : "-"}
            </div>
          </div>
          <div className="person__block--lg">
            <h1>{credit?.name}</h1>
            <h3>Biography</h3>
            <p className="text">{credit?.biography ?? "-"}</p>
            <h2>Known For</h2>
            <div className="card-inner">
              {credits?.cast
                ?.filter(
                  (item) =>
                    item?.vote_average > 7 &&
                    item?.media_type == "movie" &&
                    !item?.character?.includes("voice")
                )
                ?.map((item) => (
                  <div className="card" key={item?.id}>
                    <Link to={`/movie/${item?.id}`}>
                      <img
                        src={
                          item?.poster_path
                            ? keys.IMG_URL + item?.poster_path
                            : NoneImage
                        }
                        alt={item?.title}
                      />
                    </Link>
                    <h3>
                      <Link to={`/movie/${item?.id}`}>{item?.title}</Link>
                    </h3>
                  </div>
                ))}
            </div>
            <h2 className="acting-title">Acting</h2>
            <div className="acting">
              {credits?.cast?.map((item) => (
                <div className="acting-item" key={item?.id}>
                  <Link to={`/movie/${item?.id}`}>
                    <img
                      src={
                        item?.poster_path
                          ? keys.IMG_URL + item?.poster_path
                          : NoneImage
                      }
                      alt={item?.title ?? item?.name}
                    />
                  </Link>
                  <p className="acting__date">
                    {item?.release_date?.split("-")[0]}
                  </p>
                  <h3>
                    <Link to={`/movie/${item?.id}`}>
                      {item?.title ?? item?.name}
                    </Link>
                  </h3>
                  <span className="acting__as">as</span>
                  <h3 className="acting__actor">{item?.character}</h3>
                </div>
              ))}
            </div>
            <h2 className="acting-title">Production</h2>
            <div className="acting">
              {credits?.crew
                ?.filter((item) => item?.department === "Production")
                ?.map((item) => (
                  <div className="acting-item" key={item?.id}>
                    <Link to={`/movie/${item?.id}`}>
                      <img
                        src={
                          item?.poster_path
                            ? keys.IMG_URL + item?.poster_path
                            : NoneImage
                        }
                        alt={item?.title ?? item?.name}
                      />
                    </Link>
                    <p className="acting__date">
                      {item?.release_date?.split("-")[0]}
                    </p>
                    <h3>
                      <Link to={`/movie/${item?.id}`}>
                        {item?.title ?? item?.name}
                      </Link>
                    </h3>
                    <span className="acting__as">as</span>
                    <h3 className="acting__actor">{item?.character}</h3>
                  </div>
                ))}
            </div>
            <h2 className="acting-title">Crew</h2>
            <div className="acting">
              {credits?.crew
                ?.filter((item) => item?.department === "Crew")
                ?.map((item) => (
                  <div className="acting-item" key={item?.id}>
                    <Link to={`/movie/${item?.id}`}>
                      <img
                        src={
                          item?.poster_path
                            ? keys.IMG_URL + item?.poster_path
                            : NoneImage
                        }
                        alt={item?.title ?? item?.name}
                      />
                    </Link>
                    <p className="acting__date">
                      {item?.release_date?.split("-")[0]}
                    </p>
                    <h3>
                      <Link to={`/movie/${item?.id}`}>
                        {item?.title ?? item?.name}
                      </Link>
                    </h3>
                    <span className="acting__as">as</span>
                    <h3 className="acting__actor">{item?.character}</h3>
                  </div>
                ))}
            </div>
            <h2 className="acting-title">Directing</h2>
            <div className="acting">
              {credits?.crew
                ?.filter((item) => item?.department === "Directing")
                ?.map((item) => (
                  <div className="acting-item" key={item?.id}>
                    <Link to={`/movie/${item?.id}`}>
                      <img
                        src={
                          item?.poster_path
                            ? keys.IMG_URL + item?.poster_path
                            : NoneImage
                        }
                        alt={item?.title ?? item?.name}
                      />
                    </Link>
                    <p className="acting__date">
                      {item?.release_date?.split("-")[0]}
                    </p>
                    <h3>
                      <Link to={`/movie/${item?.id}`}>
                        {item?.title ?? item?.name}
                      </Link>
                    </h3>
                    <span className="acting__as">as</span>
                    <h3 className="acting__actor">{item?.character}</h3>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </StyledPerson>
  );
}

export default Person;
