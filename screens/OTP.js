import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function OTP({ navigation }) {
  const [code, setCode] = useState("");

  // Hàm xử lý chuyển trang dùng chung
  const handleVerify = () => {
    // Bạn có thể thêm điều kiện kiểm tra độ dài code ở đây nếu muốn
    if (code.length === 4) {
      navigation.navigate("Location");
    }
  };

  return (
    <View style={styles.container}>
      {/* Để bàn phím không che mất các thành phần */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        {/* Nút Back */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={28} color="#181725" />
        </TouchableOpacity>

        {/* Nội dung */}
        <View style={styles.content}>
          <Text style={styles.title}>Enter your 4-digit code</Text>

          <Text style={styles.label}>Code</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            maxLength={4}
            placeholder="- - - -"
            placeholderTextColor="#7C7C7C"
            autoFocus={true}
            value={code}
            onChangeText={(text) => setCode(text)}
            
            // --- NÂNG CẤP TẠI ĐÂY ---
            returnKeyType="done" 
            onSubmitEditing={handleVerify} // Bấm Enter trên bàn phím sẽ chuyển trang
            blurOnSubmit={false}
          />
        </View>

        {/* Khu vực nút dưới cùng */}
        <View style={styles.bottomContainer}>
          <TouchableOpacity>
            <Text style={styles.resendText}>Resend Code</Text>
          </TouchableOpacity>

          {/* Nút Floating Action */}
          <TouchableOpacity
            style={[
              styles.fab,
              { opacity: code.length === 4 ? 1 : 0.6 } // Mờ đi nếu chưa đủ 4 số
            ]}
            onPress={handleVerify}
          >
            <Ionicons name="chevron-forward" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backButton: {
    paddingHorizontal: 20,
    paddingTop: 50, 
    paddingBottom: 10,
  },
  content: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#181725",
  },
  label: {
    fontSize: 14,
    color: "#7C7C7C",
    marginBottom: 10,
    fontWeight: "600",
  },
  input: {
    fontSize: 20,
    color: "#181725",
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2E2",
    paddingBottom: 10,
    letterSpacing: 20, // Tăng khoảng cách để giống 4 ô nhập
  },
  bottomContainer: {
    position: "absolute",
    bottom: 40,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  resendText: {
    color: "#53B175",
    fontSize: 16,
    fontWeight: "500",
  },
  fab: {
    backgroundColor: "#53B175",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});