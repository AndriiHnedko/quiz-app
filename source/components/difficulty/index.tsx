import React from 'react';
import {View} from 'react-native';
import DifficultItem from '../difficulty/DifficultItem';
import {DifficultyType} from '../../redux/types';
import {RootStateType} from '../../redux/rootReducer';
import {useSelector} from 'react-redux';

const Difficulty = () => {
  const {questions, category} = useSelector(
    (state: RootStateType) => state.home,
  );
  const data: {name: DifficultyType; color: string; delay: number}[] = [
    {name: 'easy', color: '#ebb78c', delay: 100},
    {name: 'medium', color: '#eba062', delay: 200},
    {name: 'hard', color: '#e78330', delay: 300},
  ];

  const _renderCategories = () => {
    return data.map((el, id) => (
      <DifficultItem
        title={el.name}
        key={el.name + id + el.color}
        color={el.color}
        config={{
          translateX: {from: -500, to: 0},
          delay: el.delay,
          duration: 2000,
        }}
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
          {_renderCategories()}
        </View>
      )}
    </>
  );
};

export default Difficulty;
