import React, {useCallback, useEffect} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import {defaultConfigAnimations} from '../../service/services';
import {ConfigAnimation} from '../../service/types';

type PropsType = {
  focused: boolean;
  style?: StyleProp<Animated.AnimateStyle<ViewStyle>>;
  children: React.ReactNode;
  config?: ConfigAnimation;
};

const AnimatedTitle: React.FC<PropsType> = ({
  focused,
  style = {},
  children,
  config,
}) => {
  const defaultConfig = defaultConfigAnimations(config);
  const translateY = useSharedValue(defaultConfig.translateY!.from);
  const opacity = useSharedValue(defaultConfig.opacity!.from);
  const animatedStyleTitle = useAnimatedStyle(() => ({
    transform: [{translateY: translateY.value}],
    opacity: opacity.value,
  }));

  const animateTitle = useCallback(
    (newTranslateY: number, newOpacity: number) => {
      translateY.value = withTiming(newTranslateY, {
        duration: defaultConfig.duration,
        easing: Easing.out(Easing.exp),
      });
      opacity.value = withTiming(newOpacity, {
        duration: defaultConfig.duration,
        easing: Easing.out(Easing.exp),
      });
    },
    [defaultConfig.duration],
  );

  useEffect(() => {
    focused
      ? animateTitle(
          defaultConfig.translateY!.from,
          defaultConfig.opacity!.from,
        )
      : animateTitle(defaultConfig.translateY!.to, defaultConfig.opacity!.to);
  }, [focused]);

  return (
    <Animated.View style={[animatedStyleTitle, style]}>
      {children}
    </Animated.View>
  );
};

export default AnimatedTitle;
