import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type HeaderProps = {
  userName: string;
};

export default function Header({ userName }: HeaderProps) {
  return (
    <View style={styles.header}>
      <Text style={styles.greeting}>Hi, {userName}</Text>
      <View style={styles.userIcon}>
        <Ionicons name="person" size={24} color="#4A90E2" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  greeting: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
  },
  userIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#E3F2FD",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#4A90E2",
  },
});
