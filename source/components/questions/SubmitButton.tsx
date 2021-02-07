import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type Props = {
  visible: boolean;
  buttonHundler: () => void;
};

const SubmitButton: React.FC<Props> = ({visible, buttonHundler}) => {
  const onPress = () => {
    buttonHundler();
  };
  const stateTranslateY = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateY: stateTranslateY.value}],
  }));

  const animateButton = (toValue: number) => {
    stateTranslateY.value = withTiming(toValue, {
      duration: 2000,
      easing: Easing.out(Easing.exp),
    });
  };
  useEffect(() => {
    visible ? animateButton(0) : animateButton(200);
  }, [visible]);
  return (
    <TouchableOpacity onPress={onPress}>
      <Animated.View style={[styles.container, animatedStyle]}>
        <Text style={styles.text}>submit</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e68131',
    borderRadius: 10,
    height: 60,
    paddingHorizontal: 10,
    marginBottom: 30,
    justifyContent: 'center',
    elevation: 10,
  },
  text: {
    fontSize: 24,
    color: 'white',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default SubmitButton;
