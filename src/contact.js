import { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { Navigate, useNavigate } from 'react-router-dom';
import Navbar from './components/navbar';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Contact() {
	const [senderName, setSenderName] = useState('');
	const [message, setMessage] = useState('');
	const navigate = useNavigate();
	
	const nameChangeHandler = (event) => {
		setSenderName(event.target.value);
	}

	const messageChangeHandler = (event) => {
		setMessage(event.target.value);
	}

	const sendOnClickHander = () => {
		if(senderName == ""){
			alert('Please enter your name.');
		} else if(message == ""){
			alert('Cannot send an empty mail.');
		} else {
			window.location.href = "mailto:'"+{senderName}+"'?&body='"+{message}+"'";
		}
	}

	return (
		<View>
			<Navbar />
			<View style={contact.container}>
				<View style={contact.form}>
					<TextInput style={contact.inputFormData} placeholder={'Name*'} onChange={nameChangeHandler}>

					</TextInput>
					<TextInput style={[contact.inputFormData, contact.inputBody]} multiline={true} placeholder={'Message*'} onChange={messageChangeHandler}>
						
					</TextInput>
					<Text>*Having issues, mailto:<Text style={contact.mailId}><u><i> chunnu.bihat@gmail.com</i></u></Text></Text>
					<TouchableOpacity style={contact.sendMail} onPress={sendOnClickHander}>
						{/* TODO: make the send button work */}
						<Text style={contact.sendMailText}>Send</Text>
					</TouchableOpacity>
				</View>
				<View style={contact.resume}>
					{/* TODO: remove resume header footer */}
				<TouchableOpacity style={contact.resumeBtn} onPress={()=>{window.open('https://drive.google.com/uc?export=download&id=14R5-094MejTRehPRjEIVuMMfjM2XcqAA','_blank')}}>
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
		backgroundColor: '#fff',
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
	mailId: {
		color: 'blue'
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
