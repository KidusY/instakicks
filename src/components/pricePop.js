import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
const { width } = Dimensions.get('screen')
const pricePop = (props) => {
    return (
        <View style={style.popUpContainer}>
            <Text style={{ fontWeight: 'bold' }}>{props.price}</Text>
        </View>
    )
}
const style = StyleSheet.create({
    popUpContainer: {
        justifyContent: "center",
        alignSelf: "center",
        position: "absolute",
        zIndex: 1000,
        top: (width - 80) / 2,
        backgroundColor: "rgba(255, 255, 255, 0.62)",
        padding: 10,
        borderRadius: 10,
    },
})

export default pricePop
