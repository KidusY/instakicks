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
    const [isLiked, setIsLiked]= useState(false);

    return (
        <View style={style.cardContainer}>
            <View style={{ flexDirection: "row" }} >
                <Image source={props.profileImgUrl} style={style.profileImg} />
                <View style={{ marginLeft: 7 }}>
                    <Text style={{ fontWeight: '600',color:"white" }}> {props.displayName}</Text>
                    <Text style={{ fontSize: 12, color: "#9575cd" }}><Entypo name="location-pin" size={18} color="#9575cd" />San Diego </Text>
                </View>
                <View style={{ textAlign: "right", marginLeft: 'auto' }} >
                    <TouchableOpacity onPress={() => setShowOptions(!showOptions)}>
                        <Entypo name="dots-three-horizontal" size={20} color="#eeeeee" />
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
                <Text style={{ fontSize: 13, color: "#eeeeee" }}> {200} Likes </Text>

                <View style={{ flexDirection: "row", justifyContent: "space-between", width: 90 }}>

                <TouchableOpacity onPress={()=> props.navigation("Comments", {comments:props.posts})}>

                    <FontAwesome name="commenting" size={24} color="#80deea" style={{ alignSelf: "center", textAlign: "center" }} />
                </TouchableOpacity>

                    {
                        isLiked ?
                        <TouchableOpacity onPress={() => setIsLiked(!isLiked)} style={{width:50}}>
                                <AntDesign name="hearto" size={22} color="white" style={{ alignSelf: "center", textAlign: "center", marginTop: 2  }} />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={() => setIsLiked(!isLiked)} style={{ width: 50 }}>
                                <AntDesign name="heart" size={22} color="#b71c1c" style={{ alignSelf: "center", textAlign: "center",marginTop:2 }}  />
                            </TouchableOpacity>
                    }
                </View>
            </View>

        </View>
    )
}

const style = StyleSheet.create({

    cardContainer: {
        width: width,
        height: 400,
        backgroundColor: "#212121",
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
        margin: 7,
        flexDirection: "row",
        justifyContent: 'space-between',
    }

})

export default newsFeedCard
