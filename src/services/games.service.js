import { get } from "./api.service";
import { getCurrentMonth, getCurrentDay } from "./../utils/timeFormat.utils";

const BASE_URL = "https://api.rawg.io/api/";
const API_KEY = process.env.REACT_APP_API_KEY || "";

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth(new Date());
const currentDay = getCurrentDay(new Date());
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const popularGamesURL = `${BASE_URL}games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcomingGamesURL = `${BASE_URL}games?key=${API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGamesURL = `${BASE_URL}games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

const gameDetailsURL = (id) =>
  `${BASE_URL}games/${id}?key=${API_KEY}`;
const gameScreenshotURL = (id) =>
  `${BASE_URL}games/${id}/screenshots?key=${API_KEY}`;

const searchGameURL = (query) =>
  `${BASE_URL}games?key=${API_KEY}&search=${query}&page_size=9`;

const getPopularGames = () => get(popularGamesURL);
const getUpcomingGames = () => get(upcomingGamesURL);
const getNewGames = () => get(newGamesURL);

const getSingleGame = (id) => get(gameDetailsURL(id));
const getSingleGameScreenshot = (id) => get(gameScreenshotURL(id));

const searchGames = (query) => get(searchGameURL(query));

export {
  getPopularGames,
  getUpcomingGames,
  getNewGames,
  searchGames,
  getSingleGame,
  getSingleGameScreenshot,
};
