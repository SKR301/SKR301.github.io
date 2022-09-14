import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import Navbar from './components/navbar';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Contact() {
	return (
		<View>
			<Navbar />
			<View style={contact.container}>
				<View style={contact.form}>
					<View style={contact.inputName}>

					</View>
					<View style={contact.inputEmail}>

					</View>
					<View style={contact.inputSubject}>

					</View>
					<View style={contact.inputBody}>

					</View>
					<TouchableOpacity style={contact.attachFile}>

					</TouchableOpacity>
					<TouchableOpacity style={contact.sendMail}>

					</TouchableOpacity>
				</View>
				<View style={contact.resume}>
					<TouchableOpacity style={contact.resumeBtn}>

					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

const contact = StyleSheet.create({

});
