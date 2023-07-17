import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const capitalizeFirstLetter = word => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const Expense = ({Icon, height = 20, width = 20, data}) => {
  const textArray = data?.text?.split(' ');
  const firstText = capitalizeFirstLetter(textArray[0]);
  const secondText = capitalizeFirstLetter(textArray.slice(1).join(' '));
  return (
    <View style={styles.container}>
      <View style={styles.IconContainer}>
        <View style={styles.IconWrapper}>
          <Icon height={height} width={width} fill={'#7F0DF5'} />
        </View>
        <View>
          <Text style={styles.text1}>{firstText}</Text>
          <Text style={styles.subject}>{secondText}</Text>
        </View>
      </View>

      <Text style={styles.text2}>${data?.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(206, 200, 203, 0.28)',
    paddingVertical: 10,
    paddingRight: 25,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: 12,
  },
  IconContainer: {
    marginLeft: 10,
    display: 'flex',
    flexDirection: 'row',
    columnGap: 20,
  },
  IconWrapper: {
    backgroundColor: '#7F0DF5',
    padding: 12,
    borderRadius: 13,
  },
  text2: {
    fontWeight: '900',
    color: 'black',
  },
  text1: {
    fontWeight: '800',
    color: 'black',
    fontSize: 16,
  },
  subject: {
    fontSize: 12,
    color: 'rgba(71, 68, 70, 0.71)',
  },
});

export default Expense;
