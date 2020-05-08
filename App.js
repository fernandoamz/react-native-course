import 'react-native-gesture-handler';
import * as React from 'react';
import {Button, View, Alert, useWindowDimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Counter from './src/screens/Counter';
import MainMenu from './src/screens/MainMenu';
import HandleEvents from './src/screens/HandleEvents';
import TopicStyle from './src/screens/TopicStyle';
import Users from './src/screens/Users';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const TabMaterial = createMaterialBottomTabNavigator();
const TopBar = createMaterialTopTabNavigator();

function LogoHeader() {
  return <MaterialCommunityIcons name="home" color="#ffff" size={30} />;
}

export function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle: props => <LogoHeader {...props} />,
          headerRight: () => (
            <View style={{margin: 20}}>
              <Button
                onPress={() => Alert.alert('works')}
                title="Info"
                color="#000"
              />
            </View>
          ),
        }}>
        <Stack.Screen
          component={Login}
          name="Login"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen component={Home} name="Home" />
        <Stack.Screen component={Counter} name="Counter" />
        <Stack.Screen component={MainMenu} name="MainMenu" />
        <Stack.Screen component={HandleEvents} name="HandleEvents" />
        <Stack.Screen component={TopicStyle} name="TopicStyle" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export function MyDrawer() {
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerType={dimensions.width >= 768 ? 'permanent' : 'front'}
        drawerStyle={{
          width: '100%',
          backgroundColor: '#c6cbef',
        }}
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: {
            marginVertical: 10,
          },
        }}>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{drawerLabel: 'My Home'}}
        />
        <Drawer.Screen
          name="Counter"
          component={Counter}
          options={{drawerLabel: 'My Counter'}}
        />
        <Drawer.Screen
          name="MainMenu"
          component={MainMenu}
          options={{drawerLabel: 'My MainMenu'}}
        />
        <Drawer.Screen name="HandleEvents" component={HandleEvents} />
        <Drawer.Screen name="TopicStyle" component={TopicStyle} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export function MySimpleTab() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'My Home',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color="#e91e63" size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Counter"
          component={Counter}
          options={{
            tabBarLabel: 'My Counter',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="coin" color="#e91e63" size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="TopicStyle"
          component={TopicStyle}
          options={{
            tabBarLabel: 'My Styles',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="bell" color="#e91e63" size={20} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export function MyMaterialTab() {
  return (
    <NavigationContainer>
      <TabMaterial.Navigator>
        <TabMaterial.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'My Home',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color="#fff" size={20} />
            ),
          }}
        />
        <TabMaterial.Screen
          name="Counter"
          component={Counter}
          options={{
            tabBarLabel: 'My Counter',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="coin" color="#fff" size={20} />
            ),
          }}
        />
        <TabMaterial.Screen
          name="TopicStyle"
          component={TopicStyle}
          options={{
            tabBarLabel: 'My Styles',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="bell" color="#fff" size={20} />
            ),
          }}
        />
      </TabMaterial.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <TopBar.Navigator
        tabBarOptions={{
          labelStyle: {fontSize: 10, color: 'white'},
          // tabStyle: {width: 120},
          style: {backgroundColor: 'steelblue'},
          showIcon: true,
        }}>
        <TopBar.Screen
          name="Users"
          component={Users}
          options={{
            tabBarLabel: 'Users',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="face-profile"
                color="#fff"
                size={20}
              />
            ),
          }}
        />
        <TopBar.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color="#fff" size={20} />
            ),
          }}
        />
        <TopBar.Screen
          name="HandleEvents"
          component={HandleEvents}
          options={{
            tabBarLabel: 'Camera',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="camera" color="#fff" size={20} />
            ),
          }}
        />
        <TopBar.Screen
          name="Counter"
          component={Counter}
          options={{
            tabBarLabel: 'Counter',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="coin" color="#fff" size={20} />
            ),
          }}
        />
        <TopBar.Screen
          name="TopicStyle"
          component={TopicStyle}
          options={{
            tabBarLabel: 'My Styles',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="bell" color="#fff" size={20} />
            ),
          }}
        />
      </TopBar.Navigator>
    </NavigationContainer>
  );
}
