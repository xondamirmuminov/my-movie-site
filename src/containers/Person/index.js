import React, { useEffect, useState } from "react";
import axios from "axios";
import { Image } from "antd";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillInstagram,
  BsLink,
} from "react-icons/all";
import keys from "../../configs";
import StyledPerson from "../../styles/pages/person";

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
              src={`${keys.IMG_URL + credit?.profile_path}`}
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
              <h3>Known For</h3>
              <p>{credit?.known_for_department}</p>
              <h3>Known Credits</h3>
              <p>{credits?.cast?.length + credits?.crew?.length}</p>
              <h3>Gender</h3>
              <p>{credits?.cast?.length + credits?.crew?.length}</p>
            </div>
          </div>
        </div>
      </div>
    </StyledPerson>
  );
}

export default Person;
