import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {setCategoty} from '../../redux/actions';

type Props = {
  title: string;
  id: number;
};

const CategoryItem: React.FC<Props> = ({title, id}) => {
  const dispatch = useDispatch();
  const onPress = () => {
    dispatch(setCategoty({name: title, id: id}));
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
