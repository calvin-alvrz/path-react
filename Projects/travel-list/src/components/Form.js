import { useState } from "react";

export default function Form({ onAddItems }) {
  // Step 1: Define a piece of state
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("5");

  function handleSubmit(e) {
    // Prevents tab from reloading
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        // Step 2: Use the state on element to be controlled
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        // Step 2: Use the state on element to be controlled
        value={description}
        // Step 3: Update the state variable
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
