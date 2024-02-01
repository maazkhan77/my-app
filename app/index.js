import { Stack } from "expo-router";
import { View, Text } from "react-native";
import Wallpaper from "../components/Wallpaper";
import { Button, Icon } from "@rneui/themed";

const Home = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", width: '100%' }}>
      <Stack.Screen
        options={{
          title: "Wallpapers",
          headerStyle: { backgroundColor: "#f4511e" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerRight: () => (
            <Button radius={"sm"} type="clear">
              <Icon name="gear" type="font-awesome" color="white" />
            </Button>
          ),
        }}
      />
      <Wallpaper />
    </View>
  );
};

export default Home;
