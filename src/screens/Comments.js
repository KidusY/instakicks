import React from 'react'
import { View, Text, ScrollView, StyleSheet, TextInput,Dimensions } from 'react-native'
import BottomNavigation from '../components/bottomNavigationBar'
const {width}= Dimensions.get('screen')
const Comments = (props) => {
    const comments = props.navigation.getParam("comments")
console.log(comments);
    return (
        <View style={{flex:1}}>
            <Text>Comments</Text>
            <ScrollView>

            </ScrollView>
        <TextInput style={style.TextInput}/>
        <BottomNavigation />
        </View>
    )
}
const style = StyleSheet.create({
    TextInput:{
        borderWidth:1,
        width:width,
        height:40
    }
})

export default Comments
