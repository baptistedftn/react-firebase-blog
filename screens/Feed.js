import React, {useState} from 'react';
import Layout from '../components/global/Layout';
import Post from '../components/Post'
import { ScrollView } from 'react-native-gesture-handler';
import firebase from '../provider/Firebase'
import { snapshotToArray } from '../components/utils/snapshotToArray';
import value_db from '../value_db.json'

const [Posts, setPosts] = useState();

export default class Feed extends React.Component {
	/*constructor() {
		super()
	  	this.updatePosts()
	}
	componentDidMount() {
		console.log('Component mounted')
	}

	updatePosts() {
		var ref = firebase.database().ref('/');
		ref.once('value', function(snapshot) {
			setPosts(snapshotToArray(snapshot))
		});
		setPosts(value_db)
	}*/

	render() {
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
					{/*Posts.forEach(data => {
						console.log(data)
						return (
							<Post
								Title={data.Title.toString()}
								Text={data.Text.toString()}
								User={data.User.toString()}
								Subtitle={'À ' + data.Price.toString() + ' €'}
								userPic={data.Picture.toString()} />
						);
					})*/}
				</ScrollView>
			</Layout>
		);
	}
}
