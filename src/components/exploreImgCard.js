import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Modal } from 'react-native';
import NewsFeedCard from './newsFeedCard'
import { AntDesign } from '@expo/vector-icons';
const { width } = Dimensions.get('screen')
const exploreImgCard = (props) => {
    const [showModal, setShowModal] = useState(false)
    return (
        <TouchableOpacity onPress={() => setShowModal(!showModal)}>
            <Modal animationType="slide" visible={showModal} onRequestClose={() => setShowModal(!showModal)} >
                
                <View style={{ alignContent: "center", justifyContent: "center", width: width, height: 100, flex:1 , flexDirection:'column'}}>
                    <TouchableOpacity onPress={() => setShowModal(!showModal)} style={{ alignSelf: "center" }}>
                        <AntDesign name="closecircle" size={24} color="#d32f2f" />
                    </TouchableOpacity>
                    <View>

                    <NewsFeedCard profileImgUrl={require('../assets/ana-tavares-bKrmXTShj7k-unsplash.jpg')} postedImgUrl={props.imgUrl} size={'fullScreen'}/>
                    </View>

                </View>

            </Modal>
            <View>
                <Image source={props.imgUrl} style={style.Img} />
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    Img: {
        width: width / 2,
        height: 170,
        resizeMode: 'cover',
        borderRadius: 10
    }
})
export default exploreImgCard
