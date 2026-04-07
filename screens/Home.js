import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Dimensions
} from 'react-native';
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function Home({ navigation }) {
  // Home.js
const ProductCard = ({ name, unit, price, image }) => (
  <View style={styles.card}> {/* Đổi cái bọc ngoài thành View để tránh xung đột */}
    <View style={styles.imageContainer}>
      <Image source={image} style={styles.cardImage} resizeMode="contain" />
    </View>
    <Text style={styles.cardName} numberOfLines={1}>{name}</Text>
    <Text style={styles.cardUnit}>{unit}</Text>
    <View style={styles.cardFooter}>
      <Text style={styles.cardPrice}>${price}</Text>
      
      {/* Đây là nút dấu cộng bạn muốn */}
      <TouchableOpacity 
        style={styles.addBtn} 
        activeOpacity={0.7}
        onPress={() => navigation.navigate("ProductDetail")} // Lệnh chuyển trang
      >
        <Ionicons name="add" size={24} color="white" />
      </TouchableOpacity>
    </View>
  </View>
);

  // Component cho thẻ Category trong phần Groceries (Giữ nguyên)
  const CategoryCard = ({ name, image, backgroundColor }) => (
    <TouchableOpacity 
      style={[styles.categoryCard, { backgroundColor }]}
      activeOpacity={0.8}
    >
      <Image source={image} style={styles.categoryImage} resizeMode="contain" />
      <Text style={styles.categoryName}>{name}</Text>
    </TouchableOpacity>
  );

  // Component cho từng nút trên thanh điều hướng Bottom Tab (Mới)
const TabItem = ({ label, icon, type = 'feather', active = false }) => {
  const Color = active ? "#53B175" : "#181725";
  return (
    <TouchableOpacity 
      style={styles.tabItem}
      onPress={() => {
        if (label === "Explore") navigation.navigate("Explore"); // Lệnh kết nối
      }}
    >
      {type === 'feather' && <Feather name={icon} size={24} color={Color} />}
      {type === 'ionicons' && <Ionicons name={icon} size={24} color={Color} />}
      {type === 'mci' && <MaterialCommunityIcons name={icon} size={24} color={Color} />}
      <Text style={[styles.tabLabel, { color: Color }]}>{label}</Text>
    </TouchableOpacity>
  );
};

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Nội dung chính */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Header: Logo & Location */}
        <View style={styles.header}>
          <Image 
            source={require("../assets/Group 3.png")} 
            style={styles.logo}
            resizeMode="contain"
          />
          <View style={styles.locationRow}>
            <Ionicons name="location-sharp" size={20} color="#4C4F4D" />
            <Text style={styles.locationText}>Dhaka, Banasree</Text>
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={22} color="#181725" style={styles.searchIcon} />
          <TextInput 
            placeholder="Search Store" 
            style={styles.searchInput}
            placeholderTextColor="#7C7C7C"
          />
        </View>

        {/* Banner */}
        <View style={styles.bannerWrapper}>
          <View style={styles.bannerContainer}>
            <Image 
              source={require("../assets/banner.png")} 
              style={styles.bannerImage}
              resizeMode="cover"
            />
          </View>
        </View>

        {/* Section: Exclusive Offer */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Exclusive Offer</Text>
          <TouchableOpacity><Text style={styles.seeAllText}>See all</Text></TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll} contentContainerStyle={{ paddingRight: 20 }}>
          <ProductCard name="Organic Bananas" unit="7pcs, Priceg" price="4.99" image={require("../assets/banana.png")} />
          <ProductCard name="Red Apple" unit="1kg, Priceg" price="4.99" image={require("../assets/pngfuel 1.png")} />
          <ProductCard name="Ginger" unit="250g, Priceg" price="2.99" image={require("../assets/ginger.png")} />
        </ScrollView>

        {/* Section: Best Selling */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Best Selling</Text>
          <TouchableOpacity><Text style={styles.seeAllText}>See all</Text></TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll} contentContainerStyle={{ paddingRight: 20 }}>
          <ProductCard name="Bell Pepper Red" unit="1kg, Priceg" price="4.99" image={require("../assets/pepper.png")} />
          <ProductCard name="Ginger" unit="250g, Priceg" price="4.99" image={require("../assets/ginger.png")} />
        </ScrollView>

        {/* Section: Groceries */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Groceries</Text>
          <TouchableOpacity><Text style={styles.seeAllText}>See all</Text></TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll} contentContainerStyle={{ paddingRight: 20 }}>
          <CategoryCard name="Pulses" image={require("../assets/pulses.png")} backgroundColor="#FEF1E4" />
          <CategoryCard name="Rice" image={require("../assets/rice.png")} backgroundColor="#E5F3EA" />
        </ScrollView>

        {/* Grocery Items List */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={[styles.horizontalScroll, { marginTop: 20 }]} contentContainerStyle={{ paddingRight: 20 }}>
          <ProductCard name="Beef Bone" unit="1kg, Priceg" price="4.99" image={require("../assets/beef.png")} />
          <ProductCard name="Broiler Chicken" unit="1kg, Priceg" price="4.99" image={require("../assets/chicken.png")} />
        </ScrollView>

      </ScrollView>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingBottom: 110, // Tăng padding để nội dung không bị Bottom Tab che
  },
  header: {
    alignItems: 'center',
    marginTop: 15,
  },
  logo: {
    width: 26,
    height: 31,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  locationText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#4C4F4D',
    marginLeft: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#F2F3F2',
    marginHorizontal: 20,
    marginTop: 25,
    borderRadius: 15,
    paddingHorizontal: 15,
    alignItems: 'center',
    height: 52,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    color: '#181725',
  },
  bannerWrapper: {
    alignItems: 'center',
  },
  bannerContainer: {
    marginHorizontal: 20,
    marginTop: 20,
    height: 115,
    width: width - 40,
    borderRadius: 15,
    overflow: 'hidden',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  dotContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#E2E2E2',
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: '#53B175',
    width: 15,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#181725',
    letterSpacing: 0.5,
  },
  seeAllText: {
    fontSize: 16,
    color: '#53B175',
    fontWeight: '600',
  },
  horizontalScroll: {
    paddingLeft: 20,
    marginTop: 20,
  },
  card: {
    width: 173,
    padding: 15,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    marginRight: 15,
  },
  imageContainer: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  cardImage: {
    width: '90%',
    height: '100%',
  },
  cardName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#181725',
  },
  cardUnit: {
    fontSize: 14,
    color: '#7C7C7C',
    marginVertical: 4,
    fontWeight: '500'
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  cardPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#181725',
  },
  addBtn: {
    backgroundColor: '#53B175',
    width: 45,
    height: 45,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 248,
    height: 105,
    borderRadius: 18,
    paddingHorizontal: 15,
    marginRight: 15,
  },
  categoryImage: {
    width: 70,
    height: 70,
    marginRight: 15,
  },
  categoryName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#3E423F',
  },

  /* STYLES CHO BOTTOM TAB MỚI */
  bottomTabContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 12,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // Đổ bóng cho iOS & Android
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 15,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: width / 5,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: 4,
  }
});