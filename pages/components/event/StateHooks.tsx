import { useState } from "react";

export default function StateHooks() {
  const [count, setCount] = useState(0);
  function handleClick() {
    const bigbody = document.querySelector("div");
    const text = document.createElement("p");
    const textInside = "develop. preview. ship.";
    const textContent = document.createTextNode(textInside);
    text.appendChild(textContent);
    bigbody ? bigbody.appendChild(text) : console.log("no bigbody");
    setCount(count + 1);
  }
  function handleReset() {
    const bigbody = document.querySelector("div");

    if (bigbody && bigbody.lastElementChild && bigbody.childElementCount > 2) {
      bigbody.removeChild(bigbody.lastElementChild);
    }
    // console.log("reset count");
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
