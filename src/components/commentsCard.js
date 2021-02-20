import React from 'react'
import { View, Text, Image,Dimensions} from 'react-native'
const {width} = Dimensions.get('screen')
const commentsCard = (props) => {
    return (
        <View>
        <View style={{flexDirection:"row",margin:10, alignSelf:"center", paddingRight:10, width:width - 20, }}>
            <Image source={props.imgUrl} style={{width:50,height:50,borderRadius:50}}/>
                <Text style={{ color: "white", margin: 10, fontWeight: '700', }}>{props.displayName}</Text>
                <View style={{ flex:1,}}>
                <Text style={{ color: "white", marginTop: 10,marginLeft:3, }}> {props.comment} </Text>
                </View>
            </View>

        </View>
    )
}

export default commentsCard
