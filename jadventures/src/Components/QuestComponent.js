// src/components/QuestComponent.js
import React from 'react';

const QuestComponent = ({ questDataList, onQuestClick }) => {
  return (
    <div>
      {questDataList.map((quest) => {
        const { id, title, description, reward, area, status } = quest;

        const handleClick = () => {
          if (onQuestClick) {
            onQuestClick(id);
          }
        };

        return (
          <div
            key={id}
            style={{
              textAlign: 'center',
              marginLeft: '10',
              border: '4px solid #ddd',
              padding: '15px',
              borderRadius: '5px',
              marginBottom: '10px',
              cursor: 'pointer',
              height: '500px',
              width: '500px',
            }}
            onClick={handleClick}
          >
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Reward: {reward}</p>
            <p>Area: {area}</p>
            <p>Status: {status}</p>
          </div>
        );
      })}
    </div>
  );
};

export default QuestComponent;
