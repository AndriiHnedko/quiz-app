import React from 'react';
import {ScrollView, View} from 'react-native';
import CategoryItem from './CategoryItem';
import {categories} from '../../service/categories';
import CategoryListContainer from './CategoryListContainer';

const Categories = () => {
  const _renderCategories = () => {
    return categories.map((el, id) => (
      <CategoryItem title={el.name} id={el.id} key={el.name + id} />
    ));
  };

  return (
    <CategoryListContainer
      config={{
        translateY: {from: -30, to: 800},
        duration: 2000,
      }}>
      <ScrollView
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        style={{
          paddingHorizontal: 20,
          paddingTop: 60,
        }}>
        {_renderCategories()}
        <View style={{height: 60}}></View>
      </ScrollView>
    </CategoryListContainer>
  );
};

export default Categories;
