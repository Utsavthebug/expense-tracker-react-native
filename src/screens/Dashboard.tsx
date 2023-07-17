import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import Menu from '../../assets/icons/menu.svg';
import Textdisplay from '../components/Textdisplay';
import Expenses from '../Modules/Expenses';
import PlusIcon from '../../assets/icons/plus.svg';

const Dashboard = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Menu height={25} width={25} />
          <Text style={styles.headerText}>Dashboard</Text>
        </View>

        <Image
          source={require('../../assets/images/image2.jpg')}
          style={styles.image}
        />
      </View>

      <View style={{paddingHorizontal: 10, marginBottom: 20}}>
        <Textdisplay />
      </View>
      <Expenses />

      <Pressable onPress={() => navigation.navigate('Add')}>
        <View style={styles.addWrapper}>
          <PlusIcon height="25" width="25" />
        </View>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 20,
    display: 'flex',
    flex: 1,
    position: 'relative',
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
    alignItems: 'center',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 15,
  },

  headerText: {
    fontWeight: '900',
    fontSize: 18,
    color: 'black',
  },
  image: {
    height: 45,
    width: 40,
    borderRadius: 15,
    resizeMode: 'contain',
  },
  addWrapper: {
    backgroundColor: 'rgba(10, 9, 9, 0.9)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
    borderRadius: 25,
    position: 'absolute',
    bottom: 65,
    right: 10,
  },
});

export default Dashboard;
