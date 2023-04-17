import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "./Feed";
import Profile from "./Profile";
import Favorite from "./Favorite";
import Notification from "./Notification";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false ,tabBarStyle: {height: 80} }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ tintColor }) => (
            <Image
              source={require("../assets/feedImage.png")}
              style={{ width: 24, height: 24 }}
            />
          )
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ tintColor }) => (
            <Image
              source={require("../assets/favoriteImage.png")}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ tintColor }) => (
            <Image
              source={require("../assets/notificationImage.png")}
              style={{ width: 24, height: 24 }}
            />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ tintColor }) => (
            <Icon name="account" color="black" size={24} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;
