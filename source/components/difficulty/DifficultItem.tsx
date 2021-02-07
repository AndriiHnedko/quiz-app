import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import {useDispatch, useSelector} from 'react-redux';
import {getQuestions, setDifficulty} from '../../redux/actions';
import {RootStateType} from '../../redux/rootReducer';
import {DifficultyType} from '../../redux/types';
import {defaultConfigAnimations} from '../../service/services';
import {ConfigAnimation} from '../../service/types';

type Props = {
  title: DifficultyType;
  color: string;
  config?: ConfigAnimation;
};

const DifficultItem: React.FC<Props> = ({title, color, config}) => {
  const {difficulty, category} = useSelector(
    (state: RootStateType) => state.home,
  );
  const {delay, translateX, duration} = defaultConfigAnimations(config);
  const stateTranslateX = useSharedValue(translateX!.from);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: stateTranslateX.value}],
  }));

  const animateItem = (
    toValue: number,
    timeDelay: number,
    timeDuration: number,
  ) => {
    stateTranslateX.value = withDelay(
      timeDelay,
      withTiming(toValue, {
        duration: timeDuration,
        easing: Easing.out(Easing.exp),
      }),
    );
  };

  const dispatch = useDispatch();

  const onPress = () => {
    dispatch(setDifficulty(title));
    dispatch(getQuestions(category!.id, title));
  };

  const showItem = () => {
    animateItem(translateX!.to, delay!, duration!);
  };

  const hideItem = () => {
    animateItem(translateX!.from, delay!, duration!);
  };

  useEffect(() => {
    if (difficulty == undefined) {
      showItem();
    }
    if (difficulty !== undefined) {
      hideItem();
    }
  }, [difficulty]);

  return (
    <TouchableOpacity onPress={onPress}>
      <Animated.View
        style={[styles.container, {backgroundColor: color}, animatedStyle]}>
        <Text style={styles.text}>{title}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    paddingHorizontal: 30,
    marginBottom: 30,
    justifyContent: 'center',
    elevation: 10,
  },
  text: {
    fontSize: 24,
    color: 'white',
    textTransform: 'uppercase',
  },
});

export default DifficultItem;
