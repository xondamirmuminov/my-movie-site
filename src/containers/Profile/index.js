import React, { useState, useEffect } from "react";
import { Image, Avatar } from "antd";
import axios from "axios";
import keys from "../../configs";
import StyledProfile from "../../styles/pages/profile";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function Profile() {
  const [data, setData] = useState({});
  const [favorites, setFavorites] = useState({});
  const [favoriteTv, setFavoriteTv] = useState({});
  const [ratedMovies, setRatedMovies] = useState({});
  const [ratedTv, setRatedTv] = useState({});
  const [watchlistMovies, setWatchlistMovies] = useState({});
  const [watchlistTv, setWatchlistTv] = useState({});
  const color = "#D40242";

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/account?api_key=${keys?.API_KEY}&session_id=${keys.SESSION_ID}`
    );
    setData(data);
  };

  const fetchFavorites = async () => {
    const { data } = await axios.get(`
    https://api.themoviedb.org/3/account/${keys.ACCOUNT_ID}/favorite/movies?api_key=${keys.API_KEY}&session_id=${keys.SESSION_ID}&sort_by=created_at.asc`);
    setFavorites(data);
    const { data: tv } = await axios.get(`
    https://api.themoviedb.org/3/account/${keys.ACCOUNT_ID}/favorite/tv?api_key=${keys.API_KEY}&session_id=${keys.SESSION_ID}&sort_by=created_at.asc`);
    setFavoriteTv(tv);
  };

  const fetchRated = async () => {
    const { data } = await axios.get(`
    https://api.themoviedb.org/3/account/${keys.ACCOUNT_ID}/rated/movies?api_key=${keys.API_KEY}&session_id=${keys.SESSION_ID}&sort_by=created_at.asc`);
    setRatedMovies(data);
    const { data: tv } = await axios.get(`
    https://api.themoviedb.org/3/account/${keys.ACCOUNT_ID}/rated/tv?api_key=${keys.API_KEY}&session_id=${keys.SESSION_ID}&sort_by=created_at.asc`);
    setRatedTv(tv);
  };

  const fetchWatchlist = async () => {
    const { data } = await axios.get(`
    https://api.themoviedb.org/3/account/${keys.ACCOUNT_ID}/watchlist/movies?api_key=${keys.API_KEY}&session_id=${keys.SESSION_ID}&sort_by=created_at.asc`);
    setWatchlistMovies(data);
    const { data: tv } = await axios.get(`
    https://api.themoviedb.org/3/account/${keys.ACCOUNT_ID}/watchlist/tv?api_key=${keys.API_KEY}&session_id=${keys.SESSION_ID}&sort_by=created_at.asc`);
    setWatchlistTv(tv);
  };

  useEffect(() => {
    fetchData();
    fetchFavorites();
    fetchRated();
    fetchWatchlist();
  }, []);

  const chartData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "red",
          "blue",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

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
          <div className="profile__stats-inner">
            <div>
              <p>Total Ratings</p>
              <h2>{ratedMovies?.results?.length + ratedTv?.results?.length}</h2>
            </div>
            <div>
              <p>Total Favourites</p>
              <h2>
                {favorites?.results?.length + favoriteTv?.results?.length}
              </h2>
            </div>
            <div>
              <p>Total Watchlists</p>
              <h2>
                {watchlistMovies?.results?.length +
                  watchlistTv?.results?.length}
              </h2>
            </div>
            <div width={400} height={400}>
              <Doughnut
                style={{ width: "100%", height: "100%" }}
                data={chartData}
              />
            </div>
          </div>
        </div>
      </div>
    </StyledProfile>
  );
}

export default Profile;
