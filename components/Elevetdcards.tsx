import { View, Text, ScrollView, StyleSheet, useColorScheme } from 'react-native';
import React from 'react';

const Elevetdcards = () => {
  const isDark = useColorScheme() === 'dark';
  
  const cards = [
    { text: "Tap", color: "#2563eb" },
    { text: "Me", color: "#16a34a" },
    { text: "To", color: "#dc2626" },
    { text: "Scroll", color: "#ca8a04" },
    { text: "side", color: "#9333ea" }
  ];

  return (
    <View style={styles.container}>
      <Text style={[styles.heading, { color: isDark ? '#f3f4f6' : '#1f2937' }]}>
        Elevated Cards
      </Text>
      
      <ScrollView 
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        nestedScrollEnabled={true}
        contentContainerStyle={{ paddingLeft: 16, paddingRight: 16 }}
        // style={[styles.elevet]}
      >
        {cards.map((card, index) => (
          <View 
            key={index} 
            style={[styles.card, { backgroundColor: card.color },styles.elevet]}
          >
            <Text style={styles.cardText}>{card.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  elevet: {
    elevation: 5,
    marginVertical: 10,
    shadowColor: '#af21cfff',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  card: {
    width: 300,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 8,
  },
  cardText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
  },
});

export default Elevetdcards;