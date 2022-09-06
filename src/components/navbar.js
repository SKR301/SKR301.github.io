import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { Link, Navigate } from "react-router-dom";
import { useEffect, useState, useCallback } from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Navbar() {
    const [navbarItemUndelineSize, setNavbarItemUndelineSize] = useState([0,0,0]);
    const [toProjects, setToProjects] = useState(false);
    const [toContact, setToContact] = useState(false);
    const [toBlogs, setToBlogs] = useState(false);

    useEffect(() => {
        
    }, [navbarItemUndelineSize, toProjects]);

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
        navbarItemText:{
            fontSize: 20
        },
    });

    if(toProjects == true){
        return <Navigate to='/projects' />;
    }
    if(toContact == true){
        return <Navigate to='/contact' />;
    }
    if(toBlogs == true){
        return <Navigate to='/blogs' />;
    }

	return (
		<View style={navbar.navbarContainer}>
            <TouchableOpacity style={[navbar.navbarItem, navbar.navbarItem0]} onPress={()=>{setToProjects(true)}} onMouseEnter={() => {setNavbarItemUndelineSize([5,0,0])}} onMouseLeave={()=>{setNavbarItemUndelineSize([0,0,0])}}>
                <Text style={navbar.navbarItemText}>Projects</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[navbar.navbarItem, navbar.navbarItem1]} onPress={()=>{setToContact(true)}} onMouseEnter={() => {setNavbarItemUndelineSize([0,5,0])}} onMouseLeave={()=>{setNavbarItemUndelineSize([0,0,0])}}>
                <Text style={navbar.navbarItemText}>Contact</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[navbar.navbarItem, navbar.navbarItem2]} onPress={()=>{setToBlogs(true)}} onMouseEnter={() => {setNavbarItemUndelineSize([0,0,5])}} onMouseLeave={()=>{setNavbarItemUndelineSize([0,0,0])}}>
                <Text style={navbar.navbarItemText}>Blog</Text>
            </TouchableOpacity>
        </View>
	);
}


