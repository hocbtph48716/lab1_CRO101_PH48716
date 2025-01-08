import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const players = [
  { name: 'Messi', goals: 30 },
  undefined,
  { name: 'Ronaldo', goals: 28 },
  { name: 'Neymar', goals: 22 },
  { goals: 2 },
  { name: 'Mbappé', goals: 25 },
  { name: 'Pele', goals: null },
];

const validRule = ({ name, goals } = {}) => !!name && typeof goals === 'number';

const validPlayers = players.filter((player) => validRule(player));

const topScorer = validPlayers.reduce(
  (max, player) => (player.goals > max.goals ? player : max),
  { name: '', goals: 0 }
);

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bui Thai Hoc - PH48716</Text>

      <Text style={styles.text}>Danh sách cầu thủ hợp lệ:</Text>
      {validPlayers.map((player, index) => (
        <Text key={index} style={styles.text}>
          {player.name} - {player.goals} bàn
        </Text>
      ))}

      <Text style={[styles.text, styles.highlight]}>
        Cầu thủ ghi bàn nhiều nhất: {topScorer.name} - {topScorer.goals} bàn
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    margin: 5,
  },
  highlight: {
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default App;
