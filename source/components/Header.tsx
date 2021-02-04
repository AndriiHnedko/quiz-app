import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const Header = () => {
  const height = useSharedValue(100);
  const borderRadius = useSharedValue(40);
  const animatedStyle = useAnimatedStyle(() => ({
    height: height.value,
    borderBottomLeftRadius: borderRadius.value,
    borderBottomRightRadius: borderRadius.value,
  }));

  const translateY = useSharedValue(0);
  const opacity = useSharedValue(1);
  const animatedStyleTitle = useAnimatedStyle(() => ({
    transform: [{scaleX: 0.5}, {translateY: translateY.value}],
    opacity: opacity.value,
  }));

  useEffect(() => {
    height.value = withTiming(60, {
      duration: 1000,
      easing: Easing.out(Easing.exp),
    });
    borderRadius.value = withTiming(0, {
      duration: 1000,
      easing: Easing.out(Easing.exp),
    });
    translateY.value = withTiming(-30, {
      duration: 1000,
      easing: Easing.out(Easing.exp),
    });
    opacity.value = withTiming(0, {
      duration: 1000,
      easing: Easing.out(Easing.exp),
    });
  }, []);

  return (
    <View style={{alignItems: 'center'}}>
      <Animated.View style={[animatedStyle, styles.header]}>
        <Animated.Text style={[styles.title, animatedStyleTitle]}>
          Quiz App
        </Animated.Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgba(45, 66, 91, 1)',
    width: '50%',
    transform: [{scaleX: 2}],
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
  title: {
    fontSize: 24,
  },
});

export default Header;
