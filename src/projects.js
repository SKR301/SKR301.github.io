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
			projectInnerListToRender.push(
				<View key={innerIndex} style={projects.projectCard}>
					<Image source={innerElement.img} style={projects.projectImage}/>
					{/* remove underline from link  */}
					<Link to={innerElement.projectLink}><Text style={projects.projectName}>{innerElement.name}</Text></Link>
				</View>
			);
		});

        projectListToRender.push(
			<View key={index} style={projects.projectCategory}>
				<View style={projects.projectCategoryContainer}>
					<Text style={projects.projectCategoryTitle}>{element.projectCategory}</Text>
				</View>
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
		borderRadius: 5,
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
		fontSize: 20,
		textAlign: 'center',
	}

	
});
