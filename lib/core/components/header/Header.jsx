import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Ícones do pacote expo

export default function Header({ onChange }) {
  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8WPXYf4SshaiSDmFhbY2g5-hXfifpEzntXw&s' }}
          style={styles.logoImage}
        />
        <Text style={styles.siteTitle}>Times de Volei</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar..."
          placeholderTextColor="#ccc"
          onChangeText={onChange} 
        />
        <TouchableOpacity style={styles.searchBtn}>
          <FontAwesome name="search" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 10,
    backgroundColor: '#333',
    color: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    flexWrap: 'wrap',
  },
  logoContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  siteTitle: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
  },
  searchContainer: {
  
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#444',
    padding: 5,
    borderRadius: 20,
    width: '100%',
    maxWidth: 500,
    marginTop: 10,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    padding: 5,
    fontSize: 16,
  },
  searchBtn: {
    marginLeft: 10,
  },
});
