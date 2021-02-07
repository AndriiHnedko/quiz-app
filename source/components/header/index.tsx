import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setReset} from '../../redux/actions';
import {RootStateType} from '../../redux/rootReducer';
import HeaderContainer from './HeaderContainer';
import AnimatedTitle from './HeaderTitle';
import Icon from 'react-native-vector-icons/AntDesign';

const Header = () => {
  const duration = 2000;
  const dispatch = useDispatch();
  const currentCategory = useSelector(
    (state: RootStateType) => state.home.category,
  );

  const opPressClose = () => {
    dispatch(setReset());
  };

  return (
    <HeaderContainer
      hide={currentCategory !== undefined}
      config={{
        height: {from: 100, to: 70},
        borderRadius: {from: 30, to: 0},
        duration: duration,
      }}>
      <AnimatedTitle
        focused={currentCategory == undefined}
        config={{
          opacity: {from: 1, to: 0},
          translateY: {from: 30, to: -40},
          duration: duration,
        }}>
        <Text style={[styles.text, styles.nameTitle]}>Quiz App</Text>
      </AnimatedTitle>
      <AnimatedTitle
        focused={currentCategory !== undefined}
        config={{
          opacity: {from: 1, to: 0},
          translateY: {from: -10, to: 20},
          duration: duration,
        }}
        style={[styles.categoryTitleContainer]}>
        <Text style={[styles.text, styles.categoryTitle]}>
          {currentCategory?.name}
        </Text>
        <TouchableOpacity onPress={opPressClose}>
          <Icon name="close" color="white" size={24} />
        </TouchableOpacity>
      </AnimatedTitle>
    </HeaderContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgba(45, 66, 91, 1)',
    width: '100%',
    elevation: 10,
  },
  text: {
    color: 'white',
  },
  nameTitle: {
    textAlign: 'center',
    fontSize: 30,
  },
  categoryTitle: {
    paddingLeft: 30,
    fontSize: 20,
  },
  categoryTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 25,
  },
});

export default Header;
