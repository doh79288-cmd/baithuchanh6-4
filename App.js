import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Entypo, Feather, MaterialCommunityIcons } from "@expo/vector-icons";

// Import các màn hình
import SplashScreen from "./screens/SplashScreen";
import Onboarding from "./screens/Onboarding";
import SignIn from "./screens/SignIn";
import Number from "./screens/Number";
import OTP from "./screens/OTP";
import Location from "./screens/Location";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Home from "./screens/Home";
import Explore from "./screens/Explore";
import Search from "./screens/Search";
import Beverages from "./screens/Beverages";
import Filters from "./screens/Filters";
import ProductDetail from "./screens/ProductDetail";
import Cart from "./screens/Cart";
import Favourite from "./screens/Favourite";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Cấu trúc Bottom Tabs
function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Shop" // Đặt Shop làm trang mặc định khi vào MainTabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#53B175",
        tabBarInactiveTintColor: "#181725",
        tabBarStyle: { height: 70, paddingBottom: 10 },
        tabBarIcon: ({ color, size }) => {
          // Chỉ định nghĩa icon cho 5 nút hiển thị chính
          if (route.name === "Shop") return <Entypo name="shop" size={size} color={color} />;
          if (route.name === "ExploreTab") return <MaterialCommunityIcons name="text-search" size={size} color={color} />;
          if (route.name === "Cart") return <Feather name="shopping-cart" size={size} color={color} />;
          if (route.name === "Favourite") return <Ionicons name="heart-outline" size={size} color={color} />;
          if (route.name === "Account") return <Feather name="user" size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Shop" component={Home} />
      <Tab.Screen name="ExploreTab" component={Explore} options={{ title: "Explore" }} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen 
        name="Search" 
        component={Search} 
        options={{ 
          tabBarItemStyle: { display: 'none' },
          tabBarButton: () => null, // Ẩn nút để không tạo khoảng trống
        }} 
      />

      <Tab.Screen name="Favourite" component={Favourite} />
      <Tab.Screen name="Account" component={Home} /> 
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Splash" 
        screenOptions={{ headerShown: false }}
      >
        {/* Luồng khởi đầu & Auth */}
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Number" component={Number} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />

        {/* Luồng chính: Vào thẳng MainTabs (Mặc định hiện trang Shop/Home) */}
        <Stack.Screen name="Main" component={MainTabs} />
        
        {/* Các màn hình phụ khác */}
        <Stack.Screen name="Filters" component={Filters} />
        <Stack.Screen name="Beverages" component={Beverages} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}