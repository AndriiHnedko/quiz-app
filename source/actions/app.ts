import axios from 'axios';
import {QuestionsType} from '../redux/types';

const instance = axios.create({
  baseURL: 'https://opentdb.com/',
});

type TokenType = {
  token: string;
  response_code: number;
};

export type ApiResponseType = {
  response_code: number;
  results: QuestionsType[];
};

export const Api = {
  fetchToken() {
    return instance
      .get<TokenType>('api_token.php?command=request')
      .then((r) => r.data);
  },
  resetToken(token: string) {
    return instance
      .get<TokenType>(`api_token.php?command=reset&token=${token}`)
      .then((r) => r.data);
  },
  fetchQuestions(category: number, difficulty: string, token: string) {
    return instance
      .get<ApiResponseType>(
        `api.php?amount=10&category=${category}&difficulty=${difficulty}&token=${token}&type=multiple`,
      )
      .then((r) => r.data);
  },
};
