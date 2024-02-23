import React, { useState } from 'react';

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
    setFilterCriteria({ ...filterCriteria, [field]: value });
  };

  const handleApplyFilters = () => {
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

  return (
    <div style={{ textAlign: 'left', border: '1px solid #ddd', padding: '25px', borderRadius: '15px', marginLeft: '20px', width: '200px', height: '700px' }}>
      <div>
        <label>Type:</label>
        <input
          type="text"
          value={filterCriteria.type}
          onChange={(e) => handleInputChange('type', e.target.value)}
        />
        <div style={{ textAlign: 'left' }}></div>
        <label>Min Rank:</label>
        <input
          type="number"
          value={filterCriteria.minRank}
          onChange={(e) => handleInputChange('minRank', parseInt(e.target.value) || 0)}
        />
        <div style={{ textAlign: 'left' }}></div>
        <label>Max Rank:</label>
        <input
          type="number"
          value={filterCriteria.maxRank}
          onChange={(e) => handleInputChange('maxRank', parseInt(e.target.value) || Infinity)}
        />
        <div style={{ textAlign: 'left' }}></div>
        <label>Min Reward:</label>
        <input
          type="number"
          value={filterCriteria.minReward}
          onChange={(e) => handleInputChange('minReward', parseInt(e.target.value) || 0)}
        />
        <div style={{ textAlign: 'left' }}></div>
        <label>Area:</label>
        <input
          type="text"
          value={filterCriteria.area}
          onChange={(e) => handleInputChange('area', e.target.value)}
        />
        <div style={{ textAlign: 'left' }}></div>
        <label>Status:</label>
        <input
          type="text"
          value={filterCriteria.status}
          onChange={(e) => handleInputChange('status', e.target.value)}
        />

        <button onClick={handleApplyFilters}>
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default FilterComponent;
