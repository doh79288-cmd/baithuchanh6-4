import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Dimensions
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function ProductDetail({ navigation }) {
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  // Component phụ cho các section có thể mở rộng (Product Detail, Nutritions, Review)
  const ExpandableSection = ({ title, children, isNutritions, hasStars }) => {
    const [expanded, setExpanded] = useState(false);
    return (
      <View style={styles.sectionBorder}>
        <TouchableOpacity 
          style={styles.sectionHeader} 
          onPress={() => setExpanded(!expanded)}
          activeOpacity={0.6}
        >
          <Text style={styles.sectionTitle}>{title}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {isNutritions && (
              <View style={styles.nutritionBadge}>
                <Text style={styles.nutritionBadgeText}>100gr</Text>
              </View>
            )}
            {hasStars && (
              <View style={styles.starRow}>
                {[...Array(5)].map((_, i) => (
                  <Ionicons key={i} name="star" size={14} color="#F3603F" style={{marginHorizontal: 1}} />
                ))}
              </View>
            )}
            <Ionicons 
              name={expanded ? "chevron-down" : "chevron-forward"} 
              size={20} 
              color="#181725" 
            />
          </View>
        </TouchableOpacity>
        {expanded && <View style={styles.sectionContent}>{children}</View>}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>
        {/* Header Ảnh Sản Phẩm - Bo góc mạnh ở dưới */}
        <View style={styles.imageHeader}>
          <View style={styles.topActionRow}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back" size={28} color="#181725" />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcons name="share-variant-outline" size={24} color="#181725" />
            </TouchableOpacity>
          </View>

          <Image 
            source={require("../assets/Vector.png")} 
            style={styles.mainImage}
            resizeMode="contain"
          />
        </View>

        {/* Nội dung chi tiết */}
        <View style={styles.contentPadding}>
          <View style={styles.titleRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.productName}>Naturel Red Apple</Text>
              <Text style={styles.productUnit}>1kg, Price</Text>
            </View>
            <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
              <Ionicons 
                name={isFavorite ? "heart" : "heart-outline"} 
                size={30} 
                color={isFavorite ? "#53B175" : "#7C7C7C"} 
              />
            </TouchableOpacity>
          </View>

          {/* Hàng tăng giảm số lượng và giá tiền */}
          <View style={styles.counterPriceRow}>
            <View style={styles.counterGroup}>
              <TouchableOpacity 
                onPress={() => quantity > 1 && setQuantity(quantity - 1)}
                style={styles.qtyBtn}
              >
                <Ionicons name="remove" size={28} color={quantity > 1 ? "#53B175" : "#B3B3B3"} />
              </TouchableOpacity>
              
              <View style={styles.qtyDisplay}>
                <Text style={styles.qtyText}>{quantity}</Text>
              </View>

              <TouchableOpacity 
                onPress={() => setQuantity(quantity + 1)}
                style={styles.qtyBtn}
              >
                <Ionicons name="add" size={28} color="#53B175" />
              </TouchableOpacity>
            </View>
            
            <Text style={styles.totalPrice}>${(4.99 * quantity).toFixed(2)}</Text>
          </View>

          {/* Các section thông tin */}
          <ExpandableSection title="Product Detail">
            <Text style={styles.descriptionText}>
              Apples Are Nutritious. Apples May Be Good For Weight Loss. 
              Apples May Be Good For Your Heart. As Part Of A Healthful 
              And Varied Diet.
            </Text>
          </ExpandableSection>

          <ExpandableSection title="Nutritions" isNutritions={true}>
            <Text style={styles.descriptionText}>Detailed nutritional values per 100g...</Text>
          </ExpandableSection>

          <ExpandableSection title="Review" hasStars={true}>
            <Text style={styles.descriptionText}>Great product! Always fresh and juicy.</Text>
          </ExpandableSection>
        </View>
      </ScrollView>

      {/* Nút Add To Basket cố định ở dưới */}
      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.basketButton} activeOpacity={0.8}>
          <Text style={styles.basketButtonText}>Add To Basket</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  imageHeader: {
    height: 350,
    backgroundColor: '#F2F3F2',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topActionRow: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 10,
  },
  mainImage: {
    width: width * 0.7,
    height: 200,
  },
  paginationRow: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 25,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#B3B3B3',
    marginHorizontal: 3,
  },
  activeDot: {
    width: 15,
    backgroundColor: '#53B175',
  },
  contentPadding: {
    paddingHorizontal: 25,
    paddingTop: 30,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#181725',
  },
  productUnit: {
    fontSize: 16,
    color: '#7C7C7C',
    fontWeight: '600',
    marginTop: 5,
  },
  counterPriceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 30,
  },
  counterGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  qtyBtn: {
    padding: 5,
  },
  qtyDisplay: {
    width: 45,
    height: 45,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  qtyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#181725',
  },
  totalPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#181725',
  },
  sectionBorder: {
    borderTopWidth: 1,
    borderColor: '#E2E2E2',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#181725',
  },
  sectionContent: {
    paddingBottom: 20,
  },
  descriptionText: {
    fontSize: 13,
    color: '#7C7C7C',
    lineHeight: 21,
    fontWeight: '500',
  },
  nutritionBadge: {
    backgroundColor: '#EBEBEB',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    marginRight: 10,
  },
  nutritionBadgeText: {
    fontSize: 10,
    color: '#7C7C7C',
    fontWeight: 'bold',
  },
  starRow: {
    flexDirection: 'row',
    marginRight: 10,
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 30,
    paddingTop: 10,
    paddingHorizontal: 25,
    backgroundColor: 'rgba(255,255,255,0.9)', // Mờ nhẹ để thấy nội dung cuộn bên dưới
  },
  basketButton: {
    backgroundColor: '#53B175',
    height: 67,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
  },
  basketButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});