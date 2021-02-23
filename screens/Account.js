import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as firebase from 'firebase';
import { Button } from 'react-native-paper';
import { Image } from 'react-native';
import { Title } from 'react-native-paper';

import Layout from '../components/global/Layout';
import Text from '../components/utils/UbuntuFont';
import Colors from '../constants/colors';

export default function ({ navigation }) {
	return (
		<Layout navigation={navigation} title="Mon Compte">
			<View style={styles.container}>
				<Text>{"\n"}</Text>
				<Title>Bonjour {firebase.auth().currentUser.displayName || firebase.auth().currentUser.email}</Title>
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
	},
  });
