import {ThunkAction} from 'redux-thunk';
import {RootStateType} from './rootReducer';

export const SET_GATEGORY = 'SET_GATEGORY';
export const SET_DIFFICULTY = 'SET_DIFFICULTY';
export const SET_QUESTIONS = 'SET_QUESTIONS';
export const RESET = 'RESET';
export const SET_LOADING = 'SET_LOADING';
export const SET_TOKEN = 'SET_TOKEN';

export type CategoryType = {
  id: number;
  name: string;
};

export type DifficultyType = 'easy' | 'medium' | 'hard';

export type QuestionsType = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};
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
  questions: QuestionsType[];
};

type ResetActionType = {
  type: typeof RESET;
};

type SetLoadingType = {
  type: typeof SET_LOADING;
  loading: boolean;
};

type SetTokenActionType = {
  type: typeof SET_TOKEN;
  token: string;
};

export type GlobalStateType = {
  category?: CategoryType;
  difficulty?: DifficultyType;
  questions: QuestionsType[];
  loading: boolean;
  token?: string;
};

export type GlobalActionsType =
  | SetCategoryActionType
  | SetDifficultyActionType
  | SetQuestionsActionType
  | SetLoadingType
  | SetTokenActionType
  | ResetActionType;

export type HomeThunkType = ThunkAction<
  Promise<void>,
  RootStateType,
  {},
  GlobalActionsType
>;
