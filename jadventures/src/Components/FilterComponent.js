import React, { useState, useEffect } from 'react';

const FilterComponent = ({ applyFilters, questDataList }) => {
  const [filterCriteria, setFilterCriteria] = useState({
    type: '',
    minRank: 0,
    maxRank: Infinity,
    minReward: 0,
    area: '',
    status: '',
  });

  const handleInputChange = (field, value) => {
    setFilterCriteria(prevState => ({
      ...prevState,
      [field]: value
    }));
  };

  useEffect(() => {
    // Funzione per applicare i filtri quando cambiano i criteri di filtro
    const applyFiltersOnChange = () => {
      const filteredData = questDataList.filter((quest) => {
        const isStatusMatch = filterCriteria.status === '' || quest.status.toLowerCase().includes(filterCriteria.status.toLowerCase());
        const isTypeMatch = filterCriteria.type === '' || quest.title.toLowerCase().includes(filterCriteria.type.toLowerCase());
        const isAreaMatch = filterCriteria.area === '' || quest.area.toLowerCase().includes(filterCriteria.area.toLowerCase());

        return (
          isStatusMatch &&
          quest.minRank >= filterCriteria.minRank &&
          quest.maxRank <= filterCriteria.maxRank &&
          quest.reward >= filterCriteria.minReward &&
          isAreaMatch &&
          isTypeMatch
        );
      });

      applyFilters(filteredData);
    };

    applyFiltersOnChange(); // Applica i filtri al caricamento iniziale
  }, [filterCriteria, questDataList]); // Rileva cambiamenti nei criteri di filtro e dati delle quest

  return (
    <div style={{ textAlign: 'left', border: '1px solid #ddd', padding: '45px', borderRadius: '15px', marginLeft: '20px', width: '300px', height: '700px' }}>
      <div>
        <label>Type:</label>
        <input
          type="text"
          value={filterCriteria.type}
          onChange={(e) => handleInputChange('type', e.target.value)}
        />
        <label>Min Rank:</label>
        <input
          type="number"
          value={filterCriteria.minRank}
          onChange={(e) => handleInputChange('minRank', parseInt(e.target.value) || 0)}
        />
        <label>Max Rank:</label>
        <input
          type="number"
          value={filterCriteria.maxRank}
          onChange={(e) => handleInputChange('maxRank', parseInt(e.target.value) || Infinity)}
        />
        <label>Min Reward:</label>
        <input
          type="number"
          value={filterCriteria.minReward}
          onChange={(e) => handleInputChange('minReward', parseInt(e.target.value) || 0)}
        />
        <label>Area:</label>
        <input
          type="text"
          value={filterCriteria.area}
          onChange={(e) => handleInputChange('area', e.target.value)}
        />
        <label>Status:</label>
        <input
          type="text"
          value={filterCriteria.status}
          onChange={(e) => handleInputChange('status', e.target.value)}
        />
        <div style={{ marginTop: '30px' }}></div>
        <button onClick={handleApplyFilters}>
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default FilterComponent;
