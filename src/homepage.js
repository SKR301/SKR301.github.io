import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
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
// TODO: add proper professions 
const professionList = ['Programmer', 'Coder', 'Developer', 'Puzzle lover', 'Designer', 'Freelancer', 'Innovator'];
let professionIndex = 0;
// TODO: add better colors 
const colorList = ['blue', 'red', 'green', 'springgreen', 'black', 'purple', 'yellow', 'aqua', 'coral'];

export default function Homepage() {
    const [splash, setSplash] = useState([]);
    const [profession, setProfession] = useState('Programmer');
    const [name, setName] = useState([{letter:'S', col:'black'}, {letter:'a', col:'black'}, {letter:'u', col:'black'}, {letter:'r', col:'black'}, {letter:'a', col:'black'}, {letter:'v', col:'black'}, {letter:' ', col:'black'}, {letter:'K', col:'black'}, {letter:'u', col:'black'}, {letter:'m', col:'black'}, {letter:'a', col:'black'}, {letter:'r', col:'black'}]);
    const [navbarItemUndelineSize, setNavbarItemUndelineSize] = useState(0);

    const homescreenClickHandler = (e) => {
        setSplash((splash) => [...splash, {x:e.clientX, y:e.clientY, col:Math.ceil(Math.random()*7)}]);
    }

    const onNameHoverHandler = (index) => {
        let randomCol = colorList[Math.floor(Math.random()*colorList.length)];
        let copyOfName = [...name];
        copyOfName[index].col = randomCol;
        setName(copyOfName);
    }

    const switchProfession = useCallback(() => {
        professionIndex = (professionIndex + 1) % professionList.length;
        setProfession(professionList[professionIndex]);
    }, []);
    
    useEffect(() => {
        const intervalID = setInterval(switchProfession, 1000);
        return () => clearInterval(intervalID);
    }, [splash, name, switchProfession]);

    const splashesToRender = [];
    const nameToRender = [];

    splash.map((element, index) => {
        //TODO: erase splash after 2 sec
        //TODO: add random size to splashes
        if(element.col == 1){
            splashesToRender.push(<Image key={index} source={blueSplash} style={{ width: 200, height: 200, position: 'absolute', top: element.y-400, left: element.x-190, zIndex: -1}}></Image>)
        }
        if(element.col == 2){
            splashesToRender.push(<Image key={index} source={greenSplash} style={{ width: 200, height: 200, position: 'absolute', top: element.y-400, left: element.x-190, zIndex: -1}}></Image>)
        }
        if(element.col == 3){
            splashesToRender.push(<Image key={index} source={indigoSplash} style={{ width: 200, height: 200, position: 'absolute', top: element.y-400, left: element.x-190, zIndex: -1}}></Image>)
        }
        if(element.col == 4){
            splashesToRender.push(<Image key={index} source={orangeSplash} style={{ width: 200, height: 200, position: 'absolute', top: element.y-400, left: element.x-190, zIndex: -1}}></Image>)
        }
        if(element.col == 5){
            splashesToRender.push(<Image key={index} source={redSplash} style={{ width: 200, height: 200, position: 'absolute', top: element.y-400, left: element.x-190, zIndex: -1}}></Image>)
        }
        if(element.col == 6){
            splashesToRender.push(<Image key={index} source={violetSplash} style={{ width: 200, height: 200, position: 'absolute', top: element.y-400, left: element.x-190, zIndex: -1}}></Image>)
        }
        if(element.col == 7){
            splashesToRender.push(<Image key={index} source={yellowSplash} style={{ width: 200, height: 200, position: 'absolute', top: element.y-400, left: element.x-190, zIndex: -1}}></Image>)
        }
    });

    name.map((element, index) => {
        nameToRender.push(<Text key={index} style={{color: element.col}} onMouseOver={()=>onNameHoverHandler(index)} >{element.letter}</Text>)
    });    

    const homepage = StyleSheet.create({
        body: {
            backgroundColor: '#eee',
            height: windowHeight,
        },
        navbar: {
            alignSelf: 'flex-end',
            flexDirection: 'row',
            marginTop: 20,
            borderLeftWidth: 20,
            borderTopWidth: 20,
            borderLeftColor: 'transparent',
            borderTopColor: 'mediumblue',
            zIndex: 1,
        },
        navbarItem: {
            paddingHorizontal: 25,
            paddingVertical: 10,
            // borderBottomWidth: navbarItemUndelineSize,
            // borderBottomColor: 'green'
        },
        navbarItemText:{
            fontSize: 20
        },
        homepageText: {
            marginHorizontal: 100,
            marginVertical: 200,
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
        profession: {
            fontSize: 50,
        },
    });

    return (
		<View style={homepage.body} onClick={(e)=>homescreenClickHandler(e)}>
            <View style={homepage.navbar}>
                {/* add on click  */}
                <TouchableOpacity style={homepage.navbarItem}>  
                {/* onMouseOver={setNavbarItemUndelineSize(5)}> */}
                    <Text style={homepage.navbarItemText}>Projects</Text>
                </TouchableOpacity>
                <TouchableOpacity style={homepage.navbarItem}>
                    <Text style={homepage.navbarItemText}>Contact</Text>
                </TouchableOpacity>
                <TouchableOpacity style={homepage.navbarItem}>
                    <Text style={homepage.navbarItemText}>Blog</Text>
                </TouchableOpacity>
            </View>
            <View style={homepage.homepageText}>
                {
                    splashesToRender
                }
                <Text adjustsFontSizeToFit={true} style={homepage.salutation}>Hey, <Text style={{fontSize: 20}}>How You Doin'?</Text></Text>
                <Text adjustsFontSizeToFit={true} style={homepage.name}><Text>I'm </Text>
                    {
                        nameToRender
                    }
                </Text>
                {/*TODO: make smooth transitions, fadein/slidein/random transitions etc... */}
                <View>
                    <Text adjustsFontSizeToFit={true} style={homepage.profession}>{profession}</Text>
                </View>
            </View>
		</View>
	);
}



