export const TILES = {
  GRASS: {
    id: 'grass',
    walkable: true,
    color: '#90EE90',
    char: '.',
  },
  PATH: {
    id: 'path',
    walkable: true,
    color: '#DEB887',
    char: '░',
  },
  BUILDING: {
    id: 'building',
    walkable: false,
    color: '#8B4513',
    char: '█',
    enterable: true,
  },
  TREE: {
    id: 'tree',
    walkable: false,
    color: '#228B22',
    char: '♣',
  },
  WATER: {
    id: 'water',
    walkable: false,
    color: '#4169E1',
    char: '~',
  }
};

export const TILE_SIZE = 32;
export const MAP_WIDTH = 25;
export const MAP_HEIGHT = 20;