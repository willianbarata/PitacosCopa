import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialCommunityIcons, FontAwesome, Ionicons, FontAwesome5    } from '@expo/vector-icons';

import Classificacao from './componentes/Classificacao';
import Conta from './componentes/Conta';
import Informacoes from './componentes/Informacoes';
import Login from './componentes/Login';
import Pitacos from './componentes/Pitacos';
import Tabela from './componentes/Tabela';

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: "#151f79"},
          tabBarActiveTintColor: "#FFF",
          tabBarInactiveTintColor: "#b4b6d3",
          headerStyle: {
            backgroundColor: "#151f79"
          },
          headerTitleStyle: {
            color: '#FFF'
          },
        }}
      >
        <Tabs.Screen 
              name="Login"
              component = { Login } 
              options={{
                tabBarIcon: () =>(
                  <MaterialCommunityIcons name="file-table-box-multiple-outline" size={24} color="#b4b6d3" />
                ),
            }}/>
      <Tabs.Screen 
              name="Tabela"
              component = { Tabela } 
              options={{
                tabBarIcon: () =>(
                  <MaterialCommunityIcons name="file-table-box-multiple-outline" size={24} color="#b4b6d3" />
                ),
            }}/>
        <Tabs.Screen 
              name="Pitacos" 
              component = { Pitacos } 
              options={{
                tabBarIcon: () =>(
                  <FontAwesome name="pencil" size={24} color="#b4b6d3" />
                ),
            }}/>
        <Tabs.Screen 
              name="Classificacao" 
              component = { Classificacao }
              options={{
                tabBarIcon: () =>(
                  <FontAwesome5 name="medal" size={24} color="#b4b6d3" />
                ),
            }}
              />
        <Tabs.Screen 
            name="Informacoes" 
            component = { Informacoes } 
            options={{
              tabBarIcon: () =>(
                <Ionicons name="ios-information" size={24} color="#b4b6d3" />
              ),
          }}/>
       <Tabs.Screen 
            name="Conta"
            component = { Conta } 
            options={{
              tabBarIcon: () =>(
                <MaterialCommunityIcons name="account-multiple-outline" size={24} color="#b4b6d3" />
              ),
          }}
            />
       
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

