import React, {useState} from 'react';
import {View} from 'react-native';
import DifficultItem from '../difficulty/DifficultItem';
import {DifficultyType} from '../../redux/types';
import {RootStateType} from '../../redux/rootReducer';
import {useSelector} from 'react-redux';
import AnswerField from './AnswerField';

type PropsType = {
  correctAnswer: string;
  data: string[];
  setResult: (event: boolean) => void;
};

const AnswerContainer: React.FC<PropsType> = ({
  correctAnswer,
  data,
  setResult,
}) => {
  const [showResult, setShowResult] = useState<boolean>(false);

  const pressHandler = (event: boolean) => {
    if (event) {
      setResult(event);
      // setAnswerCount((p) => p + 1);
      //show btn
    } else {
      setShowResult(true);
      //show btn
    }
  };

  const _renderAnswerFields = () => {
    return data.map((el, index) => (
      <AnswerField
        answer={el}
        isCorrect={el === correctAnswer}
        pressHandler={pressHandler}
        showResult={showResult}
      />
    ));
  };

  return (
    <>
      {questions.length === 0 && category && (
        <View
          style={{
            paddingHorizontal: 65,
            flex: 1,
            justifyContent: 'flex-end',
            marginTop: 200,
          }}>
          {/* {_renderCategories()} */}
        </View>
      )}
    </>
  );
};

export default AnswerContainer;
