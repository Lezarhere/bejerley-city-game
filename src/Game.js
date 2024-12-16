import React, { useState, useEffect, useRef } from 'react';

const TILE_SIZE = 32;
const MAP_WIDTH = 25;
const MAP_HEIGHT = 20;

const Game = () => {
  const [gameState, setGameState] = useState({
    player: {
      x: MAP_WIDTH / 2,
      y: MAP_HEIGHT / 2,
      direction: 'down',
      animationState: 'idle',
      frame: 0
    },
    map: [],
    npcs: {},
    time: {
      hour: 8,
      minute: 0,
      day: 1
    }
  });

  const canvasRef = useRef(null);

  useEffect(() => {
    initGame();
  }, []);

  const initGame = () => {
    // TODO: Implémenter l'initialisation
    console.log('Jeu initialisé');
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <canvas
        ref={canvasRef}
        width={MAP_WIDTH * TILE_SIZE}
        height={MAP_HEIGHT * TILE_SIZE}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
};

export default Game;