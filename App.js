import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeNewsFeed from "./src/screens/HomeNewsFeed";
import UserInfo from './src/screens/UserInfo'
import Explore from './src/screens/Explore';
import Trending from './src/screens/Trending';
import Popular from './src/screens/Popular';
import Comments from './src/screens/Comments';
import { ContextProvider } from "./src/context";
const navigator = createStackNavigator(
  {
    HomeNewsFeed,
    Explore,
    Trending,
    Popular,
    UserInfo,
    Comments
  },
  {
    initialRouteName: "HomeNewsFeed",
    headerMode: "none",
  }
);
const App = createAppContainer(navigator);

export default () => {
  return (
    <ContextProvider>
      <App />
    </ContextProvider>
  );
};
