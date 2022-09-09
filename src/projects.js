import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native';
import Navbar from './components/navbar';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// update colors
// add project details as json 
export default function Projects() {
	return (
		<View>
			<Navbar />
			<View style={projects.body}>
				<ScrollView style={projects.projectListContainer}>
					{/* zoom or expand to show more desc and show snapshot on hover */}
					{/* click to open github link */}
					<View style={projects.projectCard}>
						<Text>
							<Text style={projects.projectName}>Name</Text>
							<Text style={projects.projectLastUpdate}>lastUpdatedOn</Text>
						</Text>
						<Text style={projects.projectDesc}>Desc</Text>
						<Text style={projects.projectTechBucket}>[Tech bucket]</Text>
					</View>
					<View style={projects.projectCard}>
						<Text>
							<Text style={projects.projectName}>Name</Text>
							<Text style={projects.projectLastUpdate}>lastUpdatedOn</Text>
						</Text>
						<Text style={projects.projectDesc}>Desc</Text>
						<Text style={projects.projectTechBucket}>[Tech bucket]</Text>
					</View>
					<View style={projects.projectCard}>
						<Text>
							<Text style={projects.projectName}>Name</Text>
							<Text style={projects.projectLastUpdate}>lastUpdatedOn</Text>
						</Text>
						<Text style={projects.projectDesc}>Desc</Text>
						<Text style={projects.projectTechBucket}>[Tech bucket]</Text>
					</View>
				</ScrollView>
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
		flex: 1,
		height: windowHeight - 150,
	},
	projectCard: {
		paddingHorizontal: 50,
		paddingVertical: 10,
		backgroundColor: '#eee',
		borderTopLeftRadius: 15,
		borderBottomLeftRadius: 15,
		marginBottom: 10,
	},
	projectName: {
		fontSize: 35,
		color: 'blue'
	},
	projectDesc: {
		fontSize: 20,
		color: 'cornflowerblue',
	},
	projectLastUpdate: {
		marginStart: 10,
		fontSize: 15,
		color: 'darkblue',
		fontStyle: 'italic'
	},
	projectTechBucket: {
		marginVertical: 15,
		fontSize: 15,
		color: 'blue',
	},
	projetctSnapshot: {
		flex: 1
	},
});
