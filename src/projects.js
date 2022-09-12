import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { Link, Navigate } from "react-router-dom";
import Navbar from './components/navbar';
import snap0 from '../assets/projectSnaps/snap0.jpg';
import snap1 from '../assets/projectSnaps/snap3.jpg';
import snap2 from '../assets/projectSnaps/snap2.jpg';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Projects() {

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
		const projectInnerListToRender = [];
		element.projectCardDet.map((innerElement, innerIndex) => {
			projectInnerListToRender.push(
				<View key={innerIndex} style={projects.projectCard}>
					<Image source={innerElement.img} style={projects.projectImage}/>
					{/* <Link to={innerElement.projectLink} style={projects.projectName}><Text style={projects.projectName}>{innerElement.name}</Text></Link> */}
					<TouchableOpacity style={projects.projectName} onPress={()=>{ return <Navigate to={innerElement.projectLink} />}}>
						<Text>{innerElement.name}</Text>
					</TouchableOpacity>
				</View>
			);
		});

        projectListToRender.push(
			<View key={index} style={projects.projectCategory}>
				<Text style={projects.projectCategoryTitle}>{element.projectCategory}</Text>
				<ScrollView style={projects.projectScrollBar} horizontal={true}>
					{
						projectInnerListToRender
					}
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
		// textDecoration: 'none',
	}

	
});
