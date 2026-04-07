import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  Image, 
  TouchableOpacity, 
  SafeAreaView 
} from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';

// Dữ liệu mẫu ban đầu (Bạn có thể thay đổi đường dẫn ảnh cho phù hợp với assets của bạn)
const initialCart = [
  { 
    id: '1', 
    name: 'Bell Pepper Red', 
    description: '1kg, Price', 
    price: 4.99, 
    quantity: 1, 
    image: require('../assets/pepper1.png')  
  },
  { 
    id: '2', 
    name: 'Egg Chicken Red', 
    description: '4pcs, Price', 
    price: 1.99, 
    quantity: 1, 
    image: require('../assets/eggred.png')  
  },
  { 
    id: '3', 
    name: 'Organic Bananas', 
    description: '12kg, Price', 
    price: 3.00, 
    quantity: 1, 
    image: require('../assets/banana.png')  
  },
  { 
    id: '4', 
    name: 'Ginger', 
    description: '250gm, Price', 
    price: 2.99, 
    quantity: 1, 
    image: require('../assets/ginger.png') 
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCart);

  // Hàm tăng số lượng
  const increaseQuantity = (id) => {
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  // Hàm giảm số lượng
  const decreaseQuantity = (id) => {
    setCartItems(prev => prev.map(item => 
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  // Hàm xóa sản phẩm khỏi giỏ hàng
  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // Tính tổng tiền
  const getTotalPrice = () => {
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    return total.toFixed(2);
  };

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={item.image} style={styles.itemImage} />
      
      <View style={styles.itemDetails}>
        {/* Hàng trên: Tên + Nút Xóa */}
        <View style={styles.titleRow}>
          <Text style={styles.itemName} numberOfLines={1}>{item.name}</Text>
          <TouchableOpacity onPress={() => removeItem(item.id)}>
            <AntDesign name="close" size={20} color="#B3B3B3" />
          </TouchableOpacity>
        </View>
        
        <Text style={styles.itemDesc}>{item.description}</Text>
        
        {/* Hàng dưới: Cụm tăng giảm + Giá tiền */}
        <View style={styles.actionRow}>
          <View style={styles.quantityControl}>
            <TouchableOpacity 
              style={styles.qtyBtn} 
              onPress={() => decreaseQuantity(item.id)}
            >
              <AntDesign name="minus" size={16} color="#B3B3B3" />
            </TouchableOpacity>
            
            <Text style={styles.qtyText}>{item.quantity}</Text>
            
            <TouchableOpacity 
              style={styles.qtyBtn} 
              onPress={() => increaseQuantity(item.id)}
            >
              <AntDesign name="plus" size={16} color="#53B175" />
            </TouchableOpacity>
          </View>
          
          <Text style={styles.itemPrice}>${(item.price * item.quantity).toFixed(2)}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Cart</Text>
      </View>
      <View style={styles.divider} />

      {/* Danh sách giỏ hàng */}
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />

      {/* Nút thanh toán */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.checkoutBtn}>
          <Text style={styles.checkoutText}>Go to Checkout</Text>
          <View style={styles.totalBadge}>
            <Text style={styles.totalBadgeText}>${getTotalPrice()}</Text>
          </View>
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
  cartItem: {
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    alignItems: 'center',
  },
  itemImage: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    marginRight: 20,
  },
  itemDetails: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#181725',
    flex: 1,
  },
  itemDesc: {
    fontSize: 14,
    color: '#7C7C7C',
    marginTop: 4,
    marginBottom: 12,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  qtyBtn: {
    width: 35,
    height: 35,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  qtyText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#181725',
    marginHorizontal: 15,
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#181725',
  },
  footer: {
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  checkoutBtn: {
    backgroundColor: '#53B175',
    borderRadius: 19,
    height: 67,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  checkoutText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  totalBadge: {
    position: 'absolute',
    right: 20,
    backgroundColor: '#489E67',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  totalBadgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
});

export default Cart;