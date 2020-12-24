import React from 'react';
import { View } from 'react-native';
import * as firebase from 'firebase';
import { Button, Divider } from 'react-native-paper';

import Layout from '../components/global/Layout';
import Text from '../components/utils/UbuntuFont';

export default function ({ navigation }) {
	return (
		<Layout navigation={navigation} title="Accueil">
			<View
				style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Text bold>Hello World</Text>
				<Text>This text using ubuntu font</Text>
				<Text>{"\n"}</Text>
				<Button icon="navigation" mode="outlined" onPress={() => navigation.navigate('SecondScreen')}>
					Aller au deuxième écran
				</Button>
				<Text>{"\n"}</Text>
				<Button icon="logout" mode="outlined" onPress={() => firebase.auth().signOut()}>
					Déconnexion
				</Button>
			</View>
		</Layout>
	);
}
