import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {
  title: string;
};

const FieldCategory: React.FC<Props> = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(45, 66, 91, 1)',
    borderRadius: 10,
    height: 80,
    marginTop: 20,
    paddingLeft: 10,
    justifyContent: 'center',
    elevation: 10,
  },
  text: {
    fontSize: 24,
    color: 'white',
  },
});

export default FieldCategory;
