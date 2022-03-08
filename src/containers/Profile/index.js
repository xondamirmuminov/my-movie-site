import React, { useState, useEffect } from "react";
import { Image, Avatar, Tabs } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";
import keys from "../../configs";
import StyledProfile from "../../styles/pages/profile";
import DefaultImage from "../../assets/image.svg";

const { TabPane } = Tabs;
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

  return (
    <StyledProfile>
      <div className="profile__home">
        <div className="container home-inner">
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
        <div className="container stats-inner">
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
          </div>
        </div>
      </div>
      <div className="profile__body">
        <div className="container body-inner">
          <Tabs defaultActiveKey="1">
            <TabPane tab="Rating Movies" key="1">
              <div className="card-inner">
                {ratedMovies?.results?.map((item) => (
                  <div className="card" key={item.id}>
                    <Link to={`/movie/${item?.id}`}>
                      <img
                        src={
                          item?.poster_path
                            ? keys.IMG_URL + item.poster_path
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
                          .toUTCString()
                          .split(" ")
                          .slice(0, 4)
                          .join(" ")}
                      </p>
                      <p className="card__text">{item?.overview}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabPane>
            <TabPane tab="Rating TV Shows" key="2">
              <div className="card-inner">
                {ratedTv?.results?.map((item) => (
                  <div className="card" key={item.id}>
                    <Link to={`/tv/${item?.id}`}>
                      <img
                        src={
                          item?.poster_path
                            ? keys.IMG_URL + item.poster_path
                            : item?.poster_path
                            ? keys.IMG_URL + item?.backdrop_path
                            : DefaultImage
                        }
                        alt={item?.title ?? item?.name}
                      />
                    </Link>
                    <div className="card__block">
                      <h2>
                        <Link to={`/tv/${item?.id}`}>
                          {item?.name ?? item?.title}
                        </Link>
                      </h2>
                      <p>
                        {new Date(item?.first_air_date)
                          .toUTCString()
                          .split(" ")
                          .slice(0, 4)
                          .join(" ")}
                      </p>
                      <p className="card__text">{item?.overview}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabPane>
            <TabPane tab="Favourite Movies" key="3">
              <div className="card-inner">
                {favorites?.results?.map((item) => (
                  <div className="card" key={item.id}>
                    <Link to={`/movie/${item?.id}`}>
                      <img
                        src={
                          item?.poster_path
                            ? keys.IMG_URL + item.poster_path
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
                          .toUTCString()
                          .split(" ")
                          .slice(0, 4)
                          .join(" ")}
                      </p>
                      <p className="card__text">{item?.overview}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabPane>
            <TabPane tab="Favourite TV Shows" key="4">
              <div className="card-inner">
                {favoriteTv?.results?.map((item) => (
                  <div className="card" key={item.id}>
                    <Link to={`/tv/${item?.id}`}>
                      <img
                        src={
                          item?.poster_path
                            ? keys.IMG_URL + item.poster_path
                            : item?.poster_path
                            ? keys.IMG_URL + item?.backdrop_path
                            : DefaultImage
                        }
                        alt={item?.title ?? item?.name}
                      />
                    </Link>
                    <div className="card__block">
                      <h2>
                        <Link to={`/tv/${item?.id}`}>
                          {item?.name ?? item?.title}
                        </Link>
                      </h2>
                      <p>
                        {new Date(item?.first_air_date)
                          .toUTCString()
                          .split(" ")
                          .slice(0, 4)
                          .join(" ")}
                      </p>
                      <p className="card__text">{item?.overview}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabPane>
            <TabPane tab="Movies Watchlist" key="5">
              <div className="card-inner">
                {watchlistMovies?.results?.map((item) => (
                  <div className="card" key={item.id}>
                    <Link to={`/movie/${item?.id}`}>
                      <img
                        src={
                          item?.poster_path
                            ? keys.IMG_URL + item.poster_path
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
                          .toUTCString()
                          .split(" ")
                          .slice(0, 4)
                          .join(" ")}
                      </p>
                      <p className="card__text">{item?.overview}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabPane>
            <TabPane tab="TV Show Watchlist" key="6">
              <div className="card-inner">
                {watchlistTv?.results?.map((item) => (
                  <div className="card" key={item?.id}>
                    <Link to={`/tv/${item?.id}`}>
                      <img
                        src={
                          item?.poster_path
                            ? keys.IMG_URL + item.poster_path
                            : item?.poster_path
                            ? keys.IMG_URL + item?.backdrop_path
                            : DefaultImage
                        }
                        alt={item?.title ?? item?.name}
                      />
                    </Link>
                    <div className="card__block">
                      <h2>
                        <Link to={`/tv/${item?.id}`}>
                          {item?.name ?? item?.title}
                        </Link>
                      </h2>
                      <p>
                        {new Date(item?.first_air_date)
                          .toUTCString()
                          .split(" ")
                          .slice(0, 4)
                          .join(" ")}
                      </p>
                      <p className="card__text">{item?.overview}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabPane>
          </Tabs>
        </div>
      </div>
    </StyledProfile>
  );
}

export default Profile;
