import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const { width } = Dimensions.get("screen");
const bottomNavigationBar = ({ navigation}) => {
  return (
    <View style={style.navBarContainer}>
      <TouchableOpacity style={style.navElements} onPress={() => navigation('HomeNewsFeed')}>
        <LinearGradient
          // Background Linear Gradient
          colors={["rgba(93,134,174,0.99)", "transparent"]}
          style={style.background}
        />
        <AntDesign
          name="home"
          size={25}
          color="white"
          style={{ alignSelf: "center" }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={style.navElements}>
        <LinearGradient
          // Background Linear Gradient
          colors={["rgba(93,134,174,0.99)", "transparent"]}
          style={style.background}
        />
        <AntDesign
          name="search1"
          size={25}
          color="white"
          style={{ alignSelf: "center" }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={style.navElements}>
        <LinearGradient
          // Background Linear Gradient
          colors={["rgba(93,134,174,0.99)", "transparent"]}
          style={style.background}
        />
        <Ionicons
          name="add"
          size={30}
          color="white"
          style={{ alignSelf: "center", marginLeft: 2 }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={style.navElements} onPress={() => navigation('UserInfo')}>
        <LinearGradient
          // Background Linear Gradient
          colors={["rgba(93,134,174,0.99)", "transparent"]}
          style={style.background}
        />
        <AntDesign
          name="user"
          size={25}
          color="white"
          style={{ alignSelf: "center" }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={style.navElements}>
        <LinearGradient
          // Background Linear Gradient
          colors={["rgba(93,134,174,0.99)", "transparent"]}
          style={style.background}
        />
        <AntDesign
          name="shoppingcart"
          size={25}
          color="white"
          style={{ alignSelf: "center" }}
        />
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  navBarContainer: {
    backgroundColor: "#212121",
    width: width,
    height: 80,
    alignSelf: "baseline",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "center",
  },

  navElements: {
    alignSelf: "center",
    width: 50,
    height: 50,
    backgroundColor: "#4D1F81",
    borderRadius: 15,
    alignContent: "center",
    justifyContent: "center",
  },
  background: {
    width: 50,
    height: 50,
    borderWidth: 0,
    transform: [{ rotate: "-90deg" }],
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    borderRadius: 15,
    borderWidth: 0,
  },
});
export default bottomNavigationBar;
