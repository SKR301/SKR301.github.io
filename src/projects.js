import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native';
import { Link, Navigate } from "react-router-dom";
import Navbar from './components/navbar';
import snap0 from '../assets/projectSnaps/snap0.jpg';
import snap1 from '../assets/projectSnaps/snap3.jpg';
import snap2 from '../assets/projectSnaps/snap2.jpg';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Projects() {

// update colors
	const [projectDet, setProjectDet] = useState([{
		projectCategory: 'Web',
		projectCardDet:[{
			img: snap0,
			name: 'project0',
			projectLink: 'link0',
		},
		{
			img: snap0,
			name: 'project1',
			projectLink: 'link1',
		}]},{
		projectCategory: 'Android',
		projectCardDet:[{
			img: snap1,
			name: 'project0',
			projectLink: 'link0',
		},
		{
			img: snap1,
			name: 'project1',
			projectLink: 'link1',
		}]},{
		projectCategory: 'CLI',
		projectCardDet:[{
			img: snap2,
			name: 'project0',
			projectLink: 'link0',
		},
		{
			img: snap2,
			name: 'project1',
			projectLink: 'link1',
		}]}]);

	useEffect(()=>{

	},[projectDet])

	const projectListToRender = [];
	projectDet.map((element, index) => {
        projectListToRender.push(
			<View style={projects.projectCategory}>
				<Text style={projects.projectCategoryTitle}>{element.projectCategory}</Text>
				<ScrollView style={projects.projectScrollBar} horizontal={true}>
					<View style={projects.projectCard}>
						<Image source={element.projectCardDet.img} style={projects.projectImage}/>
						<Text style={projects.projectName}><Link to={element.projectCardDet.projectLink}>{element.projectCardDet.name}</Link></Text>
					</View>
				</ScrollView>
			</View>
		);
    }); 

	return (
		<View>
			<Navbar />
			{
				projectListToRender
			}
		</View>
	);
}

const projects = StyleSheet.create({
	body: {
		marginTop: 25,
	},
	projectCategory: {
		marginTop: 50
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
