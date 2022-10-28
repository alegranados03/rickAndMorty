const API_URL = "https://rickandmortyapi.com/api/";
export const API_ROUTES = {
  static: { characters: `${API_URL}/character` },
  dynamics: {
    character: (characterId: number) => `${API_URL}/character/${characterId}`,
    episodes: (episodes: number | number[]) => {
      const url = `${API_URL}/episode/`;
      if (Array.isArray(episodes)) {
        return `${url}${episodes.join(",")}`;
      }
      return `${url}${episodes}`;
    },
  },
};

export const ROUTES = {
  index: `/`,
  character: (characterId: number) => `/characters/${characterId}`,
};
