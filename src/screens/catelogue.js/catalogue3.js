import React, { useState } from 'react'
import { View, Text, SafeAreaView, FlatList, Image, TouchableOpacity, Button, Modal, StyleSheet } from 'react-native'
import Header from '../../components/header'
import ImagePicker from 'react-native-image-crop-picker';
import { useDispatch, useSelector } from 'react-redux';
import { AddToFavorite, storeImage3 } from '../../redux/actions/app';

const Catalogue3 = ({ route }) => {
    const { name } = route.params.item
    const { storedImage3 } = useSelector(state => state.appDetails)
    const dispatch = useDispatch()
    const [images, setImages] = useState(storedImage3)
    const [fav, setFav] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);

    const ImageSelector = () => {
        ImagePicker.openPicker({ multiple: true })
            .then(selectedImage => {
                let uploadedImages = selectedImage.map((selectedImage) => {
                    return {
                        uri: selectedImage.path,
                        type: selectedImage.mime,
                        name: selectedImage.modificationDate
                    }
                })
                dispatch(storeImage3([...images, ...uploadedImages]))
                setImages([...images, ...uploadedImages])
            })
            .catch(err => console.log(err))
    }
    const OpenCamera = () => {

        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(selectedImage => {
            console.log(selectedImage)
            let data = {
                uri: selectedImage.path,
                type: selectedImage.mime,
                name: selectedImage.modificationDate
            }

            dispatch(storeImage3([...images, data]))
            setImages([...images, data])
            setModalVisible(false)
        });

    }
    const addToFavorite = (item) => {
        let FavoriteImage = []
        FavoriteImage.push(item)
        console.log('favorite iamge-----', FavoriteImage)
        dispatch(AddToFavorite([...AddedFav, ...FavoriteImage]))
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <Header title={name} onPress={() => { setModalVisible(true) }} />
            <View style={{ backgroundColor: 'lightblue' }}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <TouchableOpacity activeOpacity={1} onPress={() => setModalVisible(false)} style={styles.modalContainer}>
                        <View style={styles.modalInnerContainer}>
                            <Button title='Camera' onPress={() => OpenCamera()} />
                            <Text></Text>
                            <Button title='Galary' onPress={() => { ImageSelector() }} />
                        </View>
                    </TouchableOpacity>
                </Modal>

            </View>
            <FlatList
                data={images}
                numColumns={2}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.container}>
                            <View>
                                <Image source={{ uri: item.uri }} style={styles.imageStyle} />
                            </View>
                            <View style={{ position: 'absolute', top: 0, left: 100 }}>
                                {fav ?
                                    <TouchableOpacity onPress={() => { setFav(!fav) }}>
                                        <Image source={require('../../assets/heart.png')} style={styles.solidHeart} />
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={() => { setFav(!fav); addToFavorite(item) }}>
                                        <Image source={require('../../assets/heart-outline.png')} style={styles.oulineHeart} />
                                    </TouchableOpacity>
                                }
                            </View>
                        </View>
                    )
                }}
            />
        </SafeAreaView>
    )
}
export default Catalogue3


const styles = StyleSheet.create({
    mainContainer: { flex: 1, marginHorizontal: 10 },
    modalContainer: { alignItems: 'center', backgroundColor: "rgba(0, 0, 0, 0.7)", flex: 1 },
    modalInnerContainer: { borderRadius: 10, width: '60%', height: '20%', backgroundColor: 'lightblue', alignItems: 'center', marginTop: '70%', justifyContent: 'center' },
    container: { alignItems: 'center', marginLeft: 25, marginTop: 10 },
    imageStyle: { height: 150, width: 150 },
    favStyle: { position: 'absolute', top: 0, left: 100 },
    solidHeart: { height: 25, width: 30, marginTop: 5 },
    oulineHeart: { height: 25, width: 25 },
})