import axios from "axios";

export async function fetchPokemonData(name) {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
    );
    return response.data;
  } catch (err) {
    throw new Error("Pokemon not found");
  }
}

export async function fetchPokemonNames() {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000");
    return response.data.results.map((p) => p.name);
  } catch (err) {
    console.error("Failed to fetch Pokémon names:", err);
    return [];
  }
}