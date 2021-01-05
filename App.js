import 'react-native-gesture-handler';
import * as React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import { NavigationContainer, getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ContactsScreen from './ContactsScreen';
import GalleryScreen from './GalleryScreen';
import MapScreen from './MapScreen';
import IndexScreen from './IndexScreen';
import Brightness from './Brightness';
import FlashLightScreen from './FlashLightScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const NavigationDrawerStructure = (props) => {
  const toggleDrawer = () => {

    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        <Image
          source={
            require('./drawer.jpg')
          }
          style={{width: 25, height: 25, marginLeft: 10}}
        />
      </TouchableOpacity>
    </View>
  );
};

const getHeaderTitle = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  switch (routeName) {
    case 'ContactsScreen':
      return 'Contacts';
    case 'GalleryScreen':
      return 'Gallery';
    case 'MapScreen':
      return 'Map';
    case 'LoginScreen':
      return 'Login';
    case 'Brightness':
          return 'Brightness';
    case 'FlashLight':
        return 'FlashLightScreen';
    case 'TabStack':
      return 'Contacts';
  }
};

const TabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="ContactsScreen"
      tabBarOptions={{
              activeTintColor: 'white',
              inactiveTintColor: 'gray',
              style: {
                backgroundColor: 'black',
              },
              labelStyle: {
                textAlign: 'center',
                fontSize: 16,
              },
            }}>
      <Tab.Screen
        name="ContactsScreen"
        component={ContactsScreen}
        options={{
          tabBarLabel: 'Contacts',
          tabBarIcon: ({horizontal, tintColor}) => (
            <Ionicons
                name='person-circle-outline'
                size={horizontal ? 20 : 25}
                color='gray'
            />
          ),

        }}
      />
      <Tab.Screen
        name="GalleryScreen"
        component={GalleryScreen}
        options={{
          tabBarLabel: 'Gallery',
          tabBarIcon: ({horizontal, tintColor}) => (
             <Ionicons
                name='image-outline'
                size={horizontal ? 20 : 25}
                color='gray'
             />
          ),
        }}
      />
      <Tab.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
            tabBarLabel: 'Map',
            tabBarIcon: ({horizontal, tintColor}) => (
               <Ionicons
                   name='map-outline'
                   size={horizontal ? 20 : 25}
                   color='gray'
               />
            ),

        }}
      />
    </Tab.Navigator>
  );
};

const ContactsScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="ContactsScreen">
      <Stack.Screen
        name="Contacts"
        component={TabStack}
        options={({route}) => ({
          headerTitle: getHeaderTitle(route),
          headerLeft: () => (
            <NavigationDrawerStructure
              navigationProps={navigation}
            />
          ),
          headerStyle: {
            backgroundColor: 'black', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        })}
      />
    </Stack.Navigator>
  );
};

const IndexScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
          initialRouteName="IndexScreen"
          screenOptions={{
            headerLeft: () => (
              <NavigationDrawerStructure navigationProps={navigation} />
            ),
            headerStyle: {
              backgroundColor: 'black', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}>
          <Stack.Screen
            name="IndexScreen"
            component={IndexScreen}
            options={{
              title: 'Index',
            }}
          />
        </Stack.Navigator>
  );
};



const BrightnessScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="Brightness"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: 'black', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="Brightness"
        component={Brightness}
        options={{
          title: 'Brightness',
        }}
      />
    </Stack.Navigator>
  );
};

const FlashLightScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="FlashLightScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: 'black', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="FlashLightScreen"
        component={FlashLightScreen}
        options={{
          title: 'FlashLight',
        }}
      />
    </Stack.Navigator>
  );
};



const DrawerInclude = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: 'black',
          itemStyle: {marginVertical: 5},
        }}>
        <Drawer.Screen
          name="ContactsScreenStack"
          options={{drawerLabel: 'Home'}}
          component={ContactsScreenStack}
        />

         <Drawer.Screen
           name="BrightnessScreenStack"
           options={{drawerLabel: 'Brightness'}}
           component={BrightnessScreenStack}
          />
        <Drawer.Screen
             name="FlashLightScreenStack"
             options={{drawerLabel: 'FlashLight'}}
             component={FlashLightScreenStack}
         />
        <Drawer.Screen
           name="IndexScreenStack"
           options={{drawerLabel: 'Index'}}
           component={IndexScreenStack}
        />

      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerInclude;
