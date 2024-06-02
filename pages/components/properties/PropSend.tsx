import { Person, Title } from "../../utils/helper";

export default function PropSend(props: { title: Person[] }) {
  // console.log("this data from prop:", props);
  // console.log("Prop type is:", typeof props);
  // console.log("this data in prop:", props.title);
  // console.log("Title in Prop type is:", typeof props.title);
  //   console.log(
  //     "this data in title:",
  //     props.title.id,
  //     props.title.name,
  //     props.title.description
  //   );
  return (
    <div>
      <h4 className="text-lg font-bold decoration-stone-600">
        Passing props to a component
      </h4>
      <ul>
        {props.title.map((person, index) => (
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
