import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Card from "../card/Card"; 

export default function ListOfComponents({ teams = [], onFavoriteToggle, title }) {
  
  // Verifica se a lista de times está vazia
  if (teams.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.noTeamsText}>Não há times</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={teams}
        keyExtractor={(team) => team.id.toString()}
        renderItem={({ item: team }) => (
          <Card
            id={team.id}
            title={team.name}
            description={team.country.name}
            image={team.logo}
            isFavorited={team.isFavorited}
            onFavoriteToggle={onFavoriteToggle}
          />
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  noTeamsText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
  listContainer: {
    paddingBottom: 20,
  },
});
