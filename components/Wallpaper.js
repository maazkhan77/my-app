import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import ImageCard from "./ImageCard";
import { DataContext } from "../context/dataContext";

let imgs = [
  {
    id: 1,
    url: "../assets/pexels-gotta-be-worth-it-919278.jpg",
  },
  {
    id: 2,
    url: "../assets/pexels-ian-turnell-709552.jpg",
  },
  {
    id: 3,
    url: "../assets/pexels-james-wheeler-417074.jpg",
  },
  {
    id: 4,
    url: "../assets/pexels-pixabay-206359.jpg",
  },
  {
    id: 5,
    url: "../assets/pexels-pixabay-53184.jpg",
  },
  {
    id: 6,
    url: "../assets/pexels-marianna-ole-757889.jpg",
  },
  {
    id: 7,
    url: "../assets/pexels-m-venter-1659438.jpg",
  },
]

const Wallpaper = () => {
  const {setData} = useContext(DataContext)
  useEffect(() => {
    setData(imgs)
  }, [])
  // const handleImageLoad = async () => {
  //   const response = await axios("https://picsum.photos/v2/list");
  //   setData(response.data);
  // };
  // useEffect(() => {
  //   handleImageLoad();
  // }, []);
  return (
    <View style={{ flex: 1, width: "100%" }}>
      <ImageCard />
    </View>
  );
};

export default Wallpaper;

const styles = StyleSheet.create({});
