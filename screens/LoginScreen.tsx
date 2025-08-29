import React, { useState } from "react";
import { View, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../src/firebaseConfig";
import LoginHeader from "../components/LoginHeader";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import ErrorMessage from "../components/ErrorMessage";

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      // Navigation will be handled automatically by the auth state change
    } catch (e: any) {
      let errorMessage = "An error occurred during login";
      
      if (e.code === "auth/user-not-found") {
        errorMessage = "No account found with this email";
      } else if (e.code === "auth/wrong-password") {
        errorMessage = "Incorrect password";
      } else if (e.code === "auth/invalid-email") {
        errorMessage = "Invalid email address";
      } else if (e.code === "auth/too-many-requests") {
        errorMessage = "Too many failed attempts. Please try again later";
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleSignupPress = () => {
    navigation.navigate("Signup");
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
              placeholder="Enter your password"
              iconName="lock-closed"
              secureTextEntry
            />
            
            <ErrorMessage message={error} />
            
            <CustomButton
              title="Sign In"
              onPress={handleLogin}
              loading={loading}
              disabled={loading}
            />
            
            <CustomButton
              title="Create New Account"
              onPress={handleSignupPress}
              variant="secondary"
            />
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
});
