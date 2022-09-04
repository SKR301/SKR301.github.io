import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import Homepage from './src/homepage';
import Blogs from './src/blogs';
import Contact from './src/contact';
import Projects from './src/projects';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function App() {
	return (
		// <Homepage />
		// <Blogs />
		// <Projects />
		<Contact />
		
	);
}


const styles = StyleSheet.create({

});
