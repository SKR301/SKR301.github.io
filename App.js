import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import colors from './assets/colors';
import blob1 from './assets/blob1.png'; 
import blob2 from './assets/blob2.png'; 
import blob3 from './assets/blob3.png'; 

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function App() {
	return (
		<View style={styles.body}>
			<View style={styles.topBar}>
				<View><Text>Projects</Text></View>
				<View><Text>Resume</Text></View>
				<View><Text>Contact me</Text></View>
			</View>

			<Image source={blob2} style={[styles.blob, styles.blob2]} /> 
			<Image source={blob3} style={[styles.blob, styles.blob3]} /> 
			
			<View style={styles.homeTextsContainer}>
				<Text>&lt;Name&gt;<Text>Saurav KumaR</Text>&lt;Name&gt;</Text>
				<Text>&lt;Profession&gt;<Text>Programming</Text>&lt;Profession&gt;</Text>
			</View>
		</View>
	);
}


const styles = StyleSheet.create({
	body: {
		flex: 1,
		backgroundColor: colors.secondary,
	},
	blob: {
		resizeMode: 'contain',
		height: windowHeight,
		width: windowWidth,
		alignSelf: 'center',
		flexDirection: 'row',
	},
	blob2: {
		opacity: 0.5,
		// paddingStart: -windowWidth*0.2
	},
	blob3: {
		opacity: 0.75,
		marginTop: -windowHeight,
		// paddingEnd: -windowWidth*0.2
	},
	topBar: {
		backgroundColor: colors.primaryDark,
		flexDirection: 'row',
		height: windowHeight*0.05,
	},
	topBarItem: {
		flex: 1,
		
	},
	topBarItemText: {
	},
	homeTextsContainer: {
		marginTop: -windowHeight*0.15,
		alignSelf: 'center'
	}
});
