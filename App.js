import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Home from "./src/pages/Home";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import { NavigationContainer } from '@react-navigation/native';
import Contact from "./src/pages/Contact";
import Icon from "react-native-dynamic-vector-icons";
import Test1 from "./src/pages/Test1";
import Test2 from "./src/pages/Test2";
import Test3 from "./src/pages/Test3";

const Tabs = AnimatedTabBarNavigator();

export default () => (
    <NavigationContainer>

        <Tabs.Navigator
            // default configuration from React Navigation
            tabBarOptions={{
                activeTintColor: '#FFFFFF',
                inactiveTintColor: '#000000',
                activeBackgroundColor: '#FFCF64'
            }}>

            <Tabs.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ focused, color, size }) => (
                    <Icon
                        name="home"
                        type="AntDesign"
                        size={size ? size : 24}
                        color={focused ? "#FFFFFF" : "#222222"}
                        focused={focused}
                    />
                )
            }}/>
            <Tabs.Screen name="Contact" component={Contact} options={{
                             tabBarIcon: ({ focused, color, size }) => (
                                 <Icon
                                     name="github"
                                     type="AntDesign"
                                     size={size ? size : 24}
                                     color={focused ? "#FFFFFF" : "#222222"}
                                     focused={focused}
                                 />
                             )
                         }}/>
            <Tabs.Screen name="Test1" component={Test1} options={{
                             tabBarIcon: ({ focused, color, size }) => (
                                 <Icon
                                     name="github"
                                     type="AntDesign"
                                     size={size ? size : 24}
                                     color={focused ? "#FFFFFF" : "#222222"}
                                     focused={focused}
                                 />
                             )
                         }}/>
            <Tabs.Screen name="Test2" component={Test2} options={{
                             tabBarIcon: ({ focused, color, size }) => (
                                 <Icon
                                     name="github"
                                     type="AntDesign"
                                     size={size ? size : 24}
                                     color={focused ? "#FFFFFF" : "#222222"}
                                     focused={focused}
                                 />
                             )
                         }}/>
            <Tabs.Screen name="Test3" component={Test3} options={{
                             tabBarIcon: ({ focused, color, size }) => (
                                 <Icon
                                     name="github"
                                     type="AntDesign"
                                     size={size ? size : 24}
                                     color={focused ? "#FFFFFF" : "#222222"}
                                     focused={focused}
                                 />
                             )
                         }}/>



        </Tabs.Navigator>
    </NavigationContainer>
)