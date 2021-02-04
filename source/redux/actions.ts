import {CategoryType, GlobalActionsType, SET_GATEGORY} from './types';

export const setCategoty = (category: CategoryType): GlobalActionsType => ({
  type: SET_GATEGORY,
  category,
});
