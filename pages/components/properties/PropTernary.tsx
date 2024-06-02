export default function PropTernary({ testprops }: { testprops: string }) {
  return (
    <>
      <h4 className="text-lg font-bold decoration-stone-600">
        Condeition Redering,but use Ternary condition
      </h4>
      <div>
        This is Prop with Ternary: {testprops ? testprops : "default value"}
      </div>
    </>
  );
}
