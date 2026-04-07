import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Number({ navigation }) {
  // Để trống ban đầu để khi nhấn vào nhập, +880 từ placeholder biến mất
  const [phone, setPhone] = useState(""); 
  const [statusMessage, setStatusMessage] = useState(""); // Thông báo dưới ô nhập
  const [isPhoneValid, setIsPhoneValid] = useState(false);

  // Hàm kiểm tra logic khi người dùng gõ
  const validatePhone = (text) => {
    const cleaned = text.replace(/[^0-9]/g, ""); // Chỉ giữ lại số
    setPhone(cleaned);

    if (cleaned.length === 0) {
      setStatusMessage("");
      setIsPhoneValid(false);
    } 
    else if (cleaned[0] !== "0") {
      setStatusMessage("Số điện thoại phải bắt đầu bằng số 0");
      setIsPhoneValid(false);
    } 
    else if (cleaned.length < 10) {
      setStatusMessage("Số điện thoại không hợp lệ");
      setIsPhoneValid(false);
    } 
    else if (cleaned.length === 10) {
      setStatusMessage("Số điện thoại hợp lệ");
      setIsPhoneValid(true);
    } 
    else {
      setStatusMessage("Số điện thoại không hợp lệ");
      setIsPhoneValid(false);
    }
  };

  const handleNext = () => {
    if (isPhoneValid) {
      navigation.navigate("OTP");
    } else {
      Alert.alert("Thông báo", "Vui lòng nhập đúng 10 số điện thoại bắt đầu bằng số 0");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={28} color="#181725" />
        </TouchableOpacity>

        <View style={styles.content}>
          <Text style={styles.title}>Enter your mobile number</Text>
          <Text style={styles.label}>Mobile Number</Text>
          
          <View style={[
            styles.inputRow,
            phone.length > 0 && (isPhoneValid ? styles.borderValid : styles.borderInvalid)
          ]}>
            <View style={styles.countryCodeContainer}>
              <Text style={styles.countryText}>VN</Text>
            </View>
            
            <TextInput
              style={styles.input}
              keyboardType="phone-pad"
              autoFocus={true}
              value={phone}
              onChangeText={validatePhone}
              placeholder="+84" // Hiện +880 ở đây, khi gõ sẽ mất
              placeholderTextColor="#B1B1B1"
              maxLength={11}
              returnKeyType="done"
              onSubmitEditing={handleNext} // Nhấn Enter chuyển trang
            />
          </View>

          {/* Dòng thông báo trạng thái ngay dưới ô nhập */}
          {phone.length > 0 && (
            <Text style={[styles.statusText, isPhoneValid ? styles.success : styles.error]}>
              {statusMessage}
            </Text>
          )}
        </View>

        <View style={styles.footer}>
          <TouchableOpacity 
            style={[
              styles.fab, 
              { backgroundColor: isPhoneValid ? "#53B175" : "#F2F3F2" } 
            ]} 
            onPress={handleNext}
          >
            <Ionicons 
              name="chevron-forward" 
              size={30} 
              color={isPhoneValid ? "white" : "#7C7C7C"} 
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  backBtn: { paddingHorizontal: 20, paddingVertical: 15 },
  content: { paddingHorizontal: 25, marginTop: 20 },
  title: { fontSize: 26, fontWeight: "600", color: "#181725", marginBottom: 40 },
  label: { color: "#7C7C7C", fontSize: 16, fontWeight: "600", marginBottom: 10 },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2E2",
    paddingBottom: 10,
  },
  borderValid: { borderBottomColor: "#53B175" },
  borderInvalid: { borderBottomColor: "red" },
  countryCodeContainer: { marginRight: 10 },
  countryText: { fontSize: 18, color: "#181725", fontWeight: "600" },
  input: {
    flex: 1,
    fontSize: 18,
    color: "#181725",
    height: 35,
    padding: 0,
    letterSpacing: 1,
  },
  statusText: {
    marginTop: 8,
    fontSize: 13,
    fontWeight: "500",
  },
  error: { color: "red" },
  success: { color: "#53B175" },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingRight: 25,
    paddingBottom: 40,
  },
  fab: {
    width: 67,
    height: 67,
    borderRadius: 33.5,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
});