import PropSend from "./components/properties/PropSend";
import PropSendDestructuring from "./components/properties/PropSendes";
import PropCondition from "./components/properties/PropCond";
import PropTernary from "./components/properties/PropTernary";
import { title } from "./utils/const";
import Link from "next/link";

export default function PropPage() {
  return (
    <div className="container">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold decoration-stone-600">
          This page about how to send property to other component
        </h1>
        <Link href="/">Back</Link>
      </div>
      <PropSend title={title.person} />
      <PropSendDestructuring title={title.person} />
      <PropCondition testprop="testasdf" />
      <PropTernary testprops="" />
    </div>
  );
}
