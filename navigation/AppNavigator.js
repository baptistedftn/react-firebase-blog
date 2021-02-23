import React, { useContext } from 'react';
import * as firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import { AuthContext } from '../provider/AuthProvider';

// Main
import Home from '../screens/Home';
import Feed from '../screens/Feed';
import Welcome from '../screens/Welcome'
import Account from '../screens/Account'

// Auth screens
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import ForgetPassword from '../screens/auth/ForgetPassword';

import Loading from '../screens/utils/Loading';

const firebaseConfig = {
	apiKey: "AIzaSyAj3hMXas3t7YIq7AY2VRBn4qei1tjjPqQ",
	authDomain: "cocodressing-guyane.firebaseapp.com",
	databaseURL: "https://cocodressing-guyane.firebaseio.com",
	projectId: "cocodressing-guyane",
	storageBucket: "cocodressing-guyane.appspot.com",
	messagingSenderId: "576072609810",
	appId: "1:576072609810:web:11bdc425767b0d00"
  };

if (firebase.apps.length === 0) {
	firebase.initializeApp(firebaseConfig);
}

const AuthStack = createStackNavigator();

const Auth = () => {
	return (
		<AuthStack.Navigator
			screenOptions={{
				headerMode: 'none',
				headerShown: false,
			}}
		>
      <AuthStack.Screen name="Welcome" component={Welcome} />
			<AuthStack.Screen name="Login" component={Login} />
			<AuthStack.Screen name="Register" component={Register} />
			<AuthStack.Screen name="ForgetPassword" component={ForgetPassword} />
		</AuthStack.Navigator>
	);
};

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#e91e63'
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Accueil',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Découvrir',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="compass" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: 'Mon Compte',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default () => {
	const auth = useContext(AuthContext);
	const user = auth.user;
	return (
		<NavigationContainer>
			{user == null && <Loading />}
			{user == false && <Auth />}
			{user == true && <MainNavigator />}
		</NavigationContainer>
	);
};
