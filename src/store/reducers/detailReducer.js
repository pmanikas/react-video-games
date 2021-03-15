const initialState = {
  game: { platforms: [] },
  screen: { results: [] },
  isGameLoading: true,
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return { ...state };
  }
};

export default detailReducer;
