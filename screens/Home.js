import React from 'react';
import { View, StyleSheet } from 'react-native';
import firebase from '../provider/Firebase'
import { Button } from 'react-native-paper';
import { Image } from 'react-native';

import Layout from '../components/global/Layout';
import Text from '../components/utils/UbuntuFont';
import Colors from '../constants/colors';

export default function ({ navigation }) {
	return (
		<Layout navigation={navigation} title="CocoDressing &reg;">
			<View style={styles.container}>
				<Image source={require('../assets/coco_dark.png')} />
				<Text>{"\n"}</Text>
				<Text>Hello {firebase.auth().currentUser.displayName || firebase.auth().currentUser.email}</Text>
				<Text>{"\n"}</Text>
				<Button color={Colors.black} icon="compass" mode="outlined" onPress={() => navigation.navigate('Feed')}>
					Découvrir des articles
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
