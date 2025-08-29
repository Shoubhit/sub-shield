import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type RenewalItemProps = {
  name: string;
  value: string;
  onPress: () => void;
};

export default function RenewalItem({ name, value, onPress }: RenewalItemProps) {
  return (
    <TouchableOpacity style={styles.renewalItem} onPress={onPress}>
      <Text style={styles.renewalName}>{name}</Text>
      <View style={styles.renewalRight}>
        <Text style={styles.renewalValue}>{value}</Text>
        <Ionicons name="chevron-forward" size={20} color="#666" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  renewalItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 18,
    paddingHorizontal: 20,
    marginBottom: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  renewalName: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
  renewalRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  renewalValue: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
});
