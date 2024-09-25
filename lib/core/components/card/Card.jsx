import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

export default function Card({ id, title, description, image, isFavorited, onFavoriteToggle }) {
  const handleFavoriteClick = () => {
    onFavoriteToggle(!isFavorited, id); // Notifica o componente pai sobre a mudança
  };

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.cardImage} />
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
      <TouchableOpacity style={styles.favoriteBtn} onPress={handleFavoriteClick}>
        <FontAwesome name="star" size={24} color={isFavorited ? 'red' : 'black'} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    width: 300,
    margin: 20,
    position: 'relative',
    alignItems: 'center',
    padding: 20,
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60, // Metade da largura/altura para o círculo
    overflow: 'hidden',
    marginBottom: 16,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  cardContent: {
    alignItems: 'center',
    padding: 16,
  },
  cardTitle: {
    fontSize: 24,
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  cardDescription: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
  },
  favoriteBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
