import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { create } from "zustand";

interface Deck {
  id: string;
  title: string;
  cardCount: number;
}

interface DeckStore {
  decks: Deck[];
}

const useDeckStore = create<DeckStore>(() => ({
  decks: [
    { id: "1", title: "Matemáticas", cardCount: 10 },
    { id: "2", title: "Historia", cardCount: 15 },
  ],
}));

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const { decks } = useDeckStore();

  const renderDeck = ({ item }: { item: Deck }) => (
    <TouchableOpacity
      style={styles.deckContainer}
      onPress={() => navigation.navigate("StudyScreen", { deck: item })}
    >
      <Text style={styles.deckTitle}>{item.title}</Text>
      <Text style={styles.deckCount}>{item.cardCount} cartas</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Mazos de Estudio</Text>
      <FlatList data={decks} keyExtractor={(item) => item.id} renderItem={renderDeck} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  deckContainer: {
    padding: 15,
    backgroundColor: "#f8f9fa",
    borderRadius: 10,
    marginBottom: 10,
  },
  deckTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  deckCount: {
    fontSize: 14,
    color: "gray",
  },
});
