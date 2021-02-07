import store from '.';
import {Api} from './../actions/app';
import {
  CategoryType,
  GlobalActionsType,
  SET_GATEGORY,
  RESET,
  SET_DIFFICULTY,
  DifficultyType,
  SET_TOKEN,
  QuestionsType,
  SET_LOADING,
  SET_QUESTIONS,
  HomeThunkType,
} from './types';

export const setCategoty = (category: CategoryType): GlobalActionsType => ({
  type: SET_GATEGORY,
  category,
});

export const setReset = (): GlobalActionsType => ({
  type: RESET,
});

export const setDifficulty = (
  difficulty: DifficultyType,
): GlobalActionsType => ({
  type: SET_DIFFICULTY,
  difficulty,
});

export const setToken = (token: string): GlobalActionsType => ({
  type: SET_TOKEN,
  token,
});

export const setLoading = (loading: boolean): GlobalActionsType => ({
  type: SET_LOADING,
  loading,
});

export const setQuestions = (
  questions: QuestionsType[],
): GlobalActionsType => ({
  type: SET_QUESTIONS,
  questions,
});

export const getQuestions = (
  category: number,
  difficulty: string,
): HomeThunkType => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const {token} = store.getState().home;
    if (token) {
      await Api.resetToken(token);
    }
    let newToken = await Api.fetchToken();
    dispatch(setToken(newToken.token));
    let questions = await Api.fetchQuestions(
      category,
      difficulty,
      newToken.token,
    );
    dispatch(setQuestions(questions.results));
  } catch (error) {
    console.log(error);
  }
};
