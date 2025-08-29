import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CustomToggle from "./CustomToggle";

type CardOptionItemProps = {
  label: string;
  value?: string;
  type: "toggle" | "select";
  toggleValue?: boolean;
  onToggleChange?: (value: boolean) => void;
  onSelectPress?: () => void;
};

export default function CardOptionItem({
  label,
  value,
  type,
  toggleValue = false,
  onToggleChange,
  onSelectPress,
}: CardOptionItemProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      
      {type === "toggle" ? (
        <CustomToggle
          value={toggleValue}
          onValueChange={onToggleChange || (() => {})}
        />
      ) : (
        <TouchableOpacity style={styles.selectContainer} onPress={onSelectPress}>
          <Text style={styles.selectValue}>{value}</Text>
          <Ionicons name="chevron-forward" size={20} color="#666" />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  selectContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  selectValue: {
    fontSize: 16,
    color: "#2E5BFF",
    fontWeight: "500",
  },
});
