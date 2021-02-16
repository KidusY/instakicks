import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity} from 'react-native'

const exploreTab = (props) => {
    return (
        <TouchableOpacity style={style.tabContainer}> 
        <View >
            <Text style={{textAlign:"center",color:'white',fontWeight:'700'}}>{props.tabText}</Text>
        </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    tabContainer:{
        alignSelf:"center",
        padding:7,
        backgroundColor:"#1EB9A7",
        marginTop:20,
        borderRadius:10,
        width:100
    }
})
export default exploreTab
