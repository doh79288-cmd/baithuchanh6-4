import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  Image, 
  TouchableOpacity, 
  SafeAreaView 
} from 'react-native';
import { Entypo } from '@expo/vector-icons';

const favoriteItems = [
  { 
    id: '1', 
    name: 'Sprite Can', 
    description: '325ml, Price', 
    price: 1.50, 
    image: require('../assets/sprite.png') 
  },
  { 
    id: '2', 
    name: 'Diet Coke', 
    description: '355ml, Price', 
    price: 1.99, 
    image: require('../assets/coke.png') 
  },
  { 
    id: '3', 
    name: 'Apple & Grape Juice', 
    description: '2L, Price', 
    price: 15.50, 
    image: require('../assets/juice-apple.png') 
  },
  { 
    id: '4', 
    name: 'Coca Cola Can', 
    description: '325ml, Price', 
    price: 4.99, 
    image: require('../assets/coca.png') 
  },
  { 
    id: '5', 
    name: 'Pepsi Can', 
    description: '330ml, Price', 
    price: 4.99, 
    image: require('../assets/pepsi.png') 
  },
];

const Favourite = () => {

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      
      <View style={styles.textContainer}>
        <Text style={styles.itemName} numberOfLines={1}>{item.name}</Text>
        <Text style={styles.itemDesc}>{item.description}</Text>
      </View>
      
      <View style={styles.priceContainer}>
        <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
        <Entypo name="chevron-right" size={24} color="#181725" style={styles.chevron} />
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Favourite</Text>
      </View>
      <View style={styles.divider} />

      {/* Danh sách sản phẩm */}
      <FlatList
        data={favoriteItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />

      {/* Nút thêm tất cả vào giỏ */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.addAllBtn}>
          <Text style={styles.addAllText}>Add All To Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#181725',
  },
  divider: {
    height: 1,
    backgroundColor: '#E2E2E2',
    marginHorizontal: 20,
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    alignItems: 'center',
  },
  itemImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#181725',
    marginBottom: 4,
  },
  itemDesc: {
    fontSize: 14,
    color: '#7C7C7C',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#181725',
    marginRight: 10,
  },
  chevron: {
    marginTop: 2,
  },
  footer: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: 'transparent', // Giữ layout mềm mại
  },
  addAllBtn: {
    backgroundColor: '#53B175',
    borderRadius: 19,
    height: 67,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addAllText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default Favourite;