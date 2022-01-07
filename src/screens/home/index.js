//React Components
import React, { useState } from 'react'
import { View, Text, Button, Image, FlatList, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native'

// CustomCompnents 
import Header from '../../components/header';
import toastMessage from '../../components/toast';


const Home = ({ navigation }) => {
    const catalogue = [
        { name: "Landscape", navigateTo: 'Catalogue1' },
        { name: "Portrait", navigateTo: 'Catalogue2' },
        { name: "Abstract", navigateTo: 'Catalogue3' },
        { name: "My Favorites", navigateTo: 'Favorites' },
    ]

    return (
        <SafeAreaView style={styles.container}>
            <Header title={"Galary"} noBack noAdd />
            <FlatList
                data={catalogue}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => { navigation.navigate(item.navigateTo, { item }) }} style={styles.list}>
                            <Text style={styles.listName}>{item.name}</Text>
                            <Text style={styles.arrow}>{">"}</Text>
                        </TouchableOpacity>
                    )
                }}
            />
        </SafeAreaView>
    )
}

//export component
export default Home;
const styles=StyleSheet.create({
    container:{ flex: 1, marginHorizontal: 0, marginTop: 0, backgroundColor: 'lightblue' },
    list:{ marginHorizontal: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderRadius: 5, backgroundColor: '#fff', marginTop: 40, marginVertical: 10 },
    listName:{ paddingVertical: 10, paddingLeft: 10, fontSize: 20, fontWeight: '900' },
    arrow:{ paddingRight: 10, fontSize: 25 }
})