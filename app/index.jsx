import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Logo from "../assets/img/book-light.png";

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img} />
      {/*<Text style={[styles.title, { color: "purple" }]}>The Number 1</Text>*/}
      <Text style={styles.title}>The Number 1</Text>
      <Text style={{ marginTop: 10, marginBottom: 30 }}>Reading List App</Text>
      <View style={styles.card}>
        <Text>Hello this is a card</Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e0dfe8",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  img: {
    marginVertical: 20,
    width: 100,
    height: 100,
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 5,
    boxShadow: "4px 4px rgba(0,0,0,0.1)",
  },
});
