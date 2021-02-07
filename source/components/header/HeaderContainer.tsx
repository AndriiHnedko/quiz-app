import React, {useCallback, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {defaultConfigAnimations} from '../../service/services';
import {ConfigAnimation} from '../../service/types';

type PropsType = {
  children: React.ReactNode;
  config?: ConfigAnimation;
  hide: boolean;
};

const HeaderContainer: React.FC<PropsType> = ({children, hide, config}) => {
  const defaultConfig = defaultConfigAnimations(config);
  const height = useSharedValue(defaultConfig.height!.from); //from 100 to 60
  const borderRadius = useSharedValue(defaultConfig.borderRadius!.from); // from 30 to 0
  const animatedStyle = useAnimatedStyle(() => ({
    height: height.value,
    borderBottomLeftRadius: borderRadius.value,
    borderBottomRightRadius: borderRadius.value,
  }));

  const animateContainer = useCallback(
    (heightContainer: number, radius: number) => {
      height.value = withTiming(heightContainer, {
        duration: defaultConfig.duration,
        easing: Easing.out(Easing.exp),
      });
      borderRadius.value = withTiming(radius, {
        duration: defaultConfig.duration,
        easing: Easing.out(Easing.exp),
      });
    },
    [hide],
  );

  useEffect(() => {
    hide
      ? animateContainer(
          defaultConfig.height!.to,
          defaultConfig.borderRadius!.to,
        )
      : animateContainer(
          defaultConfig.height!.from,
          defaultConfig.borderRadius!.from,
        );
  }, [hide, animateContainer]);

  return (
    <Animated.View style={[animatedStyle, styles.header]}>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgba(45, 66, 91, 1)',
    width: '100%',
    elevation: 10,
  },
});

export default HeaderContainer;
