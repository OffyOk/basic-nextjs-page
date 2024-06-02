import Link from "next/link";
import TanStack from "../utils/tanStack";
export default function Navbar() {
  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max + 1);
  };
  const data = TanStack();
  // console.log(data);
  return (
    <div className="flex flex-col items-center text-center top-0 left-0 right-0 border-b shadow-lg border-gray-400 mb-5">
      <div className="py-28 bg-yellow-500 w-screen text-slate-100 uppercase">
        <h4 className="text-5xl ">
          <Link href={"/"}>Basic App</Link>
        </h4>
        <p className="text-lg">The way i can do</p>
      </div>
      <div className="w-screen flex justify-center bg-gray-900">
        <ul className="flex gap-3 text-slate-100 uppercase">
          <li>
            <Link className="hover:underline" href="/prop">
              Property
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href="/event">
              Event
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href={`/${getRandomInt(30)}`}>
              Route
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href={`dummy-ssr`}>
              ssr
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href="dummy-ssg">
              ssg
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href="dummy-isr">
              isr
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href="dummy-csr">
              csr
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href="dummy-tan">
              tan
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href="dummy-form">
              form
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
