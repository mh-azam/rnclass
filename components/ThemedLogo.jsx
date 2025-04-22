import { Image, useColorScheme } from "react-native";

// images
import DarkLogo from "../assets/img/book-dark.png";
import LightLogo from "../assets/img/book-light.png";

const ThemedLogo = () => {
  const colorScheme = useColorScheme();

  const logo = colorScheme === "dark" ? DarkLogo : LightLogo;

  return <Image source={logo} style={{ width: 100, height: 100 }} />;
};

export default ThemedLogo;
