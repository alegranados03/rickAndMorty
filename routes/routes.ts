const API_URL = "https://rickandmortyapi.com/api/";
export const API_ROUTES = {
  static: { characters: `${API_URL}/character` },
  dynamics: {
    character: (characterId: number) => `${API_URL}/character/${characterId}`,
  },
};

export const ROUTES = {
  character: (characterId: number) => `/characters/${characterId}`,
};
