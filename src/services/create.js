import { upsert, update , save} from "./db.js";
// import { getPuzzlesStats } from "./get.js";

const updatePuzzleStats = async(stats) => {
  const collectionName = "stats";
  const key = "puzzles";
  const result = await upsert(collectionName, key, { 
    total: (stats?.total || 0) + 1
  })

  return result;
}

export const savePuzzles = async (data) => {
  const collectionName = "puzzles";
  // const stats = await getPuzzlesStats();
  const result = await save(collectionName, {...data, 'status': "not-complete"});
  return result;
}

export const updatePuzzles = async(key, data, status = "not-complete") => {
  const collectionName = "puzzles";

  const result = await update(collectionName, key, {...data, status});

  return result;
}

