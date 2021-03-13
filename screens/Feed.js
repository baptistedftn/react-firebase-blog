import React, {useState} from 'react';
import Layout from '../components/global/Layout';
import Post from '../components/Post'
import { ScrollView } from 'react-native-gesture-handler';
import firebase from '../provider/Firebase'
import { snapshotToArray } from '../components/utils/snapshotToArray';
import value_db from '../value_db.json'

// const [Posts, setPosts] = useState();

export default function Feed({navigation}) {
	return (
		<Layout >
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
					Title='Truc Machin - 10€'
					Text='Blabla...'
					User='Utilisateur'
					Subtitle='Subtitle'
					userPic='https://picsum.photos/31'
					Picture='https://picsum.photos/701'
				/>
			</ScrollView>
		</Layout>
	);
}

