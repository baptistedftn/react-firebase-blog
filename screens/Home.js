import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import * as firebase from 'firebase';
import { Button, Snackbar } from 'react-native-paper';

import Layout from '../components/global/Layout';
import Text from '../components/utils/UbuntuFont';

export default function ({ navigation }) {
	const [HelloVisible, setHelloVisible] = useState(true);	
	const onDismissSnackBar = () => setHelloVisible(false);

	return (
		<Layout navigation={navigation} title="Accueil">
			<View style={styles.container}>
				<Snackbar 
				visible={HelloVisible}
				onDismiss={onDismissSnackBar}
				duration={3000}
				>
					Hello {firebase.auth().currentUser.displayName || firebase.auth().currentUser.email}
				</Snackbar>
				<Text>{"\n"}</Text>
				<Button icon="compass" mode="outlined" onPress={() => navigation.navigate('Feed')}>
					Explorer
				</Button>
				<Text>{"\n"}</Text>
				<Button icon="logout" mode="outlined" onPress={() => firebase.auth().signOut()}>
					Déconnexion
				</Button>
			</View>
		</Layout>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
  });
