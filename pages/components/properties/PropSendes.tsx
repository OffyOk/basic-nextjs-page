import { Person } from "../../utils/helper";
export default function PropSendDestructuring({ title }: { title: Person[] }) {
  return (
    <div className="mt-4">
      <h4 className="text-lg font-bold decoration-stone-600">
        Passing props to a component,When use destructuring
      </h4>
      <ul>
        {title.map((person, index) => (
          <li key={index}>
            <div>id: {person.id}</div>
            <div>name: {person.name}</div>
            <div>description: {person.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
