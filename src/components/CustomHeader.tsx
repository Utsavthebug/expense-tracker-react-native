import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import BackBtn from '../../assets/icons/back.svg';

const CustomHeader = ({navigation, back}) => {
  return (
    <View style={styles.container}>
      {back && (
        <Pressable onPress={() => navigation.goBack()}>
          <BackBtn height={30} width={30} />
        </Pressable>
      )}
      <Text style={styles.text1}>Add Amount</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingVertical: 20,
    paddingHorizontal: 15,
    display: 'flex',
    columnGap: 18,
    alignItems: 'center',
    flexDirection: 'row',
  },
  text1: {
    fontSize: 24,
    fontWeight: '800',
    color: 'rgb(22,22,23)',
  },
});

export default CustomHeader;
