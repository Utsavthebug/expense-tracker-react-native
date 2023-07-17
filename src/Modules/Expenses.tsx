import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import ExpensesList from '../components/ExpensesList';
import GiftIcon from '../../assets/icons/gift.svg';
import messageIcon from '../../assets/icons/message.svg';
import CoffeIcon from '../../assets/icons/coffee1.svg';

const expensesdata = [
  {
    id: 1,
    day: 'Today',
    data: {price: '50', text: 'coffee with susan dangol', icon: CoffeIcon},
  },
  {
    id: 2,
    day: 'Today',
    data: {price: '1,500', text: 'Gift for Audrey Campbell', icon: GiftIcon},
  },
  {
    id: 3,
    day: 'Today',
    data: {
      price: '500',
      text: 'Subscription made with Chapman',
      icon: messageIcon,
    },
  },
  {
    id: 4,
    day: 'Yesterday',
    data: {
      price: '50',
      text: 'tea with Peter Bower',
      icon: CoffeIcon,
    },
  },
  {
    id: 5,
    day: 'Yesterday',
    data: {
      price: '500',
      text: 'subscription made with Chapman',
      icon: CoffeIcon,
    },
  },
];

const Expenses = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.text1}>All Expenses</Text>

        <View style={styles.btnWrapper}>
          <Pressable onPress={() => {}}>
            <Text style={styles.Btntext}>View All </Text>
          </Pressable>
        </View>
      </View>

      <ExpensesList data={expensesdata} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  text1: {
    color: 'black',
    fontWeight: '800',
    fontSize: 15,
  },
  btnWrapper: {
    paddingHorizontal: 8,
    paddingVertical: 5,
    backgroundColor: 'rgb(222, 218, 217)',
    borderRadius: 10,
  },
  Btntext: {
    color: 'rgb(138, 136, 135)',
    fontWeight: '600',
  },
});

export default Expenses;
