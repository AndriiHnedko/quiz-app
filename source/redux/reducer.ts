import {
  GlobalStateType,
  GlobalActionsType,
  SET_GATEGORY,
  SET_DIFFICULTY,
  SET_QUESTIONS,
  RESET,
} from './types';

const initialState: GlobalStateType = {
  category: undefined,
  difficulty: undefined,
  questions: undefined,
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
      return state;
    case SET_QUESTIONS:
      return state;
    case RESET:
      return {
        ...state,
        category: undefined,
        difficulty: undefined,
        questions: undefined,
      };
    default:
      return state;
  }
};
