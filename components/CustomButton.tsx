import React from "react";
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from "react-native";

type CustomButtonProps = {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
  loading?: boolean;
  disabled?: boolean;
};

export default function CustomButton({
  title,
  onPress,
  variant = "primary",
  loading = false,
  disabled = false,
}: CustomButtonProps) {
  const buttonStyle = [
    styles.button,
    variant === "primary" ? styles.primaryButton : styles.secondaryButton,
    disabled && styles.disabledButton,
  ];

  const textStyle = [
    styles.buttonText,
    variant === "primary" ? styles.primaryText : styles.secondaryText,
    disabled && styles.disabledText,
  ];

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === "primary" ? "white" : "#2E5BFF"}
          size="small"
        />
      ) : (
        <Text style={textStyle}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  primaryButton: {
    backgroundColor: "#2E5BFF",
  },
  secondaryButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#2E5BFF",
  },
  disabledButton: {
    backgroundColor: "#E0E0E0",
    borderColor: "#E0E0E0",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
  },
  primaryText: {
    color: "white",
  },
  secondaryText: {
    color: "#2E5BFF",
  },
  disabledText: {
    color: "#999",
  },
});
