const sql = require("better-sqlite3");

const db = sql("meals.db");
console.log(db);

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("Select * from meals").all();
}
