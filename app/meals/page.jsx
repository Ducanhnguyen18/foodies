import Link from "next/link";
import styles from "./page.module.css";
import MealsGrid from "@/components/meals/MealsGrid/MealsGrid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

async function Meal() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

const Meals = async () => {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share you Favorite recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense
          fallback={<p className={styles.loading}>Fetching meals...</p>}
        >
          <Meal />
        </Suspense>
      </main>
    </>
  );
};

export default Meals;
