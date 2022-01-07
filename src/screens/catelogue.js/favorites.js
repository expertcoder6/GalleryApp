import React from 'react'
import { FlatList, Image, SafeAreaView, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import Header from '../../components/header'

const Favorites = ({ route }) => {
    const { AddedFav } = useSelector(state => state.appDetails)
    const { name } = route.params.item
    return (
        <SafeAreaView style={{ flex: 1, marginHorizontal: 10 }}>
            <Header title={name} noAdd />

            <FlatList
                data={AddedFav}
                numColumns={2}
                renderItem={({ item }) => {
                    return (
                        <View style={{ alignItems: 'center', marginLeft: 25, marginTop: 10 }}>
                            <View style={{borderWidth:2,borderRadius:5,borderColor:"darkgrey"}}>
                                <Image source={{ uri: item.uri }} style={{height: 150, width: 150 }} />
                            </View>
                        </View>
                    )
                }}
            />
        </SafeAreaView>
    )
}
export default Favorites