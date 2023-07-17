import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Expense from './Expense';

const ExpensesList = ({data}) => {
  return (
    <View style={styles.container}>
      {data.map((d, index) => (
        <View key={d?.id}>
          {data[index]?.day !== data[index - 1]?.day && (
            <Text style={styles.headerText}>{d.day}</Text>
          )}

          <Expense Icon={d?.data?.icon} data={d?.data} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  headerText: {
    color: 'rgb(105, 101, 99)',
    fontSize: 10,
    fontWeight: '500',
    marginBottom: 10,
    marginTop: 10,
  },
});

export default ExpensesList;
