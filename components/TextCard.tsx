// screens/HomeScreen.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

type TextCardProps = {
    cardTitle : string,
    cardValue : string
}

export default function TextCard(props: TextCardProps) {
  return (
    <View style={styles.box}>
        <Text style={styles.text}>
        {props.cardTitle}: {props.cardValue}
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "skyblue",
    borderRadius: 10,     
    borderWidth: 2,
    borderColor: "skyblue",
    shadowColor: "#000",  
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5 
  }
});
