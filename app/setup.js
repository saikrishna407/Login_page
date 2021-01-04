// In App.js in a new project

import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import Login from './loginpage/form';
import Dashboard from './Dashbaord/index';
import Registration from './reg/index';
import Dashboard2 from './Dashboard2/index';


// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }
// function DetailsScreen() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//       </View>
//     );
//   }

// function HomeScreen({ navigation }) {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//         <Button
//           title="Go to Details"
//           onPress={() => navigation.navigate('Details')}
//         />
//       </View>
//     );
//   }
  
  function DetailsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }
const Stack = createStackNavigator();

function Nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard2" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        
        <Stack.Screen name="Dashboard" component={Dashboard} />
        
        <Stack.Screen name="Dashboard2" component={Dashboard2} />
        <Stack.Screen name="Registration" component={Registration} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Nav;