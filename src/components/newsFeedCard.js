import React, { useState } from 'react'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { View, Text, StyleSheet, Dimensions, Image, Modal, TouchableOpacity } from 'react-native'
import PricePop from '../components/pricePop';


const { width } = Dimensions.get('screen')
const newsFeedCard = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
    return (
        <View style={style.cardContainer}>
            <View style={{ flexDirection: "row" }} >

                <Image source={props.profileImgUrl} style={style.profileImg} />

                <View style={{ marginLeft: 7 }}>
                    <Text style={{ fontWeight: '600' }}> User_34_XX </Text>
                    <Text style={{ fontSize: 12, color: "#32168E" }}><Entypo name="location-pin" size={18} color="black" />San Diego </Text>
                </View>
                <View style={{ textAlign: "right", marginLeft: 'auto' }} >
                    <TouchableOpacity onPress={() => setShowOptions(!showOptions)} >

                        <Entypo name="dots-three-horizontal" size={20} color="#424242" />
                    </TouchableOpacity>
                    {
                        showOptions ? <View style={{
                            position: "absolute", width: 70, right: 40, top:10, zIndex:1000, backgroundColor: "#eeeeee", borderRadius: 5, shadowColor: "#000", 
                            shadowOffset: {
                                width: 1,
                                height: 2,
                            }, shadowOpacity: 0.59 }}>
                            <TouchableOpacity>
                                <Text style={{textAlign:"center", alignSelf:'center'}}> Save</Text>
                            </TouchableOpacity>
                           
                            
                        </View> : <View />
                    }

                </View>

            </View>

            <View >
                {
                    showModal ?
                        <PricePop price={'$350'} />
                        : <View />
                }


                <TouchableOpacity onPress={() => setShowModal(!showModal)}>
                    <Image source={props.postedImgUrl} style={style.postedImg} />

                </TouchableOpacity>
            </View>
            <View style={style.feedBack}>
                <Text style={{ fontSize: 13, color: "#707070" }}> 200 Likes </Text>

                <View style={{ flexDirection: "row", justifyContent: "space-between", width: 70 }}>

                    <FontAwesome name="commenting" size={24} color="#204755" style={{ alignSelf: "center", textAlign: "center" }} />

                    {
                        props.isLiked ?
                            <AntDesign name="hearto" size={20} color="black" style={{ alignSelf: "center", textAlign: "center" }} />
                            :
                            <AntDesign name="heart" size={20} color="black" />
                    }
                </View>
            </View>

        </View>
    )
}

const style = StyleSheet.create({

    cardContainer: {
        width: width - 50,
        height: 400,
        backgroundColor: "#F5F5F5",
        alignSelf: "center",
        borderRadius: 20,
        marginTop: 10,
        padding: 10
    },

    profileImg: {
        width: 60,
        height: 60,
        borderRadius: 60,
        
    },
    postedImg: {
        width: (width - 70),
        height: 270,
        alignSelf: "center",
        marginTop: 10,
        borderRadius: 10,
        resizeMode: 'contain',
        
        zIndex: 1
    }
    ,
    feedBack: {

        margin: 5,
        flexDirection: "row",
        justifyContent: 'space-between',
    }

})

export default newsFeedCard
