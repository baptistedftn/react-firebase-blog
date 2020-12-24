import React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Layout from '../components/global/Layout';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export default function ({ navigation }) {
	return (
		<Layout navigation={navigation} title="Deuxième Écran" withBack>
			<Card>
				<Card.Title title="Titre du titre de la carte" subtitle="Sous-titre du titre de la carte" left={LeftContent} />
				<Card.Content>
					<Title>Titre de la Carte</Title>
					<Paragraph>Contenu de la Carte</Paragraph>
				</Card.Content>
				<Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
				<Card.Actions>
					<Button>Annuler</Button>
					<Button>Ok</Button>
				</Card.Actions>
			</Card>
		</Layout>
	);
}
