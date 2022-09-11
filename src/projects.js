import { useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native';
import Navbar from './components/navbar';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Projects() {

// update colors
// add project details as json 
	const [projectDet, setProjectDet] = useState([{
		name: 'Name0',
		desc: 'Desc0',
		lastUpdate: 'lastUpdate0',
		techBucket: 'techBucket0',
		author: 'Author0',
		contributor: 'Contributor0',
		extraContributor: 'x0',
		githubLink: 'www.github.com/project0',
	},{
		name: 'Name1',
		desc: 'Desc1',
		lastUpdate: 'lastUpdate1',
		techBucket: 'techBucket1',
		author: 'Author1',
		contributor: 'Contributor1',
		extraContributor: 'x1',
		githubLink: 'www.github.com/project0',
	},{
		name: 'Name2',
		desc: 'Desc2',
		lastUpdate: 'lastUpdate2',
		techBucket: 'techBucket2',
		author: 'Author2',
		contributor: 'Contributor2',
		extraContributor: 'x2',
		githubLink: 'www.github.com/project0',
	},])

	return (
		<View>
			<Navbar />
			<View style={projects.body}>
				<ScrollView style={projects.projectListContainer}>
					{/* expand to show more desc and show snapshot on hover */}
					{/* click to open project link */}
					<View style={projects.projectCard}>
						<Text>
							<Text style={projects.projectName}>Name</Text>
							<Text style={projects.projectLastUpdate}>lastUpdatedOn</Text>
						</Text>
						<Text style={projects.projectDesc}>Desc</Text>
						<Text style={projects.projectTechBucket}>[Tech bucket]</Text>
						<Text style={projects.contributors}>Author|Contributor + x</Text>
					</View>
					<View style={projects.projectCard}>
						<Text>
							<Text style={projects.projectName}>Name</Text>
							<Text style={projects.projectLastUpdate}>lastUpdatedOn</Text>
						</Text>
						<Text style={projects.projectDesc}>Desc</Text>
						<Text style={projects.projectTechBucket}>[Tech bucket]</Text>
						<Text style={projects.contributors}>Author|Contributor + x</Text>
					</View>
					<View style={projects.projectCard}>
						<Text>
							<Text style={projects.projectName}>Name</Text>
							<Text style={projects.projectLastUpdate}>lastUpdatedOn</Text>
						</Text>
						<Text style={projects.projectDesc}>Desc</Text>
						<Text style={projects.projectTechBucket}>[Tech bucket]</Text>
						<Text style={projects.contributors}>Author|Contributor + x</Text>
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
		flex: 1,
		paddingHorizontal: 50,
		paddingVertical: 25,
		backgroundColor: '#eee',
		borderTopLeftRadius: 15,
		borderBottomLeftRadius: 15,
		marginBottom: 10,
		marginLeft: 25,
	},
	projectName: {
		fontSize: 30,
		color: 'blue'
	},
	projectDesc: {
		fontSize: 20,
		marginLeft: 100,
		color: 'cornflowerblue',
	},
	projectLastUpdate: {
		textAlign: 'right',
		fontSize: 15,
		marginLeft: 10,
		color: 'darkblue',
		fontStyle: 'italic',
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
