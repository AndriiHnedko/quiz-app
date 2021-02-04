export const SET_GATEGORY = 'SET_GATEGORY';
export const SET_DIFFICULTY = 'SET_DIFFICULTY';
export const SET_QUESTIONS = 'SET_QUESTIONS';
export const RESET = 'RESET';

export type CategoryType = {
  id: number;
  name: string;
};

type DifficultyType = 'easy' | 'medium' | 'hard';

type SetCategoryActionType = {
  type: typeof SET_GATEGORY;
  category: CategoryType;
};

type SetDifficultyActionType = {
  type: typeof SET_DIFFICULTY;
  difficulty: DifficultyType;
};

type SetQuestionsActionType = {
  type: typeof SET_QUESTIONS;
  questions: any;
};

type ResetActionType = {
  type: typeof RESET;
};

export type GlobalStateType = {
  category?: CategoryType;
  difficulty?: DifficultyType;
  questions?: any;
};

export type GlobalActionsType =
  | SetCategoryActionType
  | SetDifficultyActionType
  | SetQuestionsActionType
  | ResetActionType;
