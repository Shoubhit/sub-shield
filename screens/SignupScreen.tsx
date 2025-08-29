import React, { useState } from "react";
import { View, StyleSheet, ScrollView, KeyboardAvoidingView, Platform, Text } from "react-native";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../src/firebaseConfig";
import LoginHeader from "../components/LoginHeader";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import ErrorMessage from "../components/ErrorMessage";

export default function SignupScreen({ navigation }: any) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    if (!name.trim() || !email.trim() || !password.trim()) {
      setError("Please fill in all fields");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const cred = await createUserWithEmailAndPassword(auth, email.trim(), password);
      await updateProfile(cred.user, { displayName: name.trim() });
      // Navigation will be handled automatically by the auth state change
    } catch (e: any) {
      let errorMessage = "An error occurred during signup";
      
      if (e.code === "auth/email-already-in-use") {
        errorMessage = "An account with this email already exists";
      } else if (e.code === "auth/invalid-email") {
        errorMessage = "Invalid email address";
      } else if (e.code === "auth/weak-password") {
        errorMessage = "Password is too weak. Please choose a stronger password";
      } else if (e.code === "auth/operation-not-allowed") {
        errorMessage = "Email/password accounts are not enabled";
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleLoginPress = () => {
    navigation.navigate("Login");
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.content}>
          <LoginHeader />
          
          <View style={styles.formContainer}>
            <Text style={styles.formTitle}>Create Your Account</Text>
            <Text style={styles.formSubtitle}>Join SubShield to start managing your subscriptions</Text>
            
            <CustomInput
              label="Full Name"
              value={name}
              onChangeText={setName}
              placeholder="Enter your full name"
              iconName="person"
              autoCapitalize="words"
            />
            
            <CustomInput
              label="Email Address"
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
              iconName="mail"
              autoCapitalize="none"
            />
            
            <CustomInput
              label="Password"
              value={password}
              onChangeText={setPassword}
              placeholder="Create a password"
              iconName="lock-closed"
              secureTextEntry
            />
            
            <ErrorMessage message={error} />
            
            <CustomButton
              title="Create Account"
              onPress={handleSignup}
              loading={loading}
              disabled={loading}
            />
            
            <View style={styles.loginPrompt}>
              <Text style={styles.loginText}>Already have an account? </Text>
              <CustomButton
                title="Sign In Instead"
                onPress={handleLoginPress}
                variant="secondary"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F6F0",
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
  },
  content: {
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  formContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 8,
  },
  formSubtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 24,
    lineHeight: 22,
  },
  loginPrompt: {
    alignItems: "center",
    marginTop: 8,
  },
  loginText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 16,
  },
});
