const API_URL = "https://rickandmortyapi.com/api/";
export const ROUTES = {
  static: { characters: `${API_URL}/character` },
  dynamics: {
    character: (characterId: string | number) =>
      `${API_URL}/character/${characterId}`,
  },
};
