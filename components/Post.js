import React from 'react';
import { Avatar, Card, Title, Paragraph, Text, IconButton } from 'react-native-paper';
import { Share } from 'react-native';
import Colors from '../constants/colors';

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
					<IconButton icon='heart' color={Colors.primary} onPress={() => alert('Ajouté à vos favoris')}/>
					<Text>	|	</Text>
					<IconButton icon='share' color={Colors.primary} onPress={() => onShare(props.Title)}/>
					<Text>	|	</Text>
					<IconButton icon='cash' color={Colors.primary} onPress={() => alert('Ajouté à vos favoris')}/>
				</Card.Actions>
			</Card>
			
	);
}
