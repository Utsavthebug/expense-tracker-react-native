import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import ArrowDown from '../../assets/icons/down-arrow.svg';
import ArrowBack from '../../assets/icons/backward.svg';
import CorrectCheckList from '../../assets/icons/correct-checklist.svg';

const AddScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.border}>
        <Text style={styles.text1}>Amount</Text>
        <View style={styles.textWrapper}>
          <View style={styles.textContainer}>
            <Text style={styles.text2}>$</Text>
            <Text style={styles.number}>50</Text>
          </View>

          <Text style={styles.usd}>USD</Text>
        </View>
      </View>

      <View style={styles.container2}>
        <View style={{display: 'flex', rowGap: 8}}>
          <Text style={{fontWeight: '700'}}>Expenses made for</Text>
          <Text style={{fontWeight: '900', color: '#000000'}}>
            Tea & Snacks
          </Text>
        </View>

        <View
          style={{
            padding: 15,
            backgroundColor: 'rgba(148, 137, 143, 0.27)',
            borderRadius: 13,
          }}>
          <ArrowDown height={10} width={10} />
        </View>
      </View>

      <View
        style={{
          marginTop: 40,
        }}>
        <Text
          style={{
            fontWeight: '700',
          }}>
          Description
        </Text>
        <Text style={{fontWeight: '900', color: '#000000', marginTop: 8}}>
          Meeting and Snacks with Victor
        </Text>
      </View>

      <View style={styles.numpad}>
        <Text style={styles.num}>1</Text>

        <Text style={styles.num}>2</Text>

        <Text style={styles.num}>3</Text>

        <Text style={styles.num}>4</Text>

        <Text style={styles.num}>5</Text>

        <Text style={styles.num}>6</Text>

        <Text style={styles.num}>7</Text>

        <Text style={styles.num}>8</Text>

        <Text style={styles.num}>9</Text>

        <Text style={styles.num}>
          <ArrowBack height={25} width={25} />
        </Text>

        <Text style={styles.num}>0</Text>

        <View style={styles.correct}>
          <View
            style={{
              backgroundColor: 'purple',
              height: 70,
              width: 70,
              borderRadius: 35,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <CorrectCheckList height={35} width={35} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
    paddingTop: 20,
    display: 'flex',
    flex: 1,
  },
  border: {
    borderBottomColor: '#000000',
    paddingHorizontal: 20,
    borderBottomWidth: 2,
    paddingBottom: 25,
  },
  text1: {
    fontWeight: '600',
  },
  textWrapper: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  text2: {
    fontWeight: '600',
    fontSize: 20,
    marginRight: 5,
    color: '#000000',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 8,
    alignItems: 'flex-end',
  },
  number: {
    fontSize: 25,
    fontWeight: '800',
    color: '#000000',
  },
  usd: {
    fontWeight: '600',
  },
  container2: {
    marginTop: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  numpad: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 65,
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    rowGap: 40,
  },
  num: {
    width: '33.33%',
    textAlign: 'center',
    fontWeight: '900',
    color: '#000000',
    fontSize: 27,
  },
  correct: {
    display: 'flex',
    alignItems: 'center',
    width: '33.33%',
  },
});

export default AddScreen;
