import React, { useContext } from 'react';
import * as firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthContext } from '../provider/AuthProvider';

// Main
import Home from '../screens/Home';
import Feed from '../screens/Feed';

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
			<AuthStack.Screen name="Login" component={Login} />
			<AuthStack.Screen name="Register" component={Register} />
			<AuthStack.Screen name="ForgetPassword" component={ForgetPassword} />
		</AuthStack.Navigator>
	);
};

const MainStack = createStackNavigator();

const Main = () => {
	return (
		<MainStack.Navigator
			screenOptions={{
				headerMode: 'none',
				headerShown: false,
			}}
		>
			<MainStack.Screen name="Home" component={Home} />
			<MainStack.Screen name="Feed" component={Feed} />
		</MainStack.Navigator>
	);
};

export default () => {
	const auth = useContext(AuthContext);
	const user = auth.user;
	return (
		<NavigationContainer>
			{user == null && <Loading />}
			{user == false && <Auth />}
			{user == true && <Main />}
		</NavigationContainer>
	);
};
