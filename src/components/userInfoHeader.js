import React from 'react'
import { StyleSheet, Text, View, Dimensions,Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
const { width } = Dimensions.get('screen')
const userInfoHeader = (props) => {
    return (
        <View>
            <LinearGradient colors={['#025E6F', '#2A477F', '#572D91']} start={{ x: 0.1, y: -1.5 }} locations={[0.1, 0.9, 0.7]} style={styles.linearGradient}>
                <View style={{ flexDirection: "row" }}>
                    <Image source={require('../assets/alex-suprun-ZHvM3XIOHoE-unsplash.jpg')} style={styles.profileImg} />
                    <View style={styles.profileInfoContainer}>
                        <Text style={{ color: 'white', fontWeight: "500", fontSize: 20, marginLeft: 15 ,alignSelf: "center"}}>
                           JoHn_12_Doe
                    </Text>
                        <View style={{ flexDirection: 'row', alignSelf:"center" }}>
                            <Text style={{ textAlign: "center", color: "white" }}> 100 {"\n"} follower </Text>
                            <Text style={{ textAlign: "center", color: "white" }}> 100{"\n"} following  </Text>
                            <Text style={{ textAlign: "center", color: "white" }}> 100 {"\n"} posts </Text>

                        </View>
                    </View>
                </View>
                <View style={{ justifyContent: "center", alignContent: "center", marginTop: 10 }}>
                    <Text style={{ alignSelf: "center", color: "white" }}> A biography is simply an account of someone’s life written by another person. </Text>

                </View>
            </LinearGradient>
        </View>
    )
}

export default userInfoHeader


const styles = StyleSheet.create({
    linearGradient: {
        width: width,
        height: 220,
        borderRadius: 30
    },

    profileImg: {
        width: 100,
        height: 100,
        borderRadius: 100,
        marginTop: 40,
        marginLeft: 10
    },

    profileInfoContainer: {
        width: width - 190,
        alignSelf: "center",
        alignContent:"center",
        justifyContent:"center",
        textAlign:"center",
        marginLeft: 10,
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: "white",
        padding: 7,        
        paddingBottom:10

    }
})
