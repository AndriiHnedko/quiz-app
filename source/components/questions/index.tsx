import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootStateType} from '../../redux/rootReducer';
import AnswerField from './AnswerField';
import SubmitButton from './SubmitButton';

const Questions = () => {
  const questions = useSelector((state: RootStateType) => state.home.questions);
  // const questions = data;
  const [questionCounter, setQuestionCounter] = useState(0);
  const [correctCounter, setCorrectCounter] = useState(0);
  const [result, setResult] = useState(false);
  const [btn, setBtn] = useState(false);

  const getRandom = () => Math.floor(Math.random() * Math.floor(2));
  const currenQuestion = questions[questionCounter];
  let answers = currenQuestion.incorrect_answers;

  const pressHandler = (event: boolean) => {
    if (event) {
      setCorrectCounter((p) => p + 1);
      setBtn(true);
    } else {
      setResult(true);
      setBtn(true);
    }
  };

  const buttonHandler = () => {
    setQuestionCounter((p) => p + 1);
    setResult(false);
    setBtn(false);
  };

  const _renderAnswerFields = () => {
    const currentAnswers = [...answers];
    currentAnswers.splice(getRandom(), 0, currenQuestion.correct_answer);
    return currentAnswers.map((el, index) => (
      <AnswerField
        answer={el}
        isCorrect={el === currenQuestion.correct_answer}
        pressHandler={pressHandler}
        showResult={result}
        key={el + index}
      />
    ));
  };

  return (
    <>
      <View style={[styles.wrapper]}>
        <View style={[styles.header]}>
          <Text style={[styles.text]}>Quiz: {questions.length}</Text>
          <Text style={[styles.text]}>Сorrect answers: {correctCounter}</Text>
        </View>
        <View style={[styles.questionContainer]}>
          <Text style={[styles.text]}>
            {questionCounter + 1}. {currenQuestion.question}
          </Text>
        </View>
        {_renderAnswerFields()}
        <View style={[styles.btnWrapper]}>
          <SubmitButton visible={btn} buttonHundler={buttonHandler} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 10,
    flex: 1,
  },
  header: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5,
    marginTop: 40,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  questionContainer: {
    height: 200,
    justifyContent: 'center',
  },
  btnWrapper: {
    justifyContent: 'flex-end',
    flex: 1,
  },
});

export default Questions;
