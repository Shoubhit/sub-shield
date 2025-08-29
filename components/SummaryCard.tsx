import React from "react";
import { View, Text, StyleSheet } from "react-native";

type SummaryCardProps = {
  title: string;
  value: string;
};

export default function SummaryCard({ title, value }: SummaryCardProps) {
  return (
    <View style={styles.summaryCard}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  summaryCard: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 14,
    color: "#999",
    marginBottom: 8,
  },
  cardValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
});
