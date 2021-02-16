import React, { useState } from "react";

import Data from '../src/dummyData/dummyData';
export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentUserInfo, setCurrentUserInfo] = useState({ id: 1, Email: "abc@gmail.com", displayName:"User_43_cv"})

  

  const getCurrentUsersNewsFeed = ()=>{
   userInfo = Data.find((user)=>user.userId === currentUserInfo.id)

   // console.log(userInfo.followers);
  }

  let value = {
    isLoading,
    setIsLoading,
    getCurrentUsersNewsFeed
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Context;
