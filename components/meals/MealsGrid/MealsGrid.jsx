import MealItem from "../MealsItem/MealsItem";
import styles from "./MealsGrid.module.css";

const MealsGrid = ({ meals }) => {
  console.log(meals);
  return (
    <ul className={styles.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
