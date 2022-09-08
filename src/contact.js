import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import Navbar from './components/navbar';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Contact() {
	return (
		<View>
			<Navbar />
			<Text>Contact</Text>
		</View>
	);
}


const styles = StyleSheet.create({

});
