import React from "react";
import { View, Text, StyleSheet, Dimensions,TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
const { height } = Dimensions.get("screen");
function sideBarMenu({navigation}) {
 

  return (
    <LinearGradient colors={['#00695c', '#311b92']} start={{ x: 0.1, y: -1.5 }} locations={[0.6, 0.95]} style={style.sideBarMenuContainer}>
      
      <View style={style.menuItems}>
        <Text style={style.menuItemsText}> Popular </Text>
        <Entypo
          name="circle"
          size={10}
          color="black"
          style={{
            alignSelf: "center",
            color: "white",
            textAlign: "center",
            paddingTop: 3,
          }}
        />
      </View>
      <View style={style.menuItems}>
        <Text style={style.menuItemsText}> Trending</Text>
        <Entypo
          name="circle"
          size={10}
          color="black"
          style={{
            alignSelf: "center",
            color: "white",
            textAlign: "center",
            paddingTop: 3,
          }}
        />
      </View>
      <TouchableOpacity onPress={()=>navigation('Explore')}>

      <View style={style.menuItems}>
        <Text style={style.menuItemsText}>Explore</Text>
        <Entypo
          name="circle"
          size={10}
          color="black"
          style={{
            alignSelf: "center",
            color: "white",
            textAlign: "center",
            paddingTop: 3,
          }}
        />
      </View>
      </TouchableOpacity>
    

    </LinearGradient>
   
 
  );
}

const style = StyleSheet.create({
  sideBarMenuContainer: {
    height: height - 230,
    width: 50,
    backgroundColor: "#1EB9A7",    
    justifyContent: "space-evenly",
    alignContent: "center",
    alignSelf: 'flex-end',
    borderWidth: 0,
  },
  menuItems: {
    margin: 5,
  //  marginTop: 100,
    transform: [{ rotate: "-90deg" }],
    width: 150,
    fontSize: 22,
    flexDirection: "row",
    alignSelf: "center",
    textAlign: "center",
    color: "white",
  },
  menuItemsText: {
    margin: 5,
    fontSize: 22,
    alignSelf: "center",
    textAlign: "center",
    color: "white",
  },
 
});
export default sideBarMenu;
