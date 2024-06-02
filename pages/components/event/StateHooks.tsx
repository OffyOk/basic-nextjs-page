import { useState } from "react";

export default function StateHooks() {
  const [count, setCount] = useState(0);
  function handleClick() {
    console.log("increment like count");
    setCount(count + 1);
  }
  function handleReset() {
    console.log("reset count");
    setCount(0);
    // setCount((count) => (count = 0)); // can use function to setCount like this
  }
  return (
    <>
      <button
        onClick={handleClick}
        className="bg-red-500 border border-gray-300 shadow-lg rounded-lg px-4 py-2"
      >
        Like ({count})
      </button>
      <button
        onClick={handleReset}
        className="bg-red-500 border border-gray-300 shadow-lg rounded-lg px-4 py-2"
      >
        reset
      </button>
    </>
  );
}
