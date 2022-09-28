// In App.js in a new project

import * as React from 'react';
import {View, Text, ScrollView, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Main = createStackNavigator();
const Tab = createMaterialTopTabNavigator();
const Second = createStackNavigator();

const Items = [
  {
    id: 1,
    name: 'Item 1',
  },
  {
    id: 2,
    name: 'Item 2',
  },
  {
    id: 3,
    name: 'Item 3',
  },
  {
    id: 4,
    name: 'Item 4',
  },
  {
    id: 5,
    name: 'Item 5',
  },
  {
    id: 6,
    name: 'Item 6',
  },
  {
    id: 7,
    name: 'Item 7',
  },
  {
    id: 8,
    name: 'Item 8',
  },
  {
    id: 9,
    name: 'Item 9',
  },
  {
    id: 10,
    name: 'Item 10',
  },
  {
    id: 11,
    name: 'Item 11',
  },
  {
    id: 12,
    name: 'Item 12',
  },
];

function SubScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ScrollView horizontal style={{flex: 1, backgroundColor: 'black'}}>
        {Items.map(e => (
          <View
            key={e.id}
            style={{padding: 10, backgroundColor: 'gray', marginRight: 10}}>
            <Text>{e.name}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text>Bottom on screen</Text>
      </View>
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
      <Button
        title="Go to Sub screen"
        onPress={() =>
          navigation.navigate('Stack', {
            screen: 'Sub',
          })
        }
      />
    </View>
  );
}

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

function Stack() {
  return (
    <Second.Navigator>
      <Second.Screen name="Sub" component={SubScreen} />
    </Second.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Main.Navigator
        screenOptions={{
          gestureEnabled: true,
        }}>
        <Main.Screen name="Tabs" component={Tabs} />
        <Main.Screen name="Stack" component={Stack} />
      </Main.Navigator>
    </NavigationContainer>
  );
}

export default App;
