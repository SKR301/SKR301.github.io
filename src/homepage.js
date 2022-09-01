import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { useEffect, useState } from 'react';
import img from '../assets/splashes/demo.png'; 

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Homepage() {
    const [splash, setSplash] = useState([]);

    const homescreenClickHandler = (e) => {
        setSplash((splash) => [...splash, {x:e.clientX, y:e.clientY, col:'a'}]);
    }

    useEffect(() => {
        console.log(splash);
    }, [splash])

    const splashesToRender = []

    splash.map((element, index) => {
        // show splash image here but in bg and fixed position 
        splashesToRender.push(<Image key={index} source={img} style={{ width: 305, height: 159 }}></Image>)
    });

    return (
		<View style={homepage.body}>
        {/* random coloured splash on bg when clicked */}
            <View>
                {/* Top bar: Projects, Contact, Blog */}
                {/* On top Right */}
            </View>
            <View style={homepage.homepageText} onClick={(e)=>homescreenClickHandler(e)} >
                {
                    splashesToRender
                }
                <Text adjustsFontSizeToFit={true} style={homepage.salutation}>Hey, <Text style={{fontSize: 20}}>How You Doin'?</Text></Text>
                {/* change character colour of name randomly on hover */}
                <Text adjustsFontSizeToFit={true} style={homepage.name}><Text>I'm </Text>Saurav KumaR</Text>
                {/* make this profession tag change automatically programmer, coder, player, developer, Puzzle lover ... */}
                <Text adjustsFontSizeToFit={true} style={homepage.work}>Programmer</Text>
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
