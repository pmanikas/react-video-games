import { get } from "./api.service";

const BASE_URL = "https://api.rawg.io/api/";
const API_KEY = process.env.REACT_APP_API_KEY || "";

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

export const popularGamesURL = `${BASE_URL}games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
export const upcomingGamesURL = `${BASE_URL}games?key=${API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
export const newGamesURL = `${BASE_URL}games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const GameDetailsURL = (game_id) =>
  `${BASE_URL}games/${game_id}?key=${API_KEY}`;
export const gameScreenshotURL = (game_id) =>
  `${BASE_URL}games/${game_id}/screenshots?key=${API_KEY}`;
export const searchGameURL = (query) =>
  `${BASE_URL}games?key=${API_KEY}&search=${query}&page_size=9`;

const getPopularGames = () => {
  return get(popularGamesURL);
};
const getUpcomingGames = () => {
  return get(upcomingGamesURL);
};
const getNewGames = () => {
  return get(newGamesURL);
};
const getSingleGame = (game_id) => {
  return get(GameDetailsURL(game_id));
};
const getSingleGameScreenshot = (game_id) => {
  return get(gameScreenshotURL(game_id));
};
const searchGames = (query) => {
  return get(searchGameURL(query));
};

export {
  getPopularGames,
  getUpcomingGames,
  getNewGames,
  searchGames,
  getSingleGame,
  getSingleGameScreenshot,
};
