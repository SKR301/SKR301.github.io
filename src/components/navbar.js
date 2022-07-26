import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState, useCallback } from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Navbar() {
    const [navbarItemUndelineSize, setNavbarItemUndelineSize] = useState([5,5,5,5]);

    useEffect(() => {
    }, [navbarItemUndelineSize]);

    const navbar = StyleSheet.create({
        navbarContainer: {
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
        },
        navbarItem0: {
            borderBottomWidth: navbarItemUndelineSize[0],
            borderBottomColor: 'blue',
        },
        navbarItem1: {
            borderBottomWidth: navbarItemUndelineSize[1],
            borderBottomColor: 'blue',
        },
        navbarItem2: {
            borderBottomWidth: navbarItemUndelineSize[2],
            borderBottomColor: 'blue',
        },
        navbarItem3: {
            borderBottomWidth: navbarItemUndelineSize[3],
            borderBottomColor: 'blue',
        },
        navbarItemText:{
            fontSize: 20
        },
    });
	const navigate = useNavigate();
    
	return (
		<View style={navbar.navbarContainer}>
        <TouchableOpacity style={[navbar.navbarItem, navbar.navbarItem0]} onPress={()=>{navigate('/')}} onMouseEnter={() => {setNavbarItemUndelineSize([0,5,5,5])}} onMouseLeave={()=>{setNavbarItemUndelineSize([5,5,5,5])}}>
            <Text style={navbar.navbarItemText}>Home</Text>
        </TouchableOpacity>
            <TouchableOpacity style={[navbar.navbarItem, navbar.navbarItem1]} onPress={()=>{navigate('/projects')}} onMouseEnter={() => {setNavbarItemUndelineSize([5,0,5,5])}} onMouseLeave={()=>{setNavbarItemUndelineSize([5,5,5,5])}}>
                <Text style={navbar.navbarItemText}>Projects</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[navbar.navbarItem, navbar.navbarItem2]} onPress={()=>{navigate('/contact')}} onMouseEnter={() => {setNavbarItemUndelineSize([5,5,0,5])}} onMouseLeave={()=>{setNavbarItemUndelineSize([5,5,5,5])}}>
                <Text style={navbar.navbarItemText}>Contact</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[navbar.navbarItem, navbar.navbarItem3]} onPress={()=>{navigate('/blogs')}} onMouseEnter={() => {setNavbarItemUndelineSize([5,5,5,0])}} onMouseLeave={()=>{setNavbarItemUndelineSize([5,5,5,5])}}>
                <Text style={navbar.navbarItemText}>Blog</Text>
            </TouchableOpacity>
        </View>
	);
}
