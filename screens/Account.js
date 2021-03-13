import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import firebase from '../provider/Firebase'
import { Button, IconButton, TextInput, Title } from 'react-native-paper';
import { Image } from 'react-native';

import Layout from '../components/global/Layout';
import Text from '../components/utils/UbuntuFont';
import Colors from '../constants/colors';
import { ScrollView } from 'react-native-gesture-handler';

export default function ({ navigation }) {
	const [Username, setUsername] = useState(firebase.auth().currentUser.displayName);
	
	const onChangeUsername = () => {
		console.log(Username)
		var user = firebase.auth().currentUser;
		user.updateProfile({
		displayName: Username,
		}).then(function() {
		// Update successful.
		}).catch(function(error) {
		// An error happened.
		});
	}
	return (
		<Layout navigation={navigation} title="Mon Compte">
			<View style={styles.container}>
				<ScrollView>
					<Text>{"\n"}</Text>
					<Title>Bonjour {firebase.auth().currentUser.displayName || firebase.auth().currentUser.email}</Title>
					<Text>{"\n"}</Text>
					<Text>Changer votre nom d'utilisateur (pseudonyme)</Text>
					<View style={{flexDirection:'row', alignItems:'center'}}>
						<TextInput
							style={{width:70+'%'}}
							label="Nom d'utilisateur"
							mode='outlined'
							onChangeText={text => setUsername(text)}
							value={Username}
						/>
						<IconButton icon="check"
							color={Colors.primary}
							size={30}
							animated
							onPress={() => onChangeUsername()}
						/>
					</View>
					<Text>{"\n"}</Text>
					<Button color={Colors.black} icon="logout" mode="outlined" onPress={() => firebase.auth().signOut()}>
						Déconnexion
					</Button>
				</ScrollView>
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
