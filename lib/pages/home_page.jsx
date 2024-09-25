import React, { useState, useEffect } from "react";
import { View, StyleSheet,  } from "react-native";
import Header from "../core/components/header/Header"; // Adaptado para React Native
import volleyService from "../services/volei_service"; // Certifique-se de que esse serviço funcione com fetch/axios
import ListOfComponents from "../core/components/list_of_components/ListOfComponents"; // Adaptado para React Native
import LoadingSpinner from "../core/components/loading_spinner/LoadingSpinner"; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Adaptado para React Native

const HomePage = () => {
  const [teams, setTeams] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  async function getData(params) {
    setLoading(true);
    try {
      const data = await volleyService.getTeamsOfVolley(params);
      let value = data.response.map(team => {
        return { ...team, isFavorited: false };
      });
    
     
      setTeams(value);
    } catch (error) {
      console.error("Erro ao buscar times de vôlei:", error);
    } finally {
      setLoading(false);
    }
  }

  const toggleFavorite = (newState, id) => {
    const newTeams = teams.map(team =>
      team.id === id ? { ...team, isFavorited: newState } : team
    );
    setTeams(newTeams);
  };

  const filterTeams = (isFavorited) => {
   
    let data;
    if (search === "") {
      data = teams.filter(team => team.isFavorited === isFavorited);
      return data;
    }
    data = teams.filter(team =>
      team.isFavorited === isFavorited &&
      team.name.toLowerCase().includes(search.toLowerCase())
    );
    return data;
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const noTeamsFound = filterTeams(false).length === 0 && filterTeams(true).length === 0;

    if (noTeamsFound && search.length > 2) {
      getData({ search });
    }
  }, [search]);

  function TeamsTab() {
    return (
      <View style={styles.listWrapper}>
      <ListOfComponents
        teams={filterTeams(false)}
        onFavoriteToggle={toggleFavorite}
        title="Times de Vôlei"
      />
    </View>
    );
  }
  
  function FavoriteTeamsTab() {
    return (
      <View style={styles.listWrapper}>
      <ListOfComponents
        teams={filterTeams(true)}
        onFavoriteToggle={toggleFavorite}
        title="Times de Vôlei Favoritos"
      />
    </View>
    );
  }
  
  const Tab = createBottomTabNavigator();
  return (
    <View style={styles.container}>
      <Header onChange={setSearch} /> 
      {loading ? (
          <LoadingSpinner />     
      ) : (

        
        <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false, // Oculta o cabeçalho padrão do Tab Navigator
         
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
  
            if (route.name === 'Times') {
              iconName =  'soccer-field'; 
            } else if (route.name === 'Favoritos') {
              iconName =  'star' ;
            }
  
  
            // Use MaterialCommunityIcons para exibir os ícones
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Times" component={TeamsTab} />
        <Tab.Screen name="Favoritos" component={FavoriteTeamsTab} />
      </Tab.Navigator>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
  listContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 20,
  },
  listWrapper: {
    backgroundColor: '#fff',
    flex: 1,
    margin: 10,
  },
});

export default HomePage;
