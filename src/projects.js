import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigate } from "react-router-dom";
import Navbar from './components/navbar';
import snap0 from '../assets/projectSnaps/snap0.jpg';
import snap1 from '../assets/projectSnaps/snap3.jpg';
import snap2 from '../assets/projectSnaps/snap2.jpg';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Projects() {
	const [projectCategoryDisplayStatus, setProjectCategoryDisplayStatus] = useState([1,1,1])
	const [projectDet, setProjectDet] = useState([
		{
			projectCategory: 'Web',
			projectCardDet:[{
				img: snap0,
				name: 'text-analyzer',
				projectLink: 'https://github.com/SKR301/text-analyzer',
				overlay: false,
			},
			{
				img: snap0,
				name: 'GoFreeLancing',
				projectLink: 'https://github.com/SKR301/GoFreeLancing',
				overlay: false,
			},
			{
				img: snap0,
				name: 'algo-visualizer',
				projectLink: 'https://github.com/SKR301/algo-visualizer',
				overlay: false,
			},
			{
				img: snap0,
				name: 'Chopstick-ML',
				projectLink: 'https://github.com/SKR301/Chopstick-ML',
				overlay: false,
			},
			{
				img: snap0,
				name: 'network-scanner',
				projectLink: 'https://github.com/norkator/network-scanner',
				overlay: false,
			},
			{
				img: snap0,
				name: 'Moving-Eyes',
				projectLink: 'https://github.com/maahicodes/Moving-Eyes',
				overlay: false,
			},
			{
				img: snap0,
				name: 'Maze-Solver',
				projectLink: 'https://github.com/SKR301/Maze-Solver',
				overlay: false,
			},
			{
				img: snap0,
				name: 'TheLuckyDice',
				projectLink: 'https://the-lucky-dice.web.app/',
				overlay: false,
			},
			{
				img: snap0,
				name: 'TomScott-Card-Game',
				projectLink: 'https://github.com/SKR301/TomScott-Card-Game',
				overlay: false,
			},
			{
				img: snap0,
				name: 'is-time-up',
				projectLink: 'https://is-time-up.web.app/',
				overlay: false,
			},
			{
				img: snap0,
				name: 'LocalNetworkChat',
				projectLink: 'https://github.com/SKR301/LocalNetworkChat',
				overlay: false,
			},
			{
				img: snap0,
				name: 'blockchain',
				projectLink: 'https://github.com/SKR301/blockchain',
				overlay: false,
			}]
		},{
			projectCategory: 'Android',
			projectCardDet:[{
				img: snap1,
				name: 'MouseRemote',
				projectLink: 'https://apt.izzysoft.de/fdroid/index/apk/com.akshayaap.mouseremote',
				overlay: false,
			},
			{
				img: snap1,
				name: 'click-random',
				projectLink: 'https://github.com/SKR301/click-random',
				overlay: false,
			},
			{
				img: snap1,
				name: 'cryptography',
				projectLink: 'https://play.google.com/store/apps/details?id=com.nitramite.cryptography',
				overlay: false,
			},
			{
				img: snap1,
				name: 'WifiCracker',
				projectLink: 'https://github.com/SKR301/WifiCracker',
				overlay: false,
			},
			{
				img: snap1,
				name: 'GuessTheName',
				projectLink: 'https://github.com/SKR301/GuessTheName',
				overlay: false,
			},
			{
				img: snap1,
				name: 'OnlyNotepad',
				projectLink: 'https://github.com/SKR301/OnlyNotepad',
				overlay: false,
			},
			{
				img: snap1,
				name: 'The-Crypter',
				projectLink: 'https://github.com/SKR301/The-Crypter',
				overlay: false,
			}]
		},{
			projectCategory: 'Console',
			projectCardDet:[{
				img: snap2,
				name: 'Facial-recognition',
				projectLink: 'https://github.com/SKR301/Facial-recognition',
				overlay: false,
			},
			{
				img: snap2,
				name: 'Wifi-Password-Cracker-BruteForce',
				projectLink: 'https://github.com/SKR301/Wifi-Password-Cracker-BruteForce',
				overlay: false,
			},
			{
				img: snap2,
				name: 'open-intelligence',
				projectLink: 'https://github.com/SKR301/open-intelligence',
				overlay: false,
			},
			{
				img: snap2,
				name: 'pyc-to-num',
				projectLink: 'https://github.com/SKR301/pyc-to-num',
				overlay: false,
			},
			{
				img: snap2,
				name: 'Adaptive-Huffman-Coding',
				projectLink: 'https://github.com/SKR301/Adaptive-Huffman-Coding',
				overlay: false,
			},
			{
				img: snap2,
				name: 'lolipop-cipher',
				projectLink: 'https://github.com/SKR301/lolipop-cipher',
				overlay: false,
			},
			{
				img: snap2,
				name: 'Machine-Learning-cpp',
				projectLink: 'https://github.com/SKR301/Machine-Learning-cpp',
				overlay: false,
			},
			{
				img: snap2,
				name: 'Zip-It',
				projectLink: 'https://github.com/SKR301/Zip-It',
				overlay: false,
			},
			{
				img: snap2,
				name: 'snyf-py',
				projectLink: 'https://github.com/SKR301/snyf-py',
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
		setProjectCategoryDisplayStatus(newProjectCategoryDisplayStatus);
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
