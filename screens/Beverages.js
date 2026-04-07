import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Dimensions
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const cardWidth = (width - 50) / 2; // Khoảng cách chuẩn cho 2 cột

const beveragesData = [
  { id: '1', name: 'Diet Coke', unit: '355ml, Price', price: '1.99', image: require('../assets/coke.png') },
  { id: '2', name: 'Sprite Can', unit: '325ml, Price', price: '1.50', image: require('../assets/sprite.png') },
  { id: '3', name: 'Apple & Grape Juice', unit: '2L, Price', price: '15.99', image: require('../assets/juice-apple.png') },
  { id: '4', name: 'Orange Juice', unit: '2L, Price', price: '15.99', image: require('../assets/juice-orange.png') },
  { id: '5', name: 'Coca Cola Can', unit: '325ml, Price', price: '4.99', image: require('../assets/coca.png') },
  { id: '6', name: 'Pepsi Can', unit: '330ml, Price', price: '4.99', image: require('../assets/pepsi.png') },
];

export default function Beverages({ navigation }) {
  
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.imageBox}>
        <Image source={item.image} style={styles.productImage} resizeMode="contain" />
      </View>
      <Text style={styles.productName} numberOfLines={2}>{item.name}</Text>
      <Text style={styles.productUnit}>{item.unit}</Text>
      <View style={styles.cardFooter}>
        <Text style={styles.productPrice}>${item.price}</Text>
        <TouchableOpacity style={styles.addBtn} activeOpacity={0.7}>
          <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header chuẩn ảnh mẫu */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconBtn}>
          <Ionicons name="chevron-back" size={28} color="#181725" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Beverages</Text>
        <TouchableOpacity style={styles.iconBtn}>
          <Feather name="sliders" size={22} color="#181725" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={beveragesData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.columnWrapper}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginTop: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#181725',
  },
  iconBtn: {
    padding: 5,
    width: 40,
  },
  listContent: {
    paddingHorizontal: 15,
    paddingBottom: 30,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  card: {
    width: cardWidth,
    padding: 15,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    marginBottom: 15,
  },
  imageBox: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  productImage: {
    width: '90%',
    height: '100%',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#181725',
    height: 40, // Đảm bảo các card đều nhau
  },
  productUnit: {
    fontSize: 14,
    color: '#7C7C7C',
    marginVertical: 5,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  productPrice: {
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
});