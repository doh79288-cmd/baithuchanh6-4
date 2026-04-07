import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SignIn({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Mask Group.png")} 
        style={styles.image}
        />

      <View style={styles.content}>
        <Text style={styles.title}>
          Get your groceries{`\n`}with nectar
        </Text>

        <View style={styles.inputWrapper}>
          {/* Biến vùng nhập thành TouchableOpacity để chuyển sang trang Number */}
          <TouchableOpacity 
            style={styles.phoneRow}
            onPress={() => navigation.navigate("Number")}
          >
            <Text style={styles.flag}>VN</Text>
            <Text style={{ fontSize: 18, color: "#181725", marginLeft: 5 }}>+84</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.or}>Or connect with social media</Text>

        <TouchableOpacity style={styles.googleBtn}>
          <Ionicons name="logo-google" size={20} color="#fff" />
          <Text style={styles.btnText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.fbBtn}>
          <Ionicons name="logo-facebook" size={20} color="#fff" />
          <Text style={styles.btnText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  image: { width: "100%", height: 250, resizeMode: "cover" },
  content: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  inputWrapper: { marginBottom: 20 },
  phoneRow: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingBottom: 10,
  },
  flag: { fontSize: 20, marginRight: 10 },
  or: { textAlign: "center", color: "#999", marginVertical: 20 },
  googleBtn: {
    flexDirection: "row",
    backgroundColor: "#5383EC",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  fbBtn: {
    flexDirection: "row",
    backgroundColor: "#4A66AC",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: { color: "#fff", marginLeft: 10, fontWeight: "bold" },
});