import { StyleSheet, Text, View, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Homepage() {
	return (
		<View style={homepage.body}>
        {/* random coloured splash on bg when clicked */}
            <View>
                {/* Top bar: Projects, Contact, Blog */}
                {/* On top Right */}
            </View>

            <View style={homepage.homepageText}>
                <Text adjustsFontSizeToFit={true} style={homepage.salutation}>Hey, <Text style={{fontSize: 20}}>How You Doin'?</Text></Text>
                {/* change character colour of name randomly on click */}
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
