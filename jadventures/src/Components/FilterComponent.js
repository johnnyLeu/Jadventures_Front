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
    setFilterCriteria(prevState => ({
      ...prevState,
      [field]: value
    }));
  };

  const handleApplyFilters = () => {
    const filteredData = questDataList.filter((quest) => {
      const isStatusMatch = filterCriteria.status === '' || quest.status.toLowerCase() === filterCriteria.status.toLowerCase();
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
    <div className="card" style={{ width: '38rem', margin: '20px' }}>
      <div className="card-body">
        <h5 className="card-title">Filters</h5>
        <label>Type:</label>
        <input
          type="text"
          className="form-control"
          value={filterCriteria.type}
          onChange={(e) => handleInputChange('type', e.target.value)}
        />
        <label>Min Rank:</label>
        <input
          type="number"
          className="form-control"
          value={filterCriteria.minRank}
          onChange={(e) => handleInputChange('minRank', parseInt(e.target.value) || 0)}
        />
        <label>Max Rank:</label>
        <input
          type="number"
          className="form-control"
          value={filterCriteria.maxRank}
          onChange={(e) => handleInputChange('maxRank', parseInt(e.target.value) || Infinity)}
        />
        <label>Min Reward:</label>
        <input
          type="number"
          className="form-control"
          value={filterCriteria.minReward}
          onChange={(e) => handleInputChange('minReward', parseInt(e.target.value) || 0)}
        />
        <label>Area:</label>
        <input
          type="text"
          className="form-control"
          value={filterCriteria.area}
          onChange={(e) => handleInputChange('area', e.target.value)}
        />
        <label>Status:</label>
        <input
          type="text"
          className="form-control"
          value={filterCriteria.status}
          onChange={(e) => handleInputChange('status', e.target.value)}
        />
        <button className="btn btn-primary mt-3" onClick={handleApplyFilters}>
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default FilterComponent;
