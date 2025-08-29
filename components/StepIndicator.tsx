import React from "react";
import { View, Text, StyleSheet } from "react-native";

type StepIndicatorProps = {
  currentStep: number;
  totalSteps: number;
};

export default function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.stepText}>STEP {currentStep} OF {totalSteps}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  stepText: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
    textAlign: "center",
  },
});
