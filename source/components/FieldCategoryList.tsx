import React, {useCallback, useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import FieldCategory from '../components/FieldCategory';

const FieldCategoryList = () => {
  const [scrollVisible, setScrollVisible] = useState(true);
  const mainScaleX = useSharedValue(0);
  const scrollTranslateY = useSharedValue(0);

  const animatedStyleMain = useAnimatedStyle(() => ({
    transform: [{scaleX: mainScaleX.value}],
  }));

  const animatedStyleScroll = useAnimatedStyle(() => ({
    transform: [{translateY: scrollTranslateY.value}],
  }));

  // const funcTest = useCallback(() => {
  //   if (scrollVisible) {
  //     mainScaleX.value = withTiming(1, {
  //       duration: 1000,
  //       easing: Easing.out(Easing.exp),
  //     });
  //     scrollTranslateY.value = withTiming(
  //       1000,
  //       {
  //         duration: 1000,
  //         easing: Easing.out(Easing.exp),
  //       },
  //       () => setScrollVisible(false),
  //     );
  //   }
  // }, [scrollVisible, setScrollVisible]);

  // funcTest();

  return (
    <View style={styles.container}>
      <Animated.View style={[animatedStyleMain, styles.main]}>
        <FieldCategory title="test1" />
      </Animated.View>
      {scrollVisible && (
        <Animated.View style={animatedStyleScroll}>
          <ScrollView
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
            style={{paddingHorizontal: 20, paddingBottom: 20}}>
            <FieldCategory title="test" />
            <FieldCategory title="test" />
            <FieldCategory title="test" />
            <FieldCategory title="test" />
            <FieldCategory title="test" />
            <FieldCategory title="test" />
            <FieldCategory title="test" />
            <FieldCategory title="test" />
          </ScrollView>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(34, 42, 64, 1)',
    flex: 1,
  },
  main: {
    position: 'absolute',
    zIndex: 200,
    marginLeft: 20,
    paddingRight: 40,
    width: '100%',
  },
});

export default FieldCategoryList;
