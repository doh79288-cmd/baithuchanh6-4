import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, StatusBar } from "react-native";

export default function Onboarding({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Ẩn thanh trạng thái để ảnh tràn toàn màn hình */}
      <StatusBar translucent backgroundColor="transparent" />
      
      <ImageBackground
        source={require("../assets/8140 1.png")} // File ảnh nền của bạn
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          {/* Logo quả cà rốt ở giữa phía trên nội dung */}
          <Image 
            source={require("../assets/Group (1).png")} // Sử dụng logo từ Splash
            style={styles.logoIcon}
            resizeMode="contain"
          />

          <Text style={styles.title}>Welcome{"\n"}to our store</Text>
          <Text style={styles.sub}>Get groceries in as fast as one hour</Text>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text style={styles.btnText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.1)", // Phủ một lớp tối nhẹ nếu ảnh quá sáng
    justifyContent: "flex-end", // Đẩy toàn bộ nội dung xuống dưới
    alignItems: "center",
    paddingBottom: 90, // Khoảng cách từ nút đến đáy màn hình
    paddingHorizontal: 30,
  },
  logoIcon: {
    width: 50,
    height: 60,
    marginBottom: 10,
  },
  title: {
    fontSize: 48,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
    lineHeight: 55,
  },
  sub: {
    fontSize: 16,
    color: "rgba(252, 252, 252, 0.7)",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 40,
  },
  btn: {
    backgroundColor: "#53B175",
    paddingVertical: 20,
    borderRadius: 19,
    width: "100%", // Nút dài hết chiều ngang trừ padding
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
  },
});