import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import Navbar from './components/navbar';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Blogs() {
	return (
		<View>
			<Navbar />
			<View style={blogs.body}>
				<Text style={blogs.content}>Work under progress!!!</Text>
			</View>
		</View>
	);
}

const blogs = StyleSheet.create({
	body: {
		marginVertical: 100,
		justifyContent: 'center',
		alignContent: 'center',
	},
	content: {
		textAlign: 'center',
		backgroundColor: 'red',
		color: '#fff',
		padding: 20,
		fontSize: 20
	},
});
