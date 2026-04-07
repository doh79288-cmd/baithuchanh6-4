import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image, // Thêm dòng này để sử dụng component Image
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SignUp({ navigation }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      
      {/* Nút Back - Thêm mới */}
      <TouchableOpacity 
        style={{ paddingHorizontal: 25, paddingTop: 10 }} 
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="chevron-back" size={28} color="#181725" />
      </TouchableOpacity>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          
          {/* Logo Cà rốt - Đã thay đổi emoji bằng hình ảnh */}
          <View style={styles.logoBox}>
            {/* Thay thế: <Text style={styles.logoText}></Text> bằng Image bên dưới */}
            <Image
              source={require("../assets/Group 3.png")} // Đường dẫn tới file ảnh của bạn
              style={styles.logoImage} // Sử dụng style mới định nghĩa bên dưới
              resizeMode="contain"
            />
          </View>

          {/* Tiêu đề & Mô tả */}
          <Text style={styles.title}>Sign Up</Text>
          <Text style={styles.subTitle}>
            Enter your credentials to continue
          </Text>

          {/* Ô nhập Username */}
          <View style={styles.inputBox}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your username"
              placeholderTextColor="#B1B1B1"
              value={username}
              onChangeText={setUsername}
            />
          </View>

          {/* Ô nhập Email với Icon tick xanh */}
          <View style={styles.inputBox}>
            <Text style={styles.label}>Email</Text>
            <View style={styles.inputRow}>
              <TextInput
                style={[styles.input, { flex: 1, borderBottomWidth: 0 }]}
                placeholder="Enter your email"
                placeholderTextColor="#B1B1B1"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
              {/* Hiện icon tick xanh nếu email có dữ liệu */}
              {email.length > 0 && (
                <Ionicons
                  name="checkmark"
                  size={20}
                  color="#53B175"
                  style={styles.icon}
                />
              )}
            </View>
          </View>

          {/* Ô nhập Password với Icon ẩn/hiện */}
          <View style={styles.inputBox}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.inputRow}>
              <TextInput
                style={[styles.input, { flex: 1, borderBottomWidth: 0 }]}
                placeholder="Enter your password"
                placeholderTextColor="#B1B1B1"
                secureTextEntry={!passwordVisible} // Ẩn/hiện mật khẩu
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity
                onPress={() => setPasswordVisible(!passwordVisible)}
                style={styles.icon}
              >
                <Ionicons
                  name={passwordVisible ? "eye-off" : "eye"}
                  size={20}
                  color="#7C7C7C"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Văn bản Điều khoản & Chính sách */}
          <View style={styles.termsBox}>
            <Text style={styles.termsText}>
              By continuing you agree to our{" "}
              <Text style={styles.linkText}>Terms of Service</Text>
              {"\n"}and <Text style={styles.linkText}>Privacy Policy</Text>.
            </Text>
          </View>

          {/* Nút Sign Up */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.buttonText}>Sing Up</Text>
          </TouchableOpacity>

          {/* Dòng chữ Đăng nhập */}
          <View style={styles.loginRow}>
            <Text style={styles.loginLabel}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.loginText}>Signup</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollContent: {
    paddingHorizontal: 25,
    paddingBottom: 30,
  },
  logoBox: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 40,
  },
  // Style mới cho logo ảnh (thay thế logoText cũ)
  logoImage: {
    width: 50, // Căn chỉnh kích thước ảnh phù hợp
    height: 50,
  },
  // logoText: {
  //   fontSize: 50, // Cỡ logo cà rốt - Đã comment lại vì không dùng nữa
  // },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#181725",
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 16,
    color: "#7C7C7C",
    marginBottom: 40,
  },
  inputBox: {
    marginBottom: 25,
  },
  label: {
    fontSize: 16,
    color: "#7C7C7C",
    fontWeight: "600",
    marginBottom: 5,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2E2",
  },
  input: {
    fontSize: 18,
    color: "#181725",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2E2",
  },
  icon: {
    paddingLeft: 10,
  },
  termsBox: {
    marginTop: 10,
    marginBottom: 30,
  },
  termsText: {
    fontSize: 14,
    color: "#7C7C7C",
    lineHeight: 20,
  },
  linkText: {
    color: "#53B175", // Màu xanh cho liên kết
  },
  button: {
    backgroundColor: "#53B175", // Màu xanh Nectar
    padding: 20,
    borderRadius: 15,
  },
  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  loginRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
  },
  loginLabel: {
    fontSize: 14,
    color: "#181725",
  },
  loginText: {
    color: "#53B175", // Màu xanh cho liên kết
    fontWeight: "bold",
    fontSize: 14,
  },
});