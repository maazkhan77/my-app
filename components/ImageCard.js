import { ActivityIndicator, FlatList, Pressable, StyleSheet, View } from "react-native";
import React, { useContext } from "react";
import { Button, Image } from "@rneui/themed";
import { Link } from "expo-router";
import { DataContext } from "../context/dataContext";

const ImageCard = () => {
  const {data} = useContext(DataContext)
  return (
    <FlatList
      data={data}
      style={styles.list}
      keyExtractor={(e) => e.id}
      renderItem={({ item }) => (
        <Link
          href={{
            pathname: "/image/[id]",
            params: { id: item.id },
          }}
          asChild
        >
          <Pressable>
            <Image
              source={require("../assets/pexels-pixabay-206359.jpg")}
              containerStyle={styles.item}
              style={{
                height: undefined,
                width: undefined,
                resizeMode: "contain",
                aspectRatio: 1.5,
              }}
              PlaceholderContent={<ActivityIndicator />}
            />
          </Pressable>
        </Link>
      )}
    />
  );
};

export default ImageCard;

const styles = StyleSheet.create({
  list: {
    width: "100%",
    backgroundColor: "#000",
  },
  item: {
    aspectRatio: 1.5,
    width: "100%",
    flex: 1,
  },
});
