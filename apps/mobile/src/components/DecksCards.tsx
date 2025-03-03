import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Card, Text, Title } from 'react-native-paper';
import { RootStackParamList } from '../types/navigation';
import { DecksHomeScreenProps } from '../types/types';

export default function DecksCards({ decks }: DecksHomeScreenProps) {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'DecksScreen'>
    >();

  return (
    <FlatList
      data={decks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('DecksScreen', { deckId: item.id })
          }
        >
          <Card style={styles.card}>
            <Card.Content>
              <Title style={styles.cardTitle}>{item.title}</Title>
              <Text style={styles.info}>{item.project}</Text>
              <Text style={styles.info}>{item.author}</Text>
              <Text style={styles.totalCards}>
                Total Cards: {item.totalCards}
              </Text>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    padding: 0,
    backgroundColor: '#ffffff',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 10,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3498db',
  },

  info: {
    fontSize: 14,
    color: '#555',
  },

  totalCards: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
});
