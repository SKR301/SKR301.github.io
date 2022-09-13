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
		projectCategory: 'Console',
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
			let projectName = innerElement.name;
			if(innerElement.name.length > 15){
				projectName = projectName.substring(0,15)+'...';				
			}

			projectInnerListToRender.push(
				<View key={innerIndex} style={projects.projectCard}>
					<Image source={innerElement.img} style={projects.projectImage}/>
					{/* remove underline from link */}
					{/* overlay on hover and redirect to link on click */}
					<View style={projects.projectName}>
						<Link to={innerElement.projectLink}><Text style={projects.projectNameText}>{projectName}</Text></Link>
					</View>
				</View>
			);
		});

        projectListToRender.push(
			<View key={index} style={projects.projectCategory}>
				{/* hide on click */}
				{/* change bg when hidden */}
				<TouchableOpacity style={projects.projectCategoryContainer}>
					<Text style={projects.projectCategoryTitle}>{element.projectCategory}</Text>
				</TouchableOpacity>
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
		marginTop: 50,
	},
	projectCategoryContainer: {
		alignSelf: 'flex-start',
		flexDirection: 'row',
		width: windowWidth/8,
		marginTop: 20,	
		marginLeft: 10,
		borderRightWidth: 20,
		borderTopWidth: 20,
		borderRightColor: 'transparent',
		borderTopColor: 'grey',
		zIndex: 1,
	},
	projectCategoryTitle: {
		fontSize: 30,
		marginStart: 25,
	},
	projectScrollBar: {
		backgroundColor: '#eee',
		borderRadius: 10,
		margin: 10,
		padding: 20,
	},
	projectCard:{
		height: 225,
		width: 200,
		marginVertical: 10,
		marginHorizontal: 50,
		textAlign: 'center',
	},
	projectImage: {
		height: 200,
		width: 200,
		borderRadius: 25,
		opacity: 0.8,
	},
	projectName: {
		padding: 10,
		marginTop: -39,
		backgroundColor: '#aaa',
		borderBottomLeftRadius: 25,
		borderBottomRightRadius: 25,
		opacity: 0.75,
	},
	projectNameText: {
		fontSize: 15,
		opacity: 1,
	}

	
});
