import React, { useState } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Image, 
  SafeAreaView, 
  StatusBar 
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";

export default function Location({ navigation }) {
  const [zone, setZone] = useState("Banasree");
  const [area, setArea] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Nút Back ở góc trên bên trái */}
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="chevron-back" size={28} color="#181725" />
      </TouchableOpacity>

      <View style={styles.content}>
        {/* Hình ảnh minh họa bản đồ chuẩn theo mẫu */}
        <View style={styles.imageBox}>
          <Image 
            source={require("../assets/illustration.png")} // Thay bằng tên file ảnh bản đồ của bạn
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        {/* Tiêu đề và mô tả */}
        <Text style={styles.title}>Select Your Location</Text>
        <Text style={styles.sub}>
          Switch on your location to stay in tune with{"\n"}what’s happening in your area
        </Text>

        {/* Phần chọn Zone */}
        <View style={styles.inputBox}>
          <Text style={styles.label}>Your Zone</Text>
          <View style={styles.pickerBox}>
            <Picker
              selectedValue={zone}
              onValueChange={(itemValue) => setZone(itemValue)}
              dropdownIconColor="#181725"
              style={styles.picker}
            >
              <Picker.Item label="Banasree" value="Banasree" />
              <Picker.Item label="Dhaka" value="Dhaka" />
              <Picker.Item label="Hanoi" value="Hanoi" />
            </Picker>
          </View>
        </View>

        {/* Phần chọn Area */}
        <View style={styles.inputBox}>
          <Text style={styles.label}>Your Area</Text>
          <View style={styles.pickerBox}>
            <Picker
              selectedValue={area}
              onValueChange={(itemValue) => setArea(itemValue)}
              dropdownIconColor="#181725"
              style={styles.picker}
            >
              <Picker.Item label="Types of your area" value="" color="#B1B1B1" />
              <Picker.Item label="Area 1" value="Area1" />
              <Picker.Item label="Area 2" value="Area2" />
            </Picker>
          </View>
        </View>

        {/* Nút Submit chuẩn bo góc và màu sắc */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  content: {
    flex: 1,
    paddingHorizontal: 25,
    alignItems: "center", // Căn giữa toàn bộ nội dung
  },
  imageBox: {
    marginTop: 30,
    marginBottom: 40,
    width: 220,
    height: 170,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 26,
    fontWeight: "600",
    textAlign: "center",
    color: "#181725",
  },
  sub: {
    textAlign: "center",
    color: "#7C7C7C",
    fontSize: 16,
    lineHeight: 22,
    marginTop: 15,
    marginBottom: 40,
  },
  inputBox: {
    width: "100%", // Chiếm hết chiều ngang
    marginBottom: 30,
  },
  label: {
    color: "#7C7C7C",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 0,
  },
  pickerBox: {
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2E2",
    height: 50,
    justifyContent: "center",
  },
  picker: {
    marginLeft: -10, // Căn chỉnh lùi lại để text picker thẳng hàng với label
  },
  button: {
    backgroundColor: "#53B175",
    paddingVertical: 20,
    borderRadius: 19,
    width: "100%",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
  },
});