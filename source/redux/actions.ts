import {CategoryType, GlobalActionsType, SET_GATEGORY, RESET} from './types';

export const setCategoty = (category: CategoryType): GlobalActionsType => ({
  type: SET_GATEGORY,
  category,
});

export const setReset = (): GlobalActionsType => ({
  type: RESET,
});
