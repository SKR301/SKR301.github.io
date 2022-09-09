import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import Navbar from './components/navbar';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Blogs() {
	return (
		<View>
			<Navbar />
			<Text>Blogs</Text>
		</View>
	);
}


const styles = StyleSheet.create({

});
