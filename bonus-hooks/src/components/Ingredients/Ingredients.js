import React, { useState } from "react";

import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";

const Ingredients = () => {
  const [userIngredients, setUserIngredients] = useState([]);

  const addIngredientHandler = (ingredient) => {
    setUserIngredients((prevIngredients) => [
      ...prevIngredients,
      {
        id: Math.random().toString(),
        ...ingredient,
      },
    ]);
  };

  const removeItemHandler = (ingredientId) => {
    let updatedIngredients = [...userIngredients];
    updatedIngredients = updatedIngredients.filter((ingredient) => {
      return ingredient.id !== ingredientId;
    });
    setUserIngredients(updatedIngredients);
  };

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search />
        <IngredientList
          ingredients={userIngredients}
          onRemoveItem={removeItemHandler}
        />
      </section>
    </div>
  );
};

export default Ingredients;
