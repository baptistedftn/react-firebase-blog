import React from 'react';
import { Avatar, Card, Title, Paragraph, Text, IconButton } from 'react-native-paper';
import { Share } from 'react-native';
import Colors from '../constants/colors';
import Toast from 'react-native-toast-message'

const onShare = async props => {
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

const onReport = props => {
	console.log('Signalement', props)
	Toast.show({
		type: 'info',
		position: 'bottom',
		text1: 'Signalement',
		text2: 'Merci d\'avoir signalé cet article',
		visibilityTime: 1000,
		autoHide: true,
		topOffset: 100,
		bottomOffset: 60,
	  })
}

const onFavorite = props => {
	console.log('Ajouté aux favoris', props)
	Toast.show({
		leadingIcon: require('../assets/icons/heart.png'),
		trailingIcon: require('../assets/icons/heart.png'),
		type: 'success',
		position: 'bottom',
		text1: 'Favoris',
		text2: 'Article ajouté aux favoris',
		visibilityTime: 1000,
		autoHide: true,
		topOffset: 100,
		bottomOffset: 60,
	  })
}

const onBuy = props => {
	console.log('Acheté')
}

export default function (props) {
    const LeftContent = () => <Avatar.Image size={40} source={{uri: props.userPic}} />
	return (
			<Card>
				<Card.Title title={props.User} subtitle={props.Subtitle} left={LeftContent} />
				<Card.Content>
					<Title>{props.Title}</Title>
					<Paragraph>{props.Text}</Paragraph>
				</Card.Content>
				<Card.Cover source={{ uri: props.Picture }} />
				<Card.Actions>
					<IconButton icon='heart' color={Colors.primary} onPress={() => onFavorite(props)}/>
					<Text>	|	</Text>
					<IconButton icon='share' color={Colors.primary} onPress={() => onShare(props)}/>
					<Text>	|	</Text>
					<IconButton icon='cash' color={Colors.primary} onPress={() => onBuy()}/>
					<Text>	|	</Text>
					<IconButton icon='flag' color={Colors.primary} onPress={() => onReport(props)}/>
				</Card.Actions>
			</Card>
			
	);
}
