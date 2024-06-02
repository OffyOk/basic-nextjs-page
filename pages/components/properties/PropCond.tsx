function createTitle(testprop: string) {
  if (testprop) {
    return testprop;
  } else {
    return "Default testprop";
  }
}

export default function PropCondition({ testprop }: { testprop: string }) {
  return (
    <>
      <h4 className="text-lg font-bold decoration-stone-600">
        Condition redering
      </h4>
      <div>This is Prop with condition: {createTitle(testprop)}</div>
    </>
  );
}
