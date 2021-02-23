import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
	ScrollView,
	TouchableOpacity,
	View,
	KeyboardAvoidingView,
	ActivityIndicator,
	TextInput,
	Image,
	StyleSheet,
} from 'react-native';
import * as firebase from 'firebase';
import Toast from 'react-native-toast-message'

import Layout from '../../components/global/Layout';

import Text from '../../components/utils/UbuntuFont';
import Colors from '../../constants/colors';

export default function ({ navigation }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);

	async function login() {
		setLoading(true);
		await firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.catch(function (error) {
				var errorCode = error.code;
				var errorMessage = error.message;
				// Traiter le message et l'interpreter dans modale
				setLoading(false);
				// [START_EXCLUDE]
				if (errorCode === 'auth/wrong-password') {
					Toast.show({
						type: 'error',
						position: 'bottom',
						text1: 'Oups 🤨',
						text2: 'Mot de passe incorrect',
						visibilityTime: 2000,
						autoHide: true,
						bottomOffset: 60,
					  })
				} else if (errorCode === 'auth/user-disabled') {
					Toast.show({
						type: 'error',
						position: 'bottom',
						text1: 'Compte bloqué 🚫',
						text2: 'Si vous pensez qu\'il s\'agit d\'une erreur, veuillez nous contacter',
						visibilityTime: 2000,
						autoHide: true,
						bottomOffset: 60,
					  })
				} else if (errorCode === 'auth/user-not-found') {
					Toast.show({
						type: 'error',
						position: 'bottom',
						text1: 'Oups 🧐',
						text2: 'Aucun compte n\'a été trouvé à cet adresse mail',
						visibilityTime: 2000,
						autoHide: true,
						bottomOffset: 60,
					  })
				} else if (errorCode === 'auth/invalid-email') {
					Toast.show({
						type: 'error',
						position: 'bottom',
						text1: 'Oups 😕',
						text2: 'Ça ne ressemble pas à une adresse mail...😶',
						visibilityTime: 2000,
						autoHide: true,
						bottomOffset: 60,
					  })
				} else if (errorCode === 'auth/too-many-requests') {
					Toast.show({
						type: 'error',
						position: 'bottom',
						text1: 'STOP ! Attendez un peu... 😶',
						text2: 'Vous avez entré trop de fois de mauvais mot de passe',
						visibilityTime: 2000,
						autoHide: true,
						bottomOffset: 60,
					  })
				} else {
					alert(errorMessage);
				}
				console.log(errorCode);
			});
	}
	return (
		<KeyboardAvoidingView behavior="height" enabled style={{ flex: 1 }}>
			<StatusBar style="auto" translucent backgroundColor={Colors.headerBackground} />
			<Layout navigation={navigation}>
				<ScrollView
					contentContainerStyle={{
						flexGrow: 1,
					}}
				>
					<View
						style={{
							flex: 1,
							justifyContent: 'center',
							alignItems: 'center',
							backgroundColor: Colors.headerBackground,
						}}
					>
						<Image
							resizeMode="contain"
							style={{
								height: 220,
								width: 220,
							}}
							source={require('../../assets/login.png')}
						/>
					</View>
					<View
						style={{
							flex: 3,
							paddingHorizontal: 20,
							paddingBottom: 20,
							backgroundColor: Colors.background,
						}}
					>
						<Text
							bold
							style={{
								fontSize: 24,
								color: Colors.black,
								alignSelf: 'center',
								padding: 30,
							}}
						>
							Login
						</Text>
						<Text style={{ color: Colors.black, fontSize: 16 }}>Email</Text>
						<View style={styles.textInputContainer}>
							<TextInput
								style={styles.textInput}
								placeholder="Entrez votre adresse email"
								placeholderStyle={{
									fontFamily: 'Ubuntu_400Regular',
								}}
								value={email}
								autoCapitalize="none"
								autoCompleteType="email"
								autoCorrect={true}
								keyboardType="email-address"
								onChangeText={(text) => setEmail(text)}
							/>
						</View>
						<Text style={{ marginTop: 15, color: Colors.black, fontSize: 16 }}>
							Mot de passe
						</Text>
						<View style={styles.textInputContainer}>
							<TextInput
								style={styles.textInput}
								placeholder="Entrez votre mot de passe"
								placeholderStyle={{
									fontFamily: 'Ubuntu_400Regular',
								}}
								value={password}
								autoCapitalize="none"
								autoCompleteType="password"
								autoCorrect={false}
								secureTextEntry={true}
								onChangeText={(text) => setPassword(text)}
							/>
						</View>
						<TouchableOpacity
							onPress={() => {
								login();
							}}
							disabled={loading}
							style={{
								flexDirection: 'row',
								marginTop: 20,
							}}
						>
							<View style={styles.button}>
								{loading ? (
									<ActivityIndicator color="#fff" />
								) : (
									<Text bold style={{ fontSize: 16, color: 'white' }}>
										Continuer
									</Text>
								)}
							</View>
						</TouchableOpacity>

						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								marginTop: 15,
								justifyContent: 'center',
							}}
						>
							<Text
								style={{
									color: Colors.black,
								}}
							>
								Pas de compte ?
							</Text>
							<TouchableOpacity
								onPress={() => {
									navigation.navigate('Register');
								}}
							>
								<Text
									bold
									style={{
										marginLeft: 5,
										color: Colors.black,
									}}
								>
									Créez en un ici
								</Text>
							</TouchableOpacity>
						</View>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								marginTop: 15,
								justifyContent: 'center',
							}}
						>
							<TouchableOpacity
								onPress={() => {
									navigation.navigate('ForgetPassword');
								}}
							>
								<Text
									bold
									style={{
										color: Colors.black,
									}}
								>
									Mot de passe oublié ?
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>
			</Layout>
		</KeyboardAvoidingView>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
	},
	textInputContainer: {
		marginTop: 15,
		backgroundColor: '#FFF',
		borderColor: '#d8d8d8',
		borderWidth: 1,
		borderRadius: 8,
		flexDirection: 'row',
	},
	textInput: {
		padding: 10,
		paddingHorizontal: 20,
		textAlign: 'left',
		color: 'black',
		flex: 1,
		fontFamily: 'Ubuntu_400Regular',
	},
	button: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 15,
		backgroundColor: Colors.primary,
		borderRadius: 8,
	},
});
