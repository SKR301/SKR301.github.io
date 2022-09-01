import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { useEffect, useState, useCallback } from 'react';
import blueSplash from '../assets/splashes/blueSplash.png'; 
import greenSplash from '../assets/splashes/greenSplash.png'; 
import indigoSplash from '../assets/splashes/indigoSplash.png'; 
import orangeSplash from '../assets/splashes/orangeSplash.png'; 
import redSplash from '../assets/splashes/redSplash.png'; 
import violetSplash from '../assets/splashes/violetSplash.png'; 
import yellowSplash from '../assets/splashes/yellowSplash.png'; 

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
// add proper professions 
const professionList = ['Programmer', 'Coder', 'Developer', 'Puzzle lover', 'Critical', 'Innovative', 'Inquisitive', 'Funny', 'Movie-Narc'];

export default function Homepage() {
    const [splash, setSplash] = useState([]);
    const [profession, setProfession] = useState('Programmer');
    let index = 0;

    const homescreenClickHandler = (e) => {
        setSplash((splash) => [...splash, {x:e.clientX, y:e.clientY, col:Math.ceil(Math.random()*7)}]);
    }

    const shuffle = useCallback(() => {
        index = (index + 1) % professionList.length;
        setProfession(professionList[index]);
    }, []);
    
    useEffect(() => {
        // console.log(splash);
        const intervalID = setInterval(shuffle, 1000);
        return () => clearInterval(intervalID);
    }, [splash, shuffle])

    const splashesToRender = []

    splash.map((element, index) => {
        // erase splash after 2 sec
        // add random size to splashes
        if(element.col == 1){
            splashesToRender.push(<Image key={index} source={blueSplash} style={{ width: 200, height: 200, position: 'absolute', top: element.y-110, left: element.x-190, zIndex: -1}}></Image>)
        }
        if(element.col == 2){
            splashesToRender.push(<Image key={index} source={greenSplash} style={{ width: 200, height: 200, position: 'absolute', top: element.y-110, left: element.x-190, zIndex: -1}}></Image>)
        }
        if(element.col == 3){
            splashesToRender.push(<Image key={index} source={indigoSplash} style={{ width: 200, height: 200, position: 'absolute', top: element.y-110, left: element.x-190, zIndex: -1}}></Image>)
        }
        if(element.col == 4){
            splashesToRender.push(<Image key={index} source={orangeSplash} style={{ width: 200, height: 200, position: 'absolute', top: element.y-110, left: element.x-190, zIndex: -1}}></Image>)
        }
        if(element.col == 5){
            splashesToRender.push(<Image key={index} source={redSplash} style={{ width: 200, height: 200, position: 'absolute', top: element.y-110, left: element.x-190, zIndex: -1}}></Image>)
        }
        if(element.col == 6){
            splashesToRender.push(<Image key={index} source={violetSplash} style={{ width: 200, height: 200, position: 'absolute', top: element.y-110, left: element.x-190, zIndex: -1}}></Image>)
        }
        if(element.col == 7){
            splashesToRender.push(<Image key={index} source={yellowSplash} style={{ width: 200, height: 200, position: 'absolute', top: element.y-110, left: element.x-190, zIndex: -1}}></Image>)
        }
        
    });

    return (
		<View style={homepage.body} onClick={(e)=>homescreenClickHandler(e)} >
            <View>
                {/* Top bar: Projects, Contact, Blog */}
                {/* On top Right */}
            </View>
            <View style={homepage.homepageText}>
                {
                    splashesToRender
                }
                <Text adjustsFontSizeToFit={true} style={homepage.salutation}>Hey, <Text style={{fontSize: 20}}>How You Doin'?</Text></Text>
                {/* change character colour of name randomly on hover */}
                <Text adjustsFontSizeToFit={true} style={homepage.name}><Text>I'm </Text>Saurav KumaR</Text>
                {/* make smooth transitions, fadein/slidein/random transitions etc... */}
                <View>
                    <Text adjustsFontSizeToFit={true} style={homepage.work}>{profession}</Text>
                </View>
            </View>
		</View>
	);
}

const homepage = StyleSheet.create({
	body: {
        height: windowHeight,
		backgroundColor: '#eee',
	},
    homepageText: {
        height: windowHeight,
        marginHorizontal: 100,
        padding: 25,
		alignItems:'center',
        justifyContent: 'center',
    },
    salutation: {
        fontSize: 40,
        alignSelf: 'flex-start',
        marginStart: 50
    },
    name: {
        fontSize: 100,
    },
    work: {
        fontSize: 50,
    }
});
