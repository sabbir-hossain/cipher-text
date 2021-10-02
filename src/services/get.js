import { getById, get } from "./db.js";

export const getPuzzlesStats = async () => {
  const collectionName = "stats";
  const key = "puzzles";
  const data = await getById(collectionName, key);
  return data;
}

export const getPuzzles = async (id=null) => {
  const collectionName = "puzzles";
  if(id) {
    const results = await getById(collectionName, id);
    return results;
  } else {
    const results = await get(collectionName);
    return results[ Math.round(Math.random() * (results.length - 1))];
  }
}