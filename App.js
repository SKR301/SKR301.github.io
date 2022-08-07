import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import Homepage from './src/homepage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function App() {
	return (
		<Homepage />
	);
}


// const styles = StyleSheet.create({

// });
