import { getById, upsert } from "./db.js";

export const getPuzzlesStats = async () => {
  const collectionName = "stats";
  const key = "puzzles";
  const data = await getById(collectionName, key);
  console.log("getPuzzlesStats : ", {data});

  return data;
}

