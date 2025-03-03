import React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Card, Text, Title } from 'react-native-paper';
import { DecksHomeScreenProps } from '../types/types';

export default function DecksCards({ decks }: DecksHomeScreenProps) {
  return (
    <FlatList
      data={decks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.cardTitle}>{item.title}</Title>
            <Text style={styles.info}>Project: {item.project}</Text>
            <Text style={styles.info}>Author: {item.author}</Text>
            <Text style={styles.totalCards}>
              Total Cards: {item.totalCards}
            </Text>
          </Card.Content>
        </Card>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    padding: 15,
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
