import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import Navbar from './components/navbar';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Contact() {
	return (
		<View>
			<Navbar />
			<View style={contact.container}>
				<View style={contact.form}>
					<TextInput style={contact.inputFormData} placeholder={'Your name ...'}>

					</TextInput>
					<TextInput style={contact.inputFormData} placeholder={'Your Email ...'}>

					</TextInput>
					<TextInput style={contact.inputFormData} placeholder={'Enter Subject ...'}>

					</TextInput>
					<TextInput style={{...contact.inputFormData, ...contact.inputEmail}} multiline={true} placeholder={'Content ...'}>
						
					</TextInput>
					<TouchableOpacity style={contact.attachFile}>

					</TouchableOpacity>
					<TouchableOpacity style={contact.sendMail}>

					</TouchableOpacity>
				</View>
				<View style={contact.resume}>
					<TouchableOpacity style={contact.resumeBtn}>
						<Text style={contact.resumeText}>Download Resume</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

const contact = StyleSheet.create({
	container: {
		flex: 2,
		flexDirection: 'row',
		backgroundColor: '#ddd',
		marginHorizontal: 250,
		marginVertical: 100,
		padding: 50,
		borderRadius: 75,
	},
	form: {
		flex: 1,
		margin: 10,
		padding: 5,
		borderRightColor: '#aaa',
		borderRightWidth: 2,
	},
	inputFormData: {
		backgroundColor: '#eee',
		borderRadius: 20,
		padding: 10,
		fontSize: 15,
		margin: 5,
	},
	inputName: {
		backgroundColor: '#eee',
		borderRadius: 20,
		padding: 10,
		fontSize: 15,
	},
	inputEmail: {
		height: 100,
	},
	inputSubject: {

	},
	inputBody: {

	},
	resume: {
		flex: 1,
	},
	resumeBtn: {

	},

});
