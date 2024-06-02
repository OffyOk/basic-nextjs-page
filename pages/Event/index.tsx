import ListenClick from "../components/event/ListenClick";
import Link from "next/link";
import StateHooks from "../components/event/StateHooks";

export default function EventPage() {
  return (
    <div>
      <div className="flex justify-between">
        <h4 className="text-xl font-bold decoration-stone-600">
          This page is about event listener page
        </h4>
        <Link href="/">Back</Link>
      </div>
      <ListenClick />
      <p>This is about state, A component memory</p>
      <StateHooks />
    </div>
  );
}
