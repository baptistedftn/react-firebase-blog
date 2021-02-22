import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as firebase from 'firebase';
import { Button } from 'react-native-paper';
import { Image } from 'react-native';

import Layout from '../components/global/Layout';
import Text from '../components/utils/UbuntuFont';
import Colors from '../constants/colors';

export default function ({ navigation }) {
	return (
		<Layout navigation={navigation} title="CocoDressing &reg;">
			<View style={styles.container}>
				<Image source={require('../assets/coco.png')} />
				<Text>Hello {firebase.auth().currentUser.displayName || firebase.auth().currentUser.email}</Text>
				<Text>{"\n"}</Text>
				<Button color={Colors.black} icon="compass" mode="outlined" onPress={() => navigation.navigate('Feed')}>
					Découvrir des articles
				</Button>
				<Text>{"\n"}</Text>
				<Button color={Colors.black} icon="logout" mode="outlined" onPress={() => firebase.auth().signOut()}>
					Déconnexion
				</Button>
			</View>
		</Layout>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.background,
		color: Colors.primary,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
  });
