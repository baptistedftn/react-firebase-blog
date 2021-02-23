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

	async function register() {
		setLoading(true);
		await firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.catch(function (error) {
				var errorCode = error.code;
				var errorMessage = error.message;
				setLoading(false);
				if (errorCode == 'auth/weak-password') {
					Toast.show({
						type: 'error',
						position: 'bottom',
						text1: 'Mot de passe trop court 🙄',
						text2: 'Ayez plus d\'imagination...',
						visibilityTime: 2000,
						autoHide: true,
						bottomOffset: 60,
					})
				} else if (errorCode == 'auth/email-already-in-use') {
					Toast.show({
						type: 'error',
						position: 'bottom',
						text1: 'Vous êtes sûr d\'être au bon endroit ?',
						text2: '1 adresse mail = 1 compte',
						visibilityTime: 2000,
						autoHide: true,
						bottomOffset: 60,
					})
				} else if (errorCode === 'auth/invalid-email') {
					Toast.show({
						type: 'error',
						position: 'bottom',
						text1: 'Oups 😕',
						text2: 'Ça ne ressemble pas à une adresse mail...',
						visibilityTime: 2000,
						autoHide: true,
						bottomOffset: 60,
					  })
				} else {
					alert(errorMessage);
				}
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
							source={require('../../assets/register.png')}
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
							Créer un compte
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
								autoCompleteType="off"
								autoCorrect={false}
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
								autoCompleteType="off"
								autoCorrect={false}
								secureTextEntry={true}
								onChangeText={(text) => setPassword(text)}
							/>
						</View>

						<TouchableOpacity
							onPress={() => {
								register();
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
										Créer votre compte
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
								Vous en avez déja un?
							</Text>
							<TouchableOpacity
								onPress={() => {
									navigation.navigate('Login');
								}}
							>
								<Text
									bold
									style={{
										marginLeft: 5,
										color: Colors.black,
									}}
								>
									Connectez vous ici
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
