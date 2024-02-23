import React from 'react';

const QuestComponent = ({ questDataList, onQuestClick }) => {
  return (
    <div className="row">
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
            className="col-md-4 mb-4"
            onClick={handleClick}
          >
            <div className="card">
              <img src="https://picsum.photos/200" className="card-img-top" alt="Quest" style={{}} />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">Reward: {reward}</p>
                <p className="card-text">Area: {area}</p>
                <p className="card-text">Status: {status}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default QuestComponent;
