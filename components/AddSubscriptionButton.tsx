import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type AddSubscriptionButtonProps = {
  onPress: () => void;
};

export default function AddSubscriptionButton({ onPress }: AddSubscriptionButtonProps) {
  return (
    <TouchableOpacity style={styles.addButton} onPress={onPress}>
      <Ionicons name="add" size={24} color="white" />
      <Text style={styles.addButtonText}>Add Subscription</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: "#2E5BFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    marginHorizontal: 20,
    marginBottom: 30,
    borderRadius: 12,
    gap: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  addButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
