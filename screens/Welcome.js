import React from 'react';
import PaperOnboarding, {PaperOnboardingItemType} from "@gorhom/paper-onboarding";
import { Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Text_1 = 'Bienvenue sur CocoDressing ! \n \n (faite défiler 👉)';
const Text_2 = 'Avec CocoDressing, on revend, on achète, on fait des économies et puis on est éco responsable aussi.';

const data = [
  {
    title: 'Hello 👋',
    description: Text_1,
    backgroundColor: '#698FB8',
    image: <Image source={require('../assets/coco.png')} />
  },
  {
    title: '💶 🌎',
    description: Text_2,
    backgroundColor: '#6CB2B8',
  },
  {
    title: '1 📲',
    description: 'Créer votre compte\n\nRien de plus simple, en quelques clics et gratuitement',
    backgroundColor: '#9D8FBF',
  },
  {
    title: '2 📸',
    description: 'Photographier\n\nUne jolie photo donne toujours plus envie d\'acheter. Alors on vous donne quelques tips pour y arriver',
    backgroundColor: '#BFD8BD',
  },
  {
    title: '3 ✉️ 📦',
    description: 'Tout se passe entre particulier, soit par envoi ou remise en mains propres.',
    backgroundColor: '#54A065',
  },
  {
    title: 'C\'est parti !',
    description: 'Cliquez en haut ↗️',
    backgroundColor: '#EDBBA0',
  },
];

export default function Welcome({navigation}) {
  const handleOnClosePress = () => navigation.navigate('Login');
  return (
    <>
    <PaperOnboarding
      closeButtonText="S'inscrire / Se connecter"
      data={data}
      onCloseButtonPress={handleOnClosePress} />
		<StatusBar style="auto" translucent/>
    </>
  );
}
