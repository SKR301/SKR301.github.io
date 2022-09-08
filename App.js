import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './src/homepage';
import Blogs from './src/blogs';
import Contact from './src/contact';
import Projects from './src/projects';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/blogs' element={<Blogs />} />
        	</Routes>
		</BrowserRouter>
	);
}

const styles = StyleSheet.create({

});
