import React, { useEffect } from "react";
import { View, StyleSheet, Image, StatusBar } from "react-native";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    // Chuyển sang màn hình Onboarding sau 2 giây
    const timer = setTimeout(() => {
      navigation.replace("Onboarding");
    }, 2000);

    return () => clearTimeout(timer); // Dọn dẹp bộ nhớ khi component unmount
  }, []);

  return (
    <View style={styles.container}>
      {/* Ẩn thanh trạng thái hoặc để màu cùng tông với nền */}
      <StatusBar backgroundColor="#53B175" barStyle="light-content" />
      
      <Image
        // Đường dẫn ảnh từ máy của bạn
        source={require("../assets/Group 2.png")} 
        style={styles.image}
        // Giúp ảnh giữ đúng tỷ lệ và nằm gọn trong khung
        resizeMode="contain" 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#53B175", // Màu xanh đặc trưng của Nectar
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    // Chỉnh kích thước logo cho vừa vặn (thường chiếm khoảng 60-70% chiều ngang)
    width: "70%",
    height: 150,
  },
});