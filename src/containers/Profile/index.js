import React, { useState, useEffect } from "react";
import { Image, Avatar } from "antd";
import axios from "axios";
import keys from "../../configs";
import StyledProfile from "../../styles/pages/profile";

function Profile() {
  const [data, setData] = useState({});
  const [favorites, setFavorites] = useState({});
  const color = "#D40242";

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/account?api_key=${keys?.API_KEY}&session_id=${keys.SESSION_ID}`
    );
    setData(data);
  };

  const fetchFavoriteMovies = async () => {
    const { data } = await axios.get(`
    https://api.themoviedb.org/3/account/${keys.SESSION_ID}/favorite/movies?api_key=${keys.API_KEY}&sort_by=created_at.asc`);
    setFavorites(data);
  };

  useEffect(() => {
    fetchData();
    fetchFavoriteMovies();
  }, []);

  return (
    <StyledProfile>
      <div className="profile__home">
        <div className="container">
          {data?.avatar?.tmdb?.avatar_path ? (
            <Image
              width={150}
              style={{ borderRadius: "50%", objectFit: "cover" }}
              src={keys.IMG_URL + data?.avatar?.tmdb?.avatar_path}
              alt={data?.username}
            />
          ) : (
            <Avatar
              style={{
                backgroundColor: color,
                verticalAlign: "middle",
              }}
              size="large"
              gap={4}
            >
              {data?.name
                ? data?.name[0]?.toUpperCase() || data?.username
                  ? data?.username[0]?.toUpperCase()
                  : null
                : null}
            </Avatar>
          )}
          <div className="profile__home-block">
            <h1>{data?.name || data?.username}</h1>
          </div>
        </div>
      </div>
      <div className="profile__stats">
        <div className="container">
          <h2>Stats</h2>
        </div>
      </div>
    </StyledProfile>
  );
}

export default Profile;
