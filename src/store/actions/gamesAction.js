import {
  getPopularGames,
  getUpcomingGames,
  getNewGames,
  searchGames,
  getSingleGame, 
  getSingleGameScreenshot,
} from "./../../services/games.service";


export const loadGames = () => async (dispatch) => {
  dispatch({
    type: "LOADING_GAMES",
  });

  const popularData = await getPopularGames();
  const upcomingData = await getUpcomingGames();
  const newGamesData = await getNewGames();

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.results,
      upcoming: upcomingData.results,
      newGames: newGamesData.results,
    },
  });
};

export const fetchSearch = (query) => async (dispatch) => {
  dispatch({
    type: "LOADING_GAMES",
  });

  const searchData = await searchGames(query);

  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchData.results,
    },
  });
};

export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });

  const detailData = await getSingleGame(id);
  const screenShotData = await getSingleGameScreenshot(id);

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData,
      screen: screenShotData,
    },
  });
};