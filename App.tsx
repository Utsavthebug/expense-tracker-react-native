import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from './src/screens/Dashboard';
import AddScreen from './src/screens/AddScreen';
import CustomHeader from './src/components/CustomHeader';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Dashboard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={AddScreen}
          name="Add"
          options={{header: props => <CustomHeader {...props} />}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
