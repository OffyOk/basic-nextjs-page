import { useState, useEffect } from "react";
import Image from "next/image";

interface RecipeData {
  id: number | string;
  name: string;
  image: string;
}

export default function DummyCSR() {
  const [data, setData] = useState<RecipeData[] | RecipeData>([]);
  const getRndIng = () => {
    return Math.floor(Math.random() * 30 + 1);
  };
  const fetchData = async (id?: string) => {
    const res = await fetch(`https://dummyjson.com/recipes/${id}`);
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
    fetchData("").catch((e) => {
      console.error("Somthing went wrong", e);
    });
  }, []);

  const handleClick = () => {
    const numStr = getRndIng().toString();
    fetchData(numStr);
  };
  const handleReset = () => {
    const numStr = "";
    fetchData(numStr);
  };

  return (
    <div className="container mb-5">
      <div>
        <h2 className="text-xl font-bold">
          Dummy, This is CSR(Client-side Rendering)
        </h2>
        <p className="font-semibold mb-5">
          ส่วนตัวนี้เป็นการ render จากฝั่ง client เหมือน react เลย
        </p>
        <button onClick={handleClick}>Count</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {Array.isArray(data) ? (
          data.map((recipe: any) => (
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
        ) : (
          <div
            className="flex-shrink flex flex-col items-center p-3 xl:mx-5 shadow-lg border rounded-xl"
            key={data.id}
          >
            <p className="text-lg font-semibold pb-2">{data.name}</p>
            <Image
              src={data.image}
              width="300"
              height="300"
              alt="random  image"
              className="rounded-xl"
            />
          </div>
        )}
      </div>
    </div>
  );
}
