import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type Props = {
  answer: string;
  isCorrect: boolean;
  pressHandler: (answer: boolean) => void;
  showResult: boolean;
};

const AnswerField: React.FC<Props> = ({
  answer,
  isCorrect,
  pressHandler,
  showResult,
}) => {
  const resultColor = isCorrect ? '#3ab543' : '#a71212';
  const bgColor = useSharedValue('#ccdde5');

  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: bgColor.value,
  }));

  const animateBgColor = (toValue: string) => {
    bgColor.value = withTiming(toValue, {
      duration: 1000,
      easing: Easing.out(Easing.exp),
    });
  };

  const onPress = () => {
    animateBgColor(resultColor);
    pressHandler(isCorrect);
  };

  useEffect(() => {
    if (isCorrect && showResult) {
      animateBgColor(resultColor);
    }
  }, [showResult]);

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={1}>
      <Animated.View style={[styles.container, animatedStyle]}>
        <Text style={styles.text}>{answer}</Text>
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
    color: 'black',
  },
});

export default AnswerField;
