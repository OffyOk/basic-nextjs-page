import Image from "next/image";

interface Recipes {
  id: number;
  name: string;
  image: string;
}

function DummySSR({ recipes }: { recipes: Recipes[] }) {
  return (
    <div className="container mb-5">
      <h2 className="text-xl font-bold">
        Hello, This is SSR(Server Side Render)
      </h2>
      <p className="font-semibold mb-5">
        ตัว ssr นี้จะ render ทุกครั้งที่มีการ request นะ
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        {recipes.map((recipe: Recipes) => (
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
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const getRandomInt = () => {
    return Math.floor(Math.random() * 10 + 1);
  };
  const res = await fetch(
    `https://dummyjson.com/recipes?limit=${getRandomInt()}`
  );
  const response: { recipes: Recipes[] } = await res.json();
  const recipes = response.recipes;
  return { props: { recipes } };
}

export default DummySSR;
