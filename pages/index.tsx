import { Inter } from "next/font/google";

import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  };
  return (
    <main className="flex flex-col items-center">
      <div className="container">
        <div>
          <h1 className={inter.className}>Practice this all</h1>
        </div>
        <div className="flex flex-col border rounded-lg border-gray-500 rounded-lg p-3">
          <Link href="/prop" className="hover:underline">
            Send Props Page
          </Link>
          <Link href="/event" className="hover:underline">
            Listerner Page
          </Link>
          <Link href={`/${getRandomInt(100)}`} className="hover:underline">
            how to use dynamic router
          </Link>
        </div>
      </div>
    </main>
  );
}
