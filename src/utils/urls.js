import keys from "../configs";

const Urls = {
  POPULAR_MOVIES: "movie/popular",
  TRENDING: "trending/movie/day",
  TRENDING_WEEK: "trending/movie/week",
  NOW_PLAYING: "movie/now_playing",
  TV_POPULAR: "tv/popular",
  FAVOURITE_MOVIE: `account/${keys.SESSION_ID}/favorite/movies?`,
  FAVOURITE_TV: `account/${keys.SESSION_ID}/favorite/tv?`,
};

export default Urls;
