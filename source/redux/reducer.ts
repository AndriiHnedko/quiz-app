import {
  GlobalStateType,
  GlobalActionsType,
  SET_GATEGORY,
  SET_DIFFICULTY,
  SET_QUESTIONS,
  RESET,
  SET_LOADING,
  SET_TOKEN,
} from './types';

const initialState: GlobalStateType = {
  category: undefined,
  difficulty: undefined,
  questions: [],
  loading: false,
  token: undefined,
};

export const home = (
  state = initialState,
  action: GlobalActionsType,
): GlobalStateType => {
  switch (action.type) {
    case SET_GATEGORY:
      return {
        ...state,
        category: action.category,
      };
    case SET_DIFFICULTY:
      return {...state, difficulty: action.difficulty};
    case SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    case SET_QUESTIONS:
      return {
        ...state,
        questions: action.questions,
        loading: false,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case RESET:
      return {
        ...state,
        category: undefined,
        difficulty: undefined,
        questions: [],
        token: undefined,
        loading: false,
      };
    default:
      return state;
  }
};
