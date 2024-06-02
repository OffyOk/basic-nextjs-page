import Image from "next/image";
import { useEffect, useState } from "react";
interface Recipes {
  id: number;
  name: string;
  image: string;
}

export default function DummyForm() {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const queryString = query ? `/search?q=${query}` : "";
    console.log(queryString);
    const res = await fetch(`https://dummyjson.com/recipes${queryString}`);
    if (!res.ok) {
      throw new Error("there somthing wrong");
    }
    const data = await res.json();
    if (data.recipes) {
      const recipes = data.recipes;
      setData(recipes);
    } else {
      setData(data);
    }
  };

  useEffect(() => {
    fetchData().catch((e) => {
      console.error("Somthing went wrong", e);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const handleSearch = (e: any) => {
    if (e.key === "Enter" || e.type === "click") {
      setSearch(query);
    }
  };

  const handleInputChange = (e: any) => {
    setQuery(e.target.value);
    // console.log(query);
  };

  return (
    <div className="container mb-5">
      <div>
        <h2 className="text-xl font-bold">Dummy, Search Form</h2>
        <p className="font-semibold">
          เป็นการฝึกทำ Search แบบง่ายๆ ใช้แค่ useState useEffect ธรรมดา
        </p>
        <div className="flex justify-center m-4">
          <input
            className="border border-gray-300 rounded-lg shadow-lg mr-2 px-4"
            type="text"
            // onChange={(e) => setQuery(e.target.value)}
            onChange={handleInputChange}
            onKeyDown={handleSearch}
            placeholder="...Search"
          />
          <button
            className="bg-green-500 text-white border border-gray-300 rounded-lg shadow-lg px-3 py-1"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {data.length === 0 ? (
          <p className="text-xl font-semibold mt-5">Data not found</p>
        ) : (
          data.map((recipe: Recipes) => (
            <div
              className="flex-shrink flex flex-col items-center p-3 xl:mx-5 shadow-lg border rounded-xl"
              key={recipe.id}
            >
              <p className="text-lg font-semibold pb-2">{recipe.name}</p>
              <Image
                src={recipe.image}
                width="300"
                height="300"
                alt="random  image"
                className="rounded-xl"
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
