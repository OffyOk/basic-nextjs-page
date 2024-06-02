import Navbar from "./components/navbar";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <section className="flex justify-center">{children}</section>
    </>
  );
}
