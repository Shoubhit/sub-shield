import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type ManageCardsButtonProps = {
  onPress: () => void;
};

export default function ManageCardsButton({ onPress }: ManageCardsButtonProps) {
  return (
    <TouchableOpacity style={styles.manageButton} onPress={onPress}>
      <Ionicons name="card" size={20} color="#666" />
      <Text style={styles.manageButtonText}>Manage Cards</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  manageButton: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    marginHorizontal: 20,
    marginBottom: 30,
    borderRadius: 12,
    gap: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  manageButtonText: {
    color: "#666",
    fontSize: 16,
    fontWeight: "500",
  },
});
