import React, { Component } from "react";
import { Tabs } from "expo-router";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { View } from "react-native";

const TabNavigation = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About Us",
          tabBarIcon: ({ color }) => (
            <AntDesign size={28} name="infocirlceo" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="user" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabNavigation;
