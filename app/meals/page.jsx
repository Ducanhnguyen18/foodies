import Link from "next/link";

const Meals = () => {
  return (
    <div>
      <h1>Meals</h1>
      <p>
        <Link href="meals/MealDetails-1/post">MealDetails-1</Link>
      </p>
      <p>
        <Link href="meals/MealDetails-2/post">MealDetails-2</Link>
      </p>
    </div>
  );
};

export default Meals;
