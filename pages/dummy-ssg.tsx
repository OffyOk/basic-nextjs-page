import Image from "next/image";

interface PostType {
  id: number;
  title: string;
}

function DummySSG({ recipes }: { recipes: PostType[] }) {
  return (
    <div className="container mb-5">
      <h2 className="text-xl font-bold">
        Dummy, This is SSG(Server Site Generation)
      </h2>
      <p className="font-semibold mb-5">ตัวนี้ render ครั้งเดียวตอน build</p>
      {/* <ul>
        {posts.map((post: PostType) => (
          <li key={post.id}>- {post.title}</li>
        ))}
      </ul> */}
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
              alt="random  image"
              className="rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// export async function getStaticProps() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//     },
//   };
// }

export async function getStaticProps() {
  const getRandomInt = () => {
    return Math.floor(Math.random() * 10 + 1);
  };
  const res = await fetch(
    `https://dummyjson.com/recipes?limit=${getRandomInt()}`
  );
  const response = await res.json();
  const recipes = response.recipes;
  return { props: { recipes }, revalidate: 300 };
}

export default DummySSG;
