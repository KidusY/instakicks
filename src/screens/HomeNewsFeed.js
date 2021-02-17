import React, { useContext } from "react";
import { View, Text, Button, ScrollView } from "react-native";
import SideBarMenu from "../components/sideBarMenu";
import NewsFeedUserHeader from "../components/newsFeedUserHeader";
import BottomNavigationBar from "../components/bottomNavigationBar";
import NewsFeedCard from '../components/newsFeedCard';
import context from "../context";
import dummyData from '../dummyData/dummyData';


function HomeNewsFeed(props) {
  const Value = useContext(context);

  return (
    <View style={{ backgroundColor:"#111", flex:1}}>
      <NewsFeedUserHeader />
      
      <View style={{ flexDirection: "row",flex:1 ,}}>
        <SideBarMenu navigation={props.navigation.navigate}/>
        
        <View>          
          <ScrollView scrollEnabled>
          {
            dummyData.map((user,i)=>{
              const {userId,Email,displayName,profilePic,posts} = user
              const userInfo = { userId, Email, displayName, profileImgUrl: profilePic, postedImgUrl: posts[0].postPic}
               return <NewsFeedCard {...userInfo} isLiked = { true} key={i}/>
            } )
          }
            
            
           
          </ScrollView>
        </View>
        
      </View>
      <BottomNavigationBar navigation={props.navigation.navigate} />
    </View>
  );
}

export default HomeNewsFeed;
