import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();
function TabNavigator(){
    return(
        <Tab.Navigator>
            <Tab.Screen
            name='Contacts'
            component={ContactsScreen}
            options={{
            tabBarLabel: 'Contacts',
            }}/>
            <Tab.Screen
            name='Gallery'
            component={GalleryScreen}
            options={{
            tabBarLabel: 'Gallery',
            }}/>
            <Tab.Screen
            name='Setting'
            component={SettingScreen}
            options={{
            tabBarLabel: 'Setting',
             }}/>
        </Tab.Navigator>
    )
}

export default TabNavigator;