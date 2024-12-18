const sql = require("better-sqlite3");

const db = sql("meals.db");
console.log(db);

export async function getMeals() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return db.prepare("Select * from meals").all();
  } catch (e) {
    throw new Error("Loading meals failed");
  }
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}
