import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import FieldCategory from '../components/FieldCategory';
import FieldCategoryList from '../components/FieldCategoryList';
import Header from '../components/header/index';

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        barStyle="default"
        backgroundColor={styles.header.backgroundColor}
      />
      <View style={styles.container}>
        <Header />
        <FieldCategoryList />
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
