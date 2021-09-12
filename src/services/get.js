import { getById, get } from "./db.js";

export const getPuzzlesStats = async () => {
  const collectionName = "stats";
  const key = "puzzles";
  const data = await getById(collectionName, key);
  // console.log("getPuzzlesStats : ", {data});

  return data;
}

export const getPuzzles = async () => {
  const collectionName = "puzzles";

  const results = await get(collectionName);
  // console.log("getPuzzlesStats : ", {results});

  return results[0];
}