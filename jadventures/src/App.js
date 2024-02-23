// src/App.js
import React from 'react';
import FilterComponent from './Components/FilterComponent';
import QuestComponent from './Components/QuestComponent';

function App() {
  const questDataList = [
    // Inserisci la tua lista di quest qui
    {
      id: 1,
      title: 'Explore the Forest',
      description: 'Explore the mysterious forest and uncover its secrets.',
      reward: 50,
      minRank: 1,
      maxRank: 5,
      area: 'Forest',
      status: 'Active',
    },
    {
      id: 2,
      title: 'Defeat the Dragon',
      description: 'Embark on a daring quest to defeat the fearsome dragon terrorizing the kingdom.',
      reward: 100,
      minRank: 6,
      maxRank: 10,
      area: 'Castle',
      status: 'Inactive',
    },
    {
      id: 3,
      title: 'Rescue the Princess',
      description: 'Brave the dangers of the enemy castle to rescue the captured princess.',
      reward: 150,
      minRank: 11,
      maxRank: 15,
      area: 'Castle',
      status: 'Active',
    },
    // Puoi aggiungere altre quest secondo le tue esigenze
  ];

  const handleQuestClick = (questId) => {
    // Logica per gestire il click su una quest
    console.log(`Quest clicked: ${questId}`);
  };

  return (
    <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'space-between' }}>
      {/* Posiziona il componente del filtro a sinistra */}
      <FilterComponent />
      {/* Posiziona il componente della lista delle quest a destra */}
      <QuestComponent questDataList={questDataList} onQuestClick={handleQuestClick} />
    </div>
  );
}

export default App;
