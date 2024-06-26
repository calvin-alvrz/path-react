export default function Stats({ items }) {
  // Option of early return
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list</em>
      </p>
    );

  // Example of Derived State
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {/* Conditional Rendering Example */}
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
