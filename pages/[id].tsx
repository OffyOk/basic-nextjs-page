// import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

interface Recipe {
  id: number;
  name: string;
  image: string;
}
export default function DynamicRount({ recipe }: { recipe: Recipe }) {
  // const router = useRouter();
  // const { id } = router.query;
  // console.log(router);
  return (
    <div className="container">
      <div className="flex justify-between">
        <h4 className="text-xl font-bold decoration-stone-600">
          This page is about dynamic route
        </h4>
        <Link href="/">Back</Link>
      </div>
      <div>Post: {recipe.id}</div>
      <div className="flex justify-center">
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
      </div>
    </div>
  );
}

export async function getStaticProps({
  params,
}: {
  params: { id: string | number };
}) {
  const id = params.id;
  const res = await fetch(`https://dummyjson.com/recipes/${id}`);
  const recipe = await res.json();
  return { props: { recipe } };
}

export async function getStaticPaths() {
  const url = `https://dummyjson.com/recipes`;
  const res = await fetch(url);
  const dummy = await res.json();
  const recipes = dummy.recipes;
  // console.log(recipes);
  // console.log(Array.isArray(recipes)); // Should print true if recipes is an array

  const paths = recipes.map((recipe: Recipe) => {
    return {
      params: { id: recipe.id.toString() },
    };
  });
  // const paths = recipes.map((recipe: Recipe) => {
  //   return {
  //     params: { id: String(recipe.id) },
  //   };
  // });

  return {
    paths,
    // fallback: true,
    fallback: false,
  };
}
