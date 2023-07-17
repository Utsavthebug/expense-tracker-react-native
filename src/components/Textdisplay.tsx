import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Textdisplay = () => {
  return (
    <View style={style.container}>
      <View style={style.textContainer}>
        <View style={style.dollarContainer}>
          <Text style={[style.textColor, {fontSize: 26, fontWeight: '600'}]}>
            $
          </Text>
          <Text style={[style.textColor, {fontSize: 40, fontWeight: '800'}]}>
            17,800
          </Text>
        </View>

        <Text style={[style.textColor, {opacity: 0.5, fontWeight: '500'}]}>
          USD
        </Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(22,22,23)',
    height: 130,
    borderRadius: 40,
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  dollarContainer: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 10,
    alignItems: 'center',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  textColor: {
    color: 'rgb(252,252,252)',
  },
});

export default Textdisplay;
