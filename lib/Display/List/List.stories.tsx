import React from "react";
import { List } from "./List";
import { FaHome, FaUser, FaCog } from "react-icons/fa";

export default {
  component: List,
};

export const Default = () => {
  const items = [
    { text: "Home", icon: <FaHome />, onClick: () => alert("Home clicked") },
    {
      text: "Profile",
      icon: <FaUser />,
      onClick: () => alert("Profile clicked"),
    },
    {
      text: "Settings",
      icon: <FaCog />,
      onClick: () => alert("Settings clicked"),
    },
  ];

  return <List items={items} />;
};

export const CustomColors = () => {
  const items = [
    { text: "Home", icon: <FaHome />, onClick: () => alert("Home clicked") },
    {
      text: "Profile",
      icon: <FaUser />,
      onClick: () => alert("Profile clicked"),
    },
    {
      text: "Settings",
      icon: <FaCog />,
      onClick: () => alert("Settings clicked"),
    },
  ];

  return (
    <List
      items={items}
      fromColor="#00F260" // Start color (e.g., green)
      toColor="#0575E6" // End color (e.g., blue)
      textColor="#ffffff"
    />
  );
};

export const WithoutIcons = () => {
  const items = [
    { text: "Home", onClick: () => alert("Home clicked") },
    { text: "Profile", onClick: () => alert("Profile clicked") },
    { text: "Settings", onClick: () => alert("Settings clicked") },
  ];

  return <List items={items} />;
};

export const CustomFont = () => {
  const items = [
    { text: "Home", icon: <FaHome />, onClick: () => alert("Home clicked") },
    {
      text: "Profile",
      icon: <FaUser />,
      onClick: () => alert("Profile clicked"),
    },
    {
      text: "Settings",
      icon: <FaCog />,
      onClick: () => alert("Settings clicked"),
    },
  ];

  return (
    <List
      items={items}
      textColor="#000000"
      fontFamily="'Comic Sans MS', cursive, sans-serif"
    />
  );
};
