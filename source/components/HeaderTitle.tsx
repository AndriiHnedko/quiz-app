import React, {useCallback, useEffect} from 'react';
import {StyleProp, StyleSheet, TextStyle} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

type TitleProps = {
  initialTranslateY: number;
  initialOpacity: number;
  resultTranslateY: number;
  resultOpacity: number;
  duration: number;
  title: string;
  visible: boolean;
  style?: StyleProp<Animated.AnimateStyle<TextStyle>>;
};

const AnimatedTitle: React.FC<TitleProps> = ({
  initialOpacity,
  initialTranslateY,
  resultOpacity,
  resultTranslateY,
  duration,
  title,
  visible,
  style = {},
}) => {
  const translateY = useSharedValue(initialTranslateY);
  const opacity = useSharedValue(initialOpacity);
  const animatedStyleTitle = useAnimatedStyle(() => ({
    transform: [{translateY: translateY.value}],
    opacity: opacity.value,
  }));
  const animateTitle = useCallback(
    (newTranslateY: number, newOpacity: number) => {
      translateY.value = withTiming(newTranslateY, {
        duration: duration,
        easing: Easing.out(Easing.exp),
      });
      opacity.value = withTiming(newOpacity, {
        duration: duration,
        easing: Easing.out(Easing.exp),
      });
    },
    [duration],
  );
  useEffect(() => {
    visible
      ? animateTitle(initialTranslateY, initialOpacity)
      : animateTitle(resultTranslateY, resultOpacity);
  }, [visible]);

  return (
    <Animated.Text style={[styles.title, animatedStyleTitle, style]}>
      {title}
    </Animated.Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: 'white',
  },
});

export default AnimatedTitle;
