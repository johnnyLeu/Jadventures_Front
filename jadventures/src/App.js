// App.js
import React, { useState } from 'react';
import FilterComponent from './Components/FilterComponent';
import QuestComponent from './Components/QuestComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Homepage from './Components/homepage/Homepage';
import Navbar from './Components/navbar/Navbar';
import PatronLogin from './Components/login/PatronLogin';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [filteredQuestDataList, setFilteredQuestDataList] = useState([]);
  
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const handleApplyFilters = (filteredData) => {
    setFilteredQuestDataList(filteredData);
  };

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
    {
      id: 4,
      title: 'Retrieve the Lost Artifact',
      description: 'Embark on a journey to retrieve a valuable artifact hidden deep within a cave.',
      reward: 80,
      minRank: 5,
      maxRank: 12,
      area: 'Cave',
      status: 'Active',
    },
    {
      id: 5,
      title: 'Slay the Giant Spider',
      description: 'Confront the giant spider lurking in the dark corners of the enchanted forest.',
      reward: 120,
      minRank: 8,
      maxRank: 15,
      area: 'Forest',
      status: 'Inactive',
    },
    {
      id: 6,
      title: 'Mysteries of the Underworld',
      description: 'Delve into the mysteries of the underworld to uncover ancient secrets.',
      reward: 200,
      minRank: 12,
      maxRank: 20,
      area: 'Underworld',
      status: 'Active',
    },
    {
      id: 7,
      title: 'Guardian of the Mystic Portal',
      description: 'Face the guardian protecting a mystic portal and prove your worth.',
      reward: 150,
      minRank: 15,
      maxRank: 25,
      area: 'Realm',
      status: 'Inactive',
    },
    {
      id: 8,
      title: 'The Cursed Amulet',
      description: 'Break the curse surrounding a mysterious amulet hidden in an ancient temple.',
      reward: 180,
      minRank: 18,
      maxRank: 30,
      area: 'Temple',
      status: 'Active',
    },
  
    // Puoi aggiungere altre quest secondo le tue esigenze
  ];

  const handleQuestClick = (questId) => {
    // Logica per gestire il click su una quest
    console.log(`Quest clicked: ${questId}`);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="patronlogin" element={<PatronLogin handleLogin={handleLogin} isAuthenticated={isAuthenticated} />} />
        </Routes>
      </BrowserRouter>
      <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'space-between' }}>
        {/* Posiziona il componente del filtro a sinistra */}
        <FilterComponent applyFilters={handleApplyFilters} questDataList={questDataList} style={{}} />
        {/* Posiziona il componente della lista delle quest a destra */}
        <QuestComponent questDataList={filteredQuestDataList} onQuestClick={handleQuestClick} />
      </div>
    </>
  );
}

export default App;
