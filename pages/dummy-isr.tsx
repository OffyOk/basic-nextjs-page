import Image from "next/image";

function DummyISR({ recipes }: any) {
  return (
    <div className="container mb-5">
      <h2 className="text-xl font-bold">
        Dummy, This is ISR(Incremental Static Regeneration)
      </h2>
      <p className="font-semibold mb-5">
        จริงๆก็เป็น getStaticProps เวอร์ชัน upgrade โดยเพิ่ม revalidate
        เข้ามาให้ทำการ refresh ทุกๆ 300s ตามการ config นี้
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        {recipes.map((recipe: any) => (
          <div
            className="flex-shrink flex flex-col items-center p-3 xl:mx-5 shadow-lg border rounded-xl"
            key={recipe.id}
          >
            <p className="text-lg font-semibold pb-2">{recipe.name}</p>
            <Image
              src={recipe.image}
              width="300"
              height="300"
              alt="random image"
              className="rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const getRandomInt = () => {
    return Math.floor(Math.random() * 10 + 1);
  };
  const res = await fetch(
    `https://dummyjson.com/recipes?limit=${getRandomInt()}`
    // `https://dummyjson.com/recipes`
  );
  const response = await res.json();
  const recipes = response.recipes;

  return {
    props: {
      recipes: recipes,
      // recipes: recipes.slice(getRandomInt()),
    },
    revalidate: 300,
  };
}

export default DummyISR;
