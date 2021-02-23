import React from 'react';
import { Share } from 'react-native';
import Layout from '../components/global/Layout';
import Post from '../components/Post'
import { ScrollView } from 'react-native-gesture-handler';
import * as firebase from 'firebase';

const firebaseConfig = {
	apiKey: "AIzaSyAj3hMXas3t7YIq7AY2VRBn4qei1tjjPqQ",
	authDomain: "cocodressing-guyane.firebaseapp.com",
	databaseURL: "https://cocodressing-guyane.firebaseio.com",
	projectId: "cocodressing-guyane",
	storageBucket: "cocodressing-guyane.appspot.com",
	messagingSenderId: "576072609810",
	appId: "1:576072609810:web:11bdc425767b0d00"
  };

if (firebase.apps.length === 0) {
	firebase.initializeApp(firebaseConfig);
}

function snapshotToArray(snapshot) {
	var returnArr = [];
	snapshot.forEach(function (childSnapshot) {
		var item = childSnapshot.val();
		item.key = childSnapshot.key;

		returnArr.push(item);
	});
	return returnArr;
}

const onShare = async (props) => {
	try {
		const result = await Share.share({
			message:'J\'ai trouvé cet article sur CocoDressing! \n' + props + '\n https://cocodressing.page.link/truc',
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
let Posts = [{"Title":"id","Picture":"https://picsum.photos/687","Price":38,"User":"King","UID":9779152268,"userPic":"https://picsum.photos/156","Text":"Consectetur aliquip pariatur tempor ullamco dolore mollit cillum sit elit nostrud ex. Velit pariatur pariatur enim proident laboris. Occaecat mollit dolore proident pariatur laboris fugiat enim cupidatat. Deserunt proident in exercitation velit dolor dolore sunt Lorem ullamco et reprehenderit ad."},{"Title":"do","Picture":"https://picsum.photos/326","Price":18,"User":"Lillie","UID":6321689791,"userPic":"https://picsum.photos/136","Text":"Eiusmod do veniam ullamco ipsum anim cupidatat pariatur ut eiusmod pariatur culpa id sint. Commodo cupidatat aliqua sint et adipisicing dolor ea elit duis do. Sit sint tempor incididunt aute fugiat consequat fugiat eu."},{"Title":"duis","Picture":"https://picsum.photos/338","Price":36,"User":"Marta","UID":3013262044,"userPic":"https://picsum.photos/177","Text":"Eiusmod consectetur qui nostrud eiusmod est ipsum non excepteur incididunt. Elit sunt mollit labore quis Lorem veniam. Deserunt officia aliqua voluptate culpa exercitation in reprehenderit Lorem qui ipsum fugiat consectetur excepteur cillum. Ullamco occaecat consectetur esse eu laboris officia id excepteur occaecat."},{"Title":"dolor","Picture":"https://picsum.photos/361","Price":26,"User":"Petty","UID":4901356544,"userPic":"https://picsum.photos/113","Text":"Nulla enim consectetur sint non pariatur duis eu duis qui duis ea veniam ex commodo. Nulla aliqua exercitation consequat consectetur cillum veniam fugiat ad ea deserunt in deserunt do dolor. Minim aliquip laborum ullamco proident fugiat dolore ipsum Lorem magna ullamco aliqua tempor. Consectetur quis ea do et esse nulla reprehenderit ipsum consequat tempor. Deserunt occaecat exercitation ex labore consectetur incididunt. Exercitation et laboris ad deserunt reprehenderit commodo ea id duis esse esse."},{"Title":"ex","Picture":"https://picsum.photos/778","Price":9,"User":"Valerie","UID":4267318506,"userPic":"https://picsum.photos/151","Text":"Cupidatat tempor magna elit aliqua consequat minim in ea. In laborum incididunt ea incididunt duis aliqua minim ipsum enim tempor laboris duis. Fugiat sit labore cupidatat consequat occaecat id velit Lorem amet officia magna."},{"Title":"Lorem","Picture":"https://picsum.photos/893","Price":16,"User":"Powell","UID":3136072438,"userPic":"https://picsum.photos/187","Text":"Fugiat culpa labore do consequat ullamco. Aliquip fugiat esse incididunt do enim do sunt qui commodo ea. Commodo et amet non tempor consequat in ullamco mollit ad. Aliqua fugiat voluptate do excepteur Lorem nulla commodo."},{"Title":"ex","Picture":"https://picsum.photos/443","Price":16,"User":"Ericka","UID":2696610776,"userPic":"https://picsum.photos/168","Text":"Aute velit exercitation id velit non fugiat culpa culpa dolor fugiat veniam fugiat anim. Culpa eiusmod enim do proident. Consectetur minim nostrud anim proident. Magna id incididunt labore aliquip pariatur nulla aute eu sit ea elit."},{"Title":"reprehenderit","Picture":"https://picsum.photos/741","Price":29,"User":"Moreno","UID":2350907820,"userPic":"https://picsum.photos/187","Text":"Aliqua amet cupidatat ad elit qui eu. Fugiat pariatur non eiusmod laboris quis laborum in qui ad excepteur officia exercitation laboris culpa. Exercitation magna et in do officia. Nisi ut in do elit excepteur nostrud esse sunt. Sunt sunt ullamco proident laborum ipsum in."},{"Title":"consequat","Picture":"https://picsum.photos/867","Price":5,"User":"Kristine","UID":1486741475,"userPic":"https://picsum.photos/157","Text":"Ut minim do dolor consectetur est dolor do voluptate consectetur proident. Ea aute duis non amet minim nostrud cupidatat ad et qui nisi ex esse. Amet tempor commodo proident mollit reprehenderit duis eiusmod voluptate culpa ipsum. Irure sit incididunt ullamco consectetur mollit non sunt laborum."},{"Title":"in","Picture":"https://picsum.photos/392","Price":28,"User":"Tamra","UID":2386364287,"userPic":"https://picsum.photos/163","Text":"Id nostrud sit dolor labore esse veniam ex esse irure veniam. Et dolore culpa anim exercitation. Exercitation eiusmod quis non non commodo incididunt do nisi sit. Commodo ex est irure ad ex sunt anim culpa sit exercitation esse enim consequat."}]
//firebase.database().ref('/article_group/article').on('value', function(snapshot) { Posts = snapshotToArray(snapshot) });

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
				 {Posts.map(Post => (
                    <>
						<Post
							Title={Post.Title}
							Text={Post.Text}
							User={Post.User}
							Subtitle={'À ' + Post.Price + ' €'}
							userPic={Post.userPic}
							Picture={Post.Picture}
						/>

                    </>
                ))}
			</ScrollView>
		</Layout>
	);
}
