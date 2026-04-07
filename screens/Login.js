import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Login({ navigation }) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      
      <TouchableOpacity 
        style={{ marginTop: 20, marginBottom: 10 }} 
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="chevron-back" size={28} color="#181725" />
      </TouchableOpacity>

      <View style={styles.logoBox}>
        <Image
          source={require("../assets/Group 3.png")} 
          style={styles.logoImage} 
          resizeMode="contain"
        />
      </View>

      <Text style={styles.title}>Login</Text>
      <Text style={styles.sub}>Enter your emails and password</Text>

      <View style={styles.inputBox}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          defaultValue="imshuvo97@gmail.com"
          style={styles.input}
        />
      </View>

      <View style={styles.inputBox}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordRow}>
          <TextInput
            secureTextEntry={!passwordVisible}
            style={styles.input}
            defaultValue="12345678"
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <Ionicons
              name={passwordVisible ? "eye" : "eye-off"}
              size={20}
              color="#999"
            />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* CHỈNH LẠI STYLE Ở ĐÂY CHO KHỚP VỚI BÊN DƯỚI */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.replace("Main")} 
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <View style={styles.signupRow}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.signup}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  logoBox: {
    alignItems: "center",
    marginTop: 30,
  },
  logoImage: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },
  sub: {
    color: "#777",
    marginBottom: 30,
  },
  inputBox: {
    marginBottom: 20,
  },
  label: {
    color: "#999",
    marginBottom: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 8,
    flex: 1,
  },
  passwordRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  forgot: {
    textAlign: "right",
    color: "#777",
    marginBottom: 20,
    marginTop: 10,
  },
  // GIỮ NGUYÊN STYLE NÀY CỦA BẠN
  button: {
    backgroundColor: "#53B175",
    padding: 20, // Tăng padding một chút cho nút to đẹp
    borderRadius: 15,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  signupRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  signup: {
    color: "#53B175",
    fontWeight: "bold",
  },
});