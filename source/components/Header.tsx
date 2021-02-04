import React, {useCallback, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useSelector} from 'react-redux';
import {RootStateType} from '../redux/rootReducer';
import AnimatedTitle from './HeaderTitle';

const Header = () => {
  const currentCategory = useSelector(
    (state: RootStateType) => state.home.category,
  );
  const height = useSharedValue(100);
  const borderRadius = useSharedValue(30);
  const animatedStyle = useAnimatedStyle(() => ({
    height: height.value,
    borderBottomLeftRadius: borderRadius.value,
    borderBottomRightRadius: borderRadius.value,
  }));

  const animateContainer = useCallback(
    (heightContainer: number, radius: number) => {
      height.value = withTiming(heightContainer, {
        //60
        duration: 1000,
        easing: Easing.out(Easing.exp),
      });
      borderRadius.value = withTiming(radius, {
        // 0
        duration: 1000,
        easing: Easing.out(Easing.exp),
      });
    },
    [currentCategory],
  );

  useEffect(() => {
    currentCategory ? animateContainer(80, 0) : animateContainer(100, 30);
  }, [currentCategory, animateContainer]);

  return (
    <View style={{alignItems: 'center'}}>
      <Animated.View style={[animatedStyle, styles.header]}>
        <AnimatedTitle
          initialTranslateY={10}
          initialOpacity={1}
          resultTranslateY={-30}
          resultOpacity={0}
          duration={2000}
          title={'Quiz App'}
          visible={currentCategory == undefined}
          style={{textAlign: 'center'}}
        />
        <AnimatedTitle
          initialTranslateY={-20}
          initialOpacity={1}
          resultTranslateY={20}
          resultOpacity={0}
          duration={2000}
          title={currentCategory ? currentCategory.name : ''}
          visible={currentCategory !== undefined}
          style={{paddingLeft: 30}}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgba(45, 66, 91, 1)',
    width: '100%',
    // alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
});

export default Header;
