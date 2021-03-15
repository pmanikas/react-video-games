const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
  game: {},
  screen: { results: [] },
  isGameLoading: false,
  areGamesLoading: false,
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        newGames: action.payload.newGames,
        areGamesLoading: false,
      };
    case "FETCH_SEARCHED":
      return {
        ...state,
        searched: action.payload.searched,
      };
    case "CLEAR_SEARCHED":
      return {
        ...state,
        searched: [],
      };
    case "GET_DETAIL":
      return {
        ...state,
        game: action.payload.game,
        screen: action.payload.screen,
        isGameLoading: false,
      };
    case "LOADING_DETAIL":
      return {
        ...state,
        isGameLoading: true,
      };
    case "LOADING_GAMES":
      return {
        ...state,
        areGamesLoading: true,
      };
    default:
      return { ...state };
  }
};

export default gamesReducer;
