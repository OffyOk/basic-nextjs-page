import { Inter } from "next/font/google";

import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="container">
        <div>
          <h1 className={inter.className}>Practice this all</h1>
        </div>
        <div className="flex flex-col border rounded-lg border-gray-500 rounded-lg p-3">
          <Link href="/Prop" className="hover:underline">
            Send Props Page
          </Link>
          <Link href="/Event" className="hover:underline">
            Listerner Page
          </Link>
        </div>
      </div>
    </main>
  );
}
