import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from '@expo/vector-icons';
const { width } = Dimensions.get("screen");

function newsFeedUserHeader() {
  return (

    <LinearGradient colors={['#111', '#111', '#111']} start={{ x: 0.3, y: -1.5 }} locations={[0.999999, 0.5, 0.699]} style={style.headerContainer}>
      <View style={{ flexDirection: 'row', width: width, }}>

        <View
          style={{
            margin: 20,
            flexDirection: "row",
          }}>
          <Image
            source={require("../assets/alex-suprun-ZHvM3XIOHoE-unsplash.jpg")}
            style={style.profileImg}
          />

        </View>

        <View style={{ alignSelf: "center" }}>
          <Text style={{ color: "white", fontSize: 18 }}>
            JoHn_12_Doe
              </Text>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 100, marginTop: 10 }}>
            <Text style={{ color: "white" }}>
              Offers
                </Text>
            <Text style={{ color: "white" }}>
              Selling
                </Text>
          </View>
        </View>

        <View style={{ alignSelf: "center", justifyContent: 'flex-end', marginTop: - 40, width: (width - 50) / 3 }}>
          <Feather name="message-circle" size={24} color="white" style={{ textAlign: 'right', alignSelf: "flex-end" }} />

        </View>


      </View>
    </LinearGradient>


  );
}
const style = StyleSheet.create({
  headerContainer: {
    width: width,
    height: 150,
    backgroundColor: "#572D90", 
    
 
   
  },
  
  profileImg: {
    width: 110,
    height: 110,
    borderRadius: 110,    
    marginTop: 10,

  zIndex:2000
  },
});

export default newsFeedUserHeader;
