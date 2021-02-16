import React from 'react'
import { View, Text, ScrollView, Image, StyleSheet, Dimensions } from 'react-native';
import ExploreTab from '../components/exploreTab';
import ExploreImgCard from '../components/exploreImgCard';
import BottomNavigationBar from '../components/bottomNavigationBar';


const { width } = Dimensions.get('screen')
const Explore = (props) => {
    return (
        <View style={{ backgroundColor: "#D1D1D1", flex: 1 }}>
            <View style={{ width: width, height: 100, flexDirection: 'row', alignContent: "center", justifyContent: "space-evenly" }}>

                <ExploreTab tabText={"Jordan 1"} />
                <ExploreTab tabText={"Adidas"} />
                <ExploreTab tabText={"Yeezy"} />
            </View>
            <ScrollView scrollEnabled>
                <View style={style.imgContainer}>
                    <ExploreImgCard imgUrl = {require('../assets/postedPic/post1.jpeg')}/>
                    <ExploreImgCard imgUrl = {require('../assets/postedPic/post2.jpeg')}/>
                    <ExploreImgCard imgUrl = {require('../assets/postedPic/post3.jpeg')}/>
                    <ExploreImgCard imgUrl = {require('../assets/postedPic/post4.jpeg')}/>
                    <ExploreImgCard imgUrl = {require('../assets/postedPic/post5.jpeg')}/>
                    <ExploreImgCard imgUrl = {require('../assets/postedPic/post6.jpeg')}/>
                    <ExploreImgCard imgUrl = {require('../assets/postedPic/post7.jpeg')}/>
                    <ExploreImgCard imgUrl = {require('../assets/postedPic/post8.jpeg')}/>
                    <ExploreImgCard imgUrl = {require('../assets/postedPic/post9.jpeg')}/>
                    <ExploreImgCard imgUrl = {require('../assets/postedPic/post10.jpeg')}/>
                </View>
            </ScrollView>

            <BottomNavigationBar navigation={props.navigation.navigate}/>

        </View>
    )
}

const style = StyleSheet.create({
    imgContainer: {
        flexDirection: 'row',
        flex: 1,
        flexWrap: 'wrap',
        width: width
    },
    Img: {
        width: width / 2,
        height: 170,
        resizeMode: 'cover',
        borderRadius:10
    }
})

export default Explore
