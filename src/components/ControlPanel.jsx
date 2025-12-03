import React from 'react';
import './ControlPanel.css';

const ControlPanel = ({ currentScene, onSceneChange }) => {
  const scenes = [
    { id: 'spring', label: 'Spring', emoji: '🌸' },
    { id: 'summer', label: 'Summer', emoji: '🌅' },
    { id: 'autumn', label: 'Autumn', emoji: '🍂' },
    { id: 'winter', label: 'Winter', emoji: '❄️' }
  ];

  return (
    <div className="control-panel">
      <div className="control-panel-title">Scenes</div>
      <div className="scene-buttons">
        {scenes.map((scene) => (
          <button
            key={scene.id}
            className={`scene-button ${currentScene === scene.id ? 'active' : ''}`}
            onClick={() => onSceneChange(scene.id)}
          >
            <span className="scene-emoji">{scene.emoji}</span>
            <span className="scene-label">{scene.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ControlPanel;

