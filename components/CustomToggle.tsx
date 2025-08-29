import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";

type CustomToggleProps = {
  value: boolean;
  onValueChange: (value: boolean) => void;
  disabled?: boolean;
};

export default function CustomToggle({ value, onValueChange, disabled = false }: CustomToggleProps) {
  return (
    <TouchableOpacity
      style={[
        styles.toggle,
        value ? styles.toggleOn : styles.toggleOff,
        disabled && styles.toggleDisabled,
      ]}
      onPress={() => !disabled && onValueChange(!value)}
      activeOpacity={0.8}
    >
      <View
        style={[
          styles.toggleThumb,
          value ? styles.thumbOn : styles.thumbOff,
        ]}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  toggle: {
    width: 44,
    height: 24,
    borderRadius: 12,
    justifyContent: "center",
    paddingHorizontal: 2,
  },
  toggleOn: {
    backgroundColor: "#2E5BFF",
  },
  toggleOff: {
    backgroundColor: "#E0E0E0",
  },
  toggleDisabled: {
    opacity: 0.5,
  },
  toggleThumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  thumbOn: {
    alignSelf: "flex-end",
  },
  thumbOff: {
    alignSelf: "flex-start",
  },
});
