import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  FlatList, 
  Image, 
  TouchableOpacity, 
  SafeAreaView 
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

// 1. Dữ liệu mẫu (Giữ nguyên)
const DATA = [
  { id: '1', name: 'Egg Chicken Red', description: '4pcs, Price', price: '1.99', image: require('../assets/eggred.png') },
  { id: '2', name: 'Egg Chicken White', description: '180g, Price', price: '1.50', image: require('../assets/eggwhite.png') },
  { id: '3', name: 'Egg Pasta', description: '30gm, Price', price: '15.99', image: require('../assets/pasta.png') },
  { id: '4', name: 'Egg Noodles', description: '2L, Price', price: '15.99', image: require('../assets/noodles.png') },
  { id: '5', name: 'Mayonnais Eggless', description: '300g, Price', price: '10.99', image: require('../assets/mayonnaise.png') },
  { id: '6', name: 'Egg Noodles', description: '500g, Price', price: '8.99', image: require('../assets/eggnoodle.png') },
];

// 2. Hàm render từng item (Giữ nguyên)
const renderItem = ({ item }) => (
  <View style={styles.card}>
    <Image 
      source={item.image} 
      style={styles.productImage} 
      resizeMode="contain" 
    />
    <View style={styles.cardContent}>
      <Text style={styles.productName} numberOfLines={1}>{item.name}</Text>
      <Text style={styles.productDesc}>{item.description}</Text>
      <View style={styles.priceRow}>
        <Text style={styles.price}>${item.price}</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const Search = ({ navigation, route }) => { 
  // Lấy từ khóa truyền từ Explore/Home sang (nếu có) thông qua route.params
  const initialQuery = route.params?.query || "";
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  // Cập nhật lại ô tìm kiếm mỗi khi params thay đổi (khi navigate lại vào trang này)
  useEffect(() => {
    if (route.params?.query !== undefined) {
      setSearchQuery(route.params.query);
    }
  }, [route.params?.query]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#181725" style={styles.searchIcon} />
          <TextInput
            placeholder="Search Store"
            style={styles.input}
            value={searchQuery} // Hiển thị từ khóa (ví dụ: "egg")
            onChangeText={setSearchQuery} // Cho phép người dùng sửa/xóa tại trang này
            autoFocus={false}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery("")}>
              <Ionicons name="close-circle" size={18} color="#999" />
            </TouchableOpacity>
          )}
        </View>
        
        <TouchableOpacity 
          style={styles.filterButton}
          onPress={() => navigation.navigate("Filters")}
        >
          <MaterialCommunityIcons name="tune-variant" size={24} color="#181725" />
        </TouchableOpacity>
      </View>

      {/* Grid Danh sách sản phẩm */}
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F3F2',
    borderRadius: 15,
    paddingHorizontal: 15,
    height: 50,
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    color: '#181725',
  },
  filterButton: {
    marginLeft: 15,
  },
  listContainer: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    margin: 8,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    padding: 15,
    justifyContent: 'space-between',
  },
  productImage: {
    width: '100%',
    height: 100,
    marginBottom: 15,
  },
  productName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#181725',
  },
  productDesc: {
    fontSize: 12,
    color: '#7C7C7C',
    marginTop: 5,
    marginBottom: 15,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
    color: '#181725',
  },
  addButton: {
    backgroundColor: '#53B175',
    borderRadius: 14,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Search;