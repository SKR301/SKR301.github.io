import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { Link, Navigate, useNavigate } from "react-router-dom";
import Navbar from './components/navbar';
import snap0 from '../assets/projectSnaps/snap0.jpg';
import snap1 from '../assets/projectSnaps/snap3.jpg';
import snap2 from '../assets/projectSnaps/snap2.jpg';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Projects() {
	const [projectCategoryDisplayStatus, setProjectCategoryDisplayyStatus] = useState([1,1,1])
	const [projectDet, setProjectDet] = useState([
		{
			projectCategory: 'Web',
			projectCardDet:[{
				img: snap0,
				name: 'project0',
				projectLink: 'link0',
				overlay: false,
			},
			{
				img: snap0,
				name: 'project1',
				projectLink: 'link1',
				overlay: false,
			}]
		},{
			projectCategory: 'Android',
			projectCardDet:[{
				img: snap1,
				name: 'project0',
				projectLink: 'link0',
				overlay: false,
			},
			{
				img: snap1,
				name: 'project1',
				projectLink: 'link1',
				overlay: false,
			}]
		},{
			projectCategory: 'Console',
			projectCardDet:[{
				img: snap2,
				name: 'project0',
				projectLink: 'link0',
				overlay: false,
			},
			{
				img: snap2,
				name: 'project1',
				projectLink: 'link1',
				overlay: false,
			}]
		}
	]);
	const navigate = useNavigate();

	const onMouseEnterCard = (index, innerIndex) => {
		let newProjectDet = JSON.parse(JSON.stringify(projectDet));
		newProjectDet[index].projectCardDet[innerIndex].overlay = true;
		setProjectDet(newProjectDet);
	}

	const onMouseLeaveCard = (index, innerIndex) => {
		let newProjectDet = JSON.parse(JSON.stringify(projectDet));
		newProjectDet[index].projectCardDet[innerIndex].overlay = false;
		setProjectDet(newProjectDet);
	}

	const categoryTitleClickHandler = (index) => {
		let newProjectCategoryDisplayStatus = [...projectCategoryDisplayStatus];
		newProjectCategoryDisplayStatus[index] = !newProjectCategoryDisplayStatus[index];
		setProjectCategoryDisplayyStatus(newProjectCategoryDisplayStatus);
	}

	useEffect(()=>{
		
	},[projectDet]);

	const projectListToRender = [];
	projectDet.map((element, index) => {
		const projectInnerListToRender = [];
		element.projectCardDet.map((innerElement, innerIndex) => {
			let projectName = innerElement.name;
			if(innerElement.name.length > 15 && !innerElement.overlay){
				projectName = projectName.substring(0,15)+'...';				
			}

			projectInnerListToRender.push(
				<TouchableOpacity key={innerIndex} style={projects.projectCard} onPress={()=>{navigate(innerElement.projectLink)}} onMouseEnter={()=>{onMouseEnterCard(index, innerIndex)}} onMouseLeave={()=>{onMouseLeaveCard(index, innerIndex)}}>
					<Image source={innerElement.img} style={projects.projectImage}/>
					<View style={(innerElement.overlay)?projects.projectNameOverlay:projects.projectName}>
						<Text style={projects.projectNameText}>{projectName}</Text>
					</View>
				</TouchableOpacity>
			);
		});

        projectListToRender.push(
			<View key={index} style={projects.projectCategory}>
				{/* better indicator */}
				{/* change bg when hidden */}
				<TouchableOpacity style={projects.projectCategoryContainer} onPress={()=>{categoryTitleClickHandler(index)}}>
					<Text style={projects.projectCategoryTitle}>{element.projectCategory}</Text>
				</TouchableOpacity>
				<ScrollView style={(projectCategoryDisplayStatus[index])?projects.projectScrollBar:projects.projectScrollBarHidden} horizontal={true}>
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
		borderRadius: 10,
		margin: 10,
		padding: 20,
	},
	projectScrollBarHidden: {
		display: 'none',
	},
	projectCard:{
		height: 200,
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
		marginTop: -37,
		backgroundColor: '#eee',
		borderBottomLeftRadius: 25,
		borderBottomRightRadius: 25,
		opacity: 0.75,
	},
	projectNameOverlay: {
		height: 200,
		width: 200,
		marginTop: -200,
		backgroundColor: '#eee',
		borderRadius: 25,
		opacity: 0.75,
		alignItems:'center',
		justifyContent: 'center',
	},
	projectNameText: {
		fontSize: 15,
		opacity: 1,
	}
});
