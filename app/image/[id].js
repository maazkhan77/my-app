import { View, Text } from "react-native";
import React, { useContext, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { DataContext } from "../../context/dataContext";
import { Image, SpeedDial } from "@rneui/themed";
import { ActivityIndicator } from "react-native";
import ManageWallpaper, { TYPE } from "react-native-manage-wallpaper";

const callback = (res) => {
  console.log("Response: ", res);
};

const SetAsWallpaper = () => {
  const imgId = useLocalSearchParams();
  const { data } = useContext(DataContext);
  const [open, setOpen] = useState(false);
  let image = data.find((item) => parseInt(item.id) === parseInt(imgId.id));
  const handleSetWallpaper = (type) => {
    ManageWallpaper.setWallpaper(
      {
        uri: "https://i.pinimg.com/originals/76/5e/1d/765e1dc8cb1cc115fb3b0b39a895fdeb.jpg",
      },
      callback,
      TYPE.HOME
    );
  };
  return (
    <View style={{ flex: 1, width: "100%" }}>
      <Image
        source={require("../../assets/pexels-pixabay-206359.jpg")}
        style={{
          height: undefined,
          width: undefined,
          resizeMode: "contain",
          aspectRatio: 1,
        }}
        PlaceholderContent={<ActivityIndicator />}
      />
      <SpeedDial
        isOpen={open}
        // icon={{ name: "edit", color: "#fff" }}
        title={"Set As Wallpaper"}
        openIcon={{ name: "close", color: "#fff" }}
        onOpen={() => setOpen(!open)}
        onClose={() => setOpen(!open)}
      >
        <SpeedDial.Action
          icon={{ name: "home", color: "#fff" }}
          title="Home"
          onPress={() => handleSetWallpaper("home")}
        />
        <SpeedDial.Action
          icon={{ name: "lock", color: "#fff" }}
          title="Lock Screen"
          onPress={() => handleSetWallpaper("lock")}
        />
        <SpeedDial.Action
          icon={{
            name: "images",
            color: "#fff",
            type: "font-awesome-5",
            size: 21,
          }}
          title="Both"
          onPress={() => handleSetWallpaper("both")}
        />
      </SpeedDial>
    </View>
  );
};

export default SetAsWallpaper;
