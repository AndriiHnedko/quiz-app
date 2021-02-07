import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useSelector} from 'react-redux';
import {RootStateType} from '../../redux/rootReducer';
import {ConfigAnimation} from '../../service/types';
import {defaultConfigAnimations} from '../../service/services';

type PropsType = {
  config?: ConfigAnimation;
  children: React.ReactNode;
};

const CategoryListContainer: React.FC<PropsType> = ({children, config}) => {
  const {duration, translateY} = defaultConfigAnimations(config);
  const category = useSelector((state: RootStateType) => state.home.category);
  const [contentVisibility, setContentVisibility] = useState(true);
  const scrollTranslateY = useSharedValue(translateY!.from);

  const animatedStyleScroll = useAnimatedStyle(() => ({
    transform: [{translateY: scrollTranslateY.value}],
  }));

  const animateList = (toValue: number, timeDuration: number) => {
    scrollTranslateY.value = withTiming(toValue, {
      duration: timeDuration,
      easing: Easing.out(Easing.exp),
    });
  };

  const hideList = useCallback(() => {
    setTimeout(() => {
      setContentVisibility(false);
    }, duration);
    animateList(translateY!.to, duration!);
  }, [category, contentVisibility, duration]);

  const showList = useCallback(() => {
    setContentVisibility(true);
    animateList(translateY!.from, duration!);
  }, [category, contentVisibility, duration]);

  useEffect(() => {
    if (category !== undefined && contentVisibility) {
      hideList();
    }
    if (category == undefined && !contentVisibility) {
      showList();
    }
  }, [category, showList, hideList, contentVisibility]);

  return (
    <Animated.View style={[animatedStyleScroll, styles.container]}>
      {contentVisibility && children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(34, 42, 64, 1)',
    flex: 1,
    marginBottom: -30,
  },
});

export default CategoryListContainer;
