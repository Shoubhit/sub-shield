import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import StepIndicator from "../components/StepIndicator";
import SearchInput from "../components/SearchInput";
import CardOptionItem from "../components/CardOptionItem";
import CustomButton from "../components/CustomButton";

export default function AddSubscriptionScreen({ navigation }: any) {
  const [searchQuery, setSearchQuery] = useState("");
  const [trialEnabled, setTrialEnabled] = useState(true);
  const [expireAfter, setExpireAfter] = useState("1 month");
  const [renewalAlerts, setRenewalAlerts] = useState("3 days before");

  const handleCreateVirtualCard = () => {
    console.log("Creating virtual card with options:", {
      trialEnabled,
      expireAfter,
      renewalAlerts,
    });
    // Navigate to next step or create card
  };

  const handleExpireAfterPress = () => {
    console.log("Expire after pressed");
    // Navigate to expire after selection screen
  };

  const handleRenewalAlertsPress = () => {
    console.log("Renewal alerts pressed");
    // Navigate to renewal alerts selection screen
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Add Subscription</Text>
          <StepIndicator currentStep={1} totalSteps={3} />
        </View>

        {/* Select Merchant Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Merchant</Text>
          <SearchInput
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Search merchant"
          />
        </View>

        {/* Card Options Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Card Options</Text>
          <View style={styles.cardOptionsContainer}>
            <CardOptionItem
              label="Trial"
              type="toggle"
              toggleValue={trialEnabled}
              onToggleChange={setTrialEnabled}
            />
            <CardOptionItem
              label="Expire after"
              value={expireAfter}
              type="select"
              onSelectPress={handleExpireAfterPress}
            />
            <CardOptionItem
              label="Renewal Alerts"
              value={renewalAlerts}
              type="select"
              onSelectPress={handleRenewalAlertsPress}
            />
          </View>
        </View>

        {/* Action Button */}
        <View style={styles.buttonContainer}>
          <CustomButton
            title="Create Virtual Card"
            onPress={handleCreateVirtualCard}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F6F0",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1E3A8A",
    textAlign: "center",
    marginBottom: 8,
  },
  section: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1E3A8A",
    marginBottom: 16,
  },
  cardOptionsContainer: {
    backgroundColor: "white",
    borderRadius: 16,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonContainer: {
    paddingHorizontal: 24,
    marginTop: 16,
  },
});
