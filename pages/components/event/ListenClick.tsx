export default function ListenClick() {
  function handleClick() {
    // console.log("increment like count");
  }
  return (
    <button
      onClick={handleClick}
      className="bg-red-500 border border-gray-300 shadow-lg rounded-lg px-4 py-2"
    >
      Like
    </button>
  );
}
