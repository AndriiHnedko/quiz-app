import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type Props = {
  title: string;
  id: number;
  onPressCategory: (name: string, id: number) => void;
};

const CategoryItem: React.FC<Props> = ({title, id, onPressCategory}) => {
  const onPress = () => {
    onPressCategory(title, id);
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(45, 66, 91, 1)',
    borderRadius: 10,
    height: 80,
    paddingHorizontal: 10,
    marginBottom: 30,
    justifyContent: 'center',
    elevation: 10,
  },
  text: {
    fontSize: 24,
    color: 'white',
  },
});

export default CategoryItem;
