import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native';
import { Link, Navigate } from "react-router-dom";
import Navbar from './components/navbar';
import snap0 from '../assets/projectSnaps/snap0.jpg';
import snap1 from '../assets/projectSnaps/snap1.jpg';
import snap2 from '../assets/projectSnaps/snap2.jpg';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Projects() {

// update colors
	const [projectDet, setProjectDet] = useState([{
		projectCategory: 'Web',
		projectDet: {
			name: 'project0',
			projectLink: 'link0'
		},
	},{
		projectCategory: 'Android',
		projectDet: {
			name: 'project1',
			projectLink: 'link1'
		},
	},{
		projectCategory: 'CLI',
		projectDet: {
			name: 'project2',
			projectLink: 'link2'
		},
	},]);

	useEffect(()=>{

	},[projectDet])

	const projectListToRender = [];
	projectDet.map((element, index) => {
        projectListToRender.push(
			
		);
    }); 

	return (
		<View>
			<Navbar />
			<View style={projects.body}>
				<View style={projects.projectCategory}>
					<Text style={projects.projectCategoryTitle}>Web</Text>
					<ScrollView style={projects.projectScrollBar} horizontal={true}>
						<View style={projects.projectCard}>
							<Image source={snap0} style={projects.projectImage}/>
							<Text style={projects.projectName}><Link to={'/project0'}>Project Name</Link></Text>
						</View>
					</ScrollView>
				</View>
			</View>
		</View>
	);
}

const projects = StyleSheet.create({
	body: {
		marginTop: 25,
	},
	projectCategory: {

	},
	projectCategoryTitle: {
		fontSize: 30,
		marginStart: 50,
	},
	projectScrollBar: {

	},
	projectCard:{
		height: 200,
		width: 200,
		margin: 25,
	},
	projectImage: {
		height: 200,
		width: 200,
	},
	projectName: {
		fontSize: 20,
		textAlign: 'center',
	}

	
});
