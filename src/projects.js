import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import Navbar from './components/navbar';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Projects() {
	return (
		<View>
			<Navbar />
			<View style={projects.body}>
				<View style={projects.projectListContainer}>
					<Text>Project List</Text>
				</View>
				<View style={projects.projetctSnapshot}>
					<Text>Project Snapshot</Text>
				</View>
			</View>
		</View>
	);
}

const projects = StyleSheet.create({
	body: {
		flexDirection: 'row',
		flex: 2,
		marginTop: 25,
	},
	projectListContainer: {
		flex: 1
	},
	projetctSnapshot: {
		flex: 1
	},
});
