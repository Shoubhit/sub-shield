// screens/HomeScreen.tsx
import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import Header from "../components/Header";
import SummaryCard from "../components/SummaryCard";
import RenewalItem from "../components/RenewalItem";
import AddSubscriptionButton from "../components/AddSubscriptionButton";
import ManageCardsButton from "../components/ManageCardsButton";

// Summary Cards Section
const SummarySection = () => (
  <View style={styles.summarySection}>
    <SummaryCard title="Total Monthly" value="$84.27" />
    <SummaryCard title="Active Subscriptions" value="6" />
  </View>
);

// Upcoming Renewals Section
const UpcomingRenewals = () => {
  const renewals = [
    { name: "Hulu", value: "Aug 29" },
    { name: "Spotify", value: "Sep 2" },
    { name: "Prime", value: "$10.99" },
    { name: "Netflix", value: "$14.99" },
  ];

  return (
    <View style={styles.renewalsSection}>
      <Text style={styles.sectionTitle}>Upcoming Renewals</Text>
      {renewals.map((renewal, index) => (
        <RenewalItem
          key={index}
          name={renewal.name}
          value={renewal.value}
          onPress={() => console.log(`Pressed ${renewal.name}`)}
        />
      ))}
    </View>
  );
};

// Main HomeScreen Component
export default function HomeScreen() {
  const handleAddSubscription = () => {
    console.log("Add subscription pressed");
    navigation.navigate("AddSubscription");
  };

  const handleManageCards = () => {
    console.log("Manage cards pressed");
    // Navigate to manage cards screen
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header userName="Shoubhit" />
      <SummarySection />
      <UpcomingRenewals />
      <AddSubscriptionButton onPress={handleAddSubscription} />
      <ManageCardsButton onPress={handleManageCards} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F6F0", // Light beige background
  },
  summarySection: {
    flexDirection: "row",
    paddingHorizontal: 20,
    gap: 15,
    marginBottom: 30,
  },
  renewalsSection: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },
});
