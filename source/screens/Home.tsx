import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {useSelector} from 'react-redux';
import Categories from '../components/caregories';
import Difficulty from '../components/difficulty';
import Header from '../components/header/index';
import Questions from '../components/questions';
import AnswerField from '../components/questions/AnswerField';
import {RootStateType} from '../redux/rootReducer';

const Home = () => {
  const {questions} = useSelector((state: RootStateType) => state.home);
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        barStyle="default"
        backgroundColor={styles.header.backgroundColor}
      />
      <View style={styles.container}>
        <Header />
        <Difficulty />
        <Categories />
        {questions.length !== 0 && <Questions />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(34, 42, 64, 1)',
    flex: 1,
  },
  header: {
    backgroundColor: 'rgba(45, 66, 91, 1)',
  },
});

export default Home;
