import Image from "next/image";
import TanStack from "./utils/tanStack";

export default function DummyTan() {
  const data = TanStack();
  // console.log("data from tan", TanStack());
  return (
    <div className="container mb-5">
      <div>
        <h2 className="text-xl font-bold">Dummy, This is TanStack(useQuery)</h2>
        <p className="font-semibold mb-5">
          ส่วนตัวนี้เป็นการ render จากฝั่ง client เหมือน react เลย
        </p>
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {data &&
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
          ))}
      </div>
    </div>
  );
}
