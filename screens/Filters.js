import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  SafeAreaView, 
  ScrollView 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Filters = ({ navigation }) => {
  // State để quản lý việc chọn (Demo cho Eggs và Cocola)
  const [categories, setCategories] = useState(['Eggs']);
  const [brands, setBrands] = useState(['Cocola']);

  const toggleCategory = (item) => {
    setCategories(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]);
  };
  const toggleBrand = (item) => {
    setBrands(prev => 
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const FilterItem = ({ label, isChecked, onPress }) => (
    <TouchableOpacity style={styles.filterRow} onPress={onPress}>
      <View style={[styles.checkbox, isChecked && styles.checkboxChecked]}>
        {isChecked && <Ionicons name="checkmark" size={16} color="white" />}
      </View>
      <Text style={[styles.filterLabel, isChecked && styles.labelSelected]}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={28} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Filters</Text>
        <View style={{ width: 28 }} /> 
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <FilterItem label="Eggs" isChecked={categories.includes('Eggs')} onPress={() => toggleCategory('Eggs')} />
          <FilterItem label="Noodles & Pasta" isChecked={categories.includes('Noodles & Pasta')} onPress={() => toggleCategory('Noodles & Pasta')} />
          <FilterItem label="Chips & Crisps" isChecked={categories.includes('Chips & Crisps')} onPress={() => toggleCategory('Chips & Crisps')} />
          <FilterItem label="Fast Food" isChecked={categories.includes('Fast Food')} onPress={() => toggleCategory('Fast Food')} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Brand</Text>
          <FilterItem label="Individual Collection" isChecked={brands.includes('Individual Collection')} onPress={() => toggleBrand('Individual Collection')} />
          <FilterItem label="Cocola" isChecked={brands.includes('Cocola')} onPress={() => toggleBrand('Cocola')} />
          <FilterItem label="Ifad" isChecked={brands.includes('Ifad')} onPress={() => toggleBrand('Ifad')} />
          <FilterItem label="Kazi Farmas" isChecked={brands.includes('Kazi Farmas')} onPress={() => toggleBrand('Kazi Farmas')} />
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.applyButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.applyButtonText}>Apply Filter</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerTitle: { fontSize: 20, fontWeight: '700' },
  content: { flex: 1, backgroundColor: '#F2F3F2', borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 20 },
  section: { marginBottom: 30 },
  sectionTitle: { fontSize: 24, fontWeight: '600', marginBottom: 20, color: '#181725' },
  filterRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#B1B1B1',
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: { backgroundColor: '#53B175', borderColor: '#53B175' },
  filterLabel: { fontSize: 16, color: '#181725' },
  labelSelected: { color: '#53B175' },
  footer: { padding: 20, backgroundColor: '#F2F3F2' },
  applyButton: {
    backgroundColor: '#53B175',
    borderRadius: 19,
    height: 67,
    justifyContent: 'center',
    alignItems: 'center',
  },
  applyButtonText: { color: '#FFFFFF', fontSize: 18, fontWeight: '600' },
});

export default Filters;