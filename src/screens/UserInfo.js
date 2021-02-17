import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image ,ScrollView} from 'react-native';
import UserInfoHeader from '../components/userInfoHeader';
import BottomNavigationBar from '../components/bottomNavigationBar'
const { width } = Dimensions.get('screen')
const UserInfo = (props) => {

    return (
        <View style={{flex:1,backgroundColor:"#111111"}}>
        <ScrollView>
            <UserInfoHeader/>

                <View style={{ flexDirection: "row", flexWrap: "wrap", width: width, marginTop: 1, backgroundColor: "#1111"}}>
                
                    <Image source={require('../assets/postedPic/post1.jpeg')} style={styles.postedImg}/>
                    <Image source={require('../assets/postedPic/post2.jpeg')} style={styles.postedImg}/>
                    <Image source={require('../assets/postedPic/post3.jpeg')} style={styles.postedImg}/>
                    <Image source={require('../assets/postedPic/post4.jpeg')} style={styles.postedImg}/>
                    <Image source={require('../assets/postedPic/post5.jpeg')} style={styles.postedImg}/>
                    <Image source={require('../assets/postedPic/post6.jpeg')} style={styles.postedImg}/>
                    <Image source={require('../assets/postedPic/post7.jpeg')} style={styles.postedImg}/>
                    <Image source={require('../assets/postedPic/post8.jpeg')} style={styles.postedImg}/>
                    <Image source={require('../assets/postedPic/post10.jpeg')} style={styles.postedImg}/>
            </View>

        </ScrollView>

            <BottomNavigationBar navigation={props.navigation.navigate}/>
        </View>
    )
}

const styles = StyleSheet.create({

    postedImg:{
        width: width/3,
        height:200,
        resizeMode:'cover',
        borderRadius:10
    }
})
export default UserInfo

