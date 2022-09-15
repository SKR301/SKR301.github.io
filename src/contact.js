import { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { Navigate, useNavigate } from 'react-router-dom';
import Navbar from './components/navbar';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Contact() {
	const [senderName, setSenderName] = useState('');
	const [message, setMessage] = useState('');
	
	return (
		<View>
			<Navbar />
			<View style={contact.container}>
				<View style={contact.form}>
					<TextInput style={contact.inputFormData} placeholder={'Name ...'}>

					</TextInput>
					<TextInput style={[contact.inputFormData, contact.inputBody]} multiline={true} placeholder={'Message ...'}>
						
					</TextInput>
					{/* send actual data on click  */}
					<TouchableOpacity style={contact.sendMail} onPress={()=>{window.location.href = "mailto:email@example.com?subject='Hello from Abstract!'&body='Just popped in to say hello'";}}>
						<Text style={contact.sendMailText}>Send</Text>
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
		marginHorizontal: 350,
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
		padding: 20,
		fontSize: 15,
		margin: 5,	
	},
	inputName: {
	},
	inputEmail: {
	},
	inputSubject: {

	},
	inputBody: {
		height: 150,
	},
	sendMail: {
		backgroundColor: '#555',
		borderRadius: 15,
		textAlign: 'center',
		width: 75,
		padding: 10,
		alignSelf: 'flex-end'
	},
	sendMailText: {
		fontSize:20,
		color: '#eee',
	},
	resume: {
		flex: 1,
		justifyContent: 'center'
	},
	resumeBtn: {
		backgroundColor: '#999',
		borderRadius: 15,
		textAlign: 'center',
		padding: 20,
		margin: 125,
	},
	resumeText: {
		fontSize:20,
		color: '#000',
	}
});
