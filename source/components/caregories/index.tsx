import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import CategoryItem from './CategoryItem';
import {categories} from '../../service/categories';
import CategoryListContainer from './CategoryListContainer';
import Difficulty from '../difficulty';
import {useDispatch, useSelector} from 'react-redux';
import {RootStateType} from '../../redux/rootReducer';
import {setCategoty} from '../../redux/actions';

const Categories = () => {
  const {questions, category} = useSelector(
    (state: RootStateType) => state.home,
  );
  const [hide, setHide] = useState(false);
  const dispatch = useDispatch();
  const onPressCategory = (name: string, id: number) => {
    setTimeout(() => {
      dispatch(setCategoty({name, id}));
    }, 2000);
    setHide(true);
  };

  const _renderCategories = () => {
    return categories.map((el, id) => (
      <CategoryItem
        title={el.name}
        id={el.id}
        key={el.name + id}
        onPressCategory={onPressCategory}
      />
    ));
  };

  useEffect(() => {
    if (category == undefined) {
      setHide(false);
    }
  }, [category]);

  return (
    <>
      {questions.length === 0 && (
        <CategoryListContainer
          config={{
            translateY: {from: -30, to: 800},
            duration: 2000,
          }}
          hide={hide}>
          <ScrollView
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
            style={{
              paddingHorizontal: 20,
              paddingTop: 60,
            }}>
            <Difficulty />
            {_renderCategories()}
            <View style={{height: 60}}></View>
          </ScrollView>
        </CategoryListContainer>
      )}
    </>
  );
};

export default Categories;
