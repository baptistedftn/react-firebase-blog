import React from 'react';
import { Share } from 'react-native';
import Layout from '../components/global/Layout';
import Post from '../components/Post'
import { ScrollView } from 'react-native-gesture-handler';

	const onShare = async (props) => {
		try {
		  const result = await Share.share({
			message:
			  'J\'ai trouvé cet article sur CocoDressing! \n' + props + '\n https://cocodressing.page.link/truc',
		  });
		  if (result.action === Share.sharedAction) {
			if (result.activityType) {
			  // shared with activity type of result.activityType
			} else {
			  // shared
			}
		  } else if (result.action === Share.dismissedAction) {
			// dismissed
		  }
		} catch (error) {
		  alert(error.message);
		}
	}

export default function ({ navigation }) {
	return (
		<Layout navigation={navigation} >
			<ScrollView>
				<Post
					Title='Truc Machin - 5€'
					Text='Très bon état et blabla...'
					User='Utilisateur'
					Subtitle='Subtitle'
					userPic='https://picsum.photos/30'
					Picture='https://picsum.photos/700'
				/>
				<Post
					Title='Truc Bidule - 10€'
					Text='Très mauvais état et blabla...'
					User='Utilisateur'
					Subtitle='Subtitle'
					userPic='https://picsum.photos/31'
					Picture='https://picsum.photos/300'
				/>
				<Post
					Title='Machin Truc - 11,2€'
					Text='Vivant'
					User="Nom d'utilisateur"
					Subtitle='Subtitle'
					userPic='https://picsum.photos/32'
					Picture='https://picsum.photos/702'
				/>
			</ScrollView>
		</Layout>
	);
}
