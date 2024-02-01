import { Stack } from "expo-router";
import { DataProvider } from "../context/dataContext";

const Layout = () => {
  return (
    <DataProvider>
      <Stack />
    </DataProvider>
  );
};

export default Layout;
