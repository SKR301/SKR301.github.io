import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native';
import { Link, Navigate } from "react-router-dom";
import Navbar from './components/navbar';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Projects() {

// update colors
// add project details as json 
	const [projectDet, setProjectDet] = useState([{
		name: 'Name0',
		lastUpdatedOn: 'lastUpdate0',
		desc: 'Desc0',
		techBucket: 'techBucket0',
		author: 'Author0',
		contributor: 'Contributor0',
		extraContributor: 'x0',
		githubLink: 'www.github.com/project0',
	},{
		name: 'Name1',
		lastUpdatedOn: 'lastUpdate1',
		desc: 'Desc1',
		techBucket: 'techBucket1',
		author: 'Author1',
		contributor: 'Contributor1',
		extraContributor: 'x1',
		githubLink: 'www.github.com/project0',
	},{
		name: 'Name2',
		lastUpdatedOn: 'lastUpdate2',
		desc: 'Desc2',
		techBucket: 'techBucket2',
		author: 'Author2',
		contributor: 'Contributor2',
		extraContributor: 'x2',
		githubLink: 'www.github.com/project0',
	},]);

	useEffect(()=>{

	},[projectDet])


	const projectListToRender = [];
	projectDet.map((element, index) => {
        projectListToRender.push(
			<View style={projects.projectCard} key={index}>
				<Text>
					<Text style={projects.projectName}>{element.name}</Text>
					<Text style={projects.githubLink}><Link to={element.githubLink}><u>{element.githubLink}</u></Link></Text>
				</Text>
				<Text style={projects.contributors}>Author: <b>{element.author}</b> | Contributors: <b>{element.contributor}</b> + {element.extraContributor}</Text>
				<Text style={projects.projectLastUpdate}>{element.lastUpdatedOn}</Text>
				<Text style={projects.projectDesc}>{element.desc}</Text>
				<Text style={projects.projectTechBucket}>{element.techBucket}</Text>
				</View>
		);
    }); 

	return (
		<View>
			<Navbar />
			<View style={projects.body}>
				<ScrollView style={projects.projectListContainer}>
					{/* expand to show more desc and show snapshot on hover */}
					{/* click to open project link */}
					{
						projectListToRender
					}
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
		color: '#000',
	},
	contributors: {
		fontSize: 10,
	},
	projectDesc: {
		fontSize: 20,
		color: '#999',
	},
	projectLastUpdate: {
		textAlign: 'right',
		fontSize: 15,
		marginTop: -15,
		marginLeft: 10,
		color: '#555',
		fontStyle: 'italic',
	},
	projectTechBucket: {
		fontSize: 15,
		color: 'blue',
	},
	githubLink: {
		marginLeft: 20,
		color: 'blue',
		fontStyle: 'italic',
	},
	projetctSnapshot: {
		flex: 1
	},
});
