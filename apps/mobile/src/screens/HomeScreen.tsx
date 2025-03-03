import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Title } from 'react-native-paper';
import { useFlashcardsStore } from '../store/useFlashcardsStore';

export default function HomeScreen() {
  const { cards, decks } = useFlashcardsStore();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resume</Text>

      <View style={styles.cardsContainer}>
        {/* Tarjeta de Cards */}
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.cardTitle}>Cards</Title>
            <Text style={styles.cardNumber}>{cards}</Text>
          </Card.Content>
        </Card>

        {/* Tarjeta de Decks */}
        <Card style={[styles.card, styles.deckCard]}>
          <Card.Content>
            <Title style={styles.cardTitle}>Decks</Title>
            <Text style={styles.cardNumber}>{decks}</Text>
          </Card.Content>
        </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  card: {
    flex: 1,
    margin: 10,
    padding: 20,
    backgroundColor: '#3498db',
  },

  deckCard: {
    backgroundColor: '#2ecc71',
  },

  cardTitle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },

  cardNumber: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
  },
});
