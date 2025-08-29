import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function LoginHeader() {
  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <Ionicons name="shield-checkmark" size={60} color="#2E5BFF" />
      </View>
      <Text style={styles.title}>Welcome to SubShield</Text>
      <Text style={styles.subtitle}>Manage your subscriptions with ease</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    marginBottom: 40,
  },
  logoContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#F0F4FF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#2E5BFF",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    lineHeight: 22,
  },
});
