export interface Title {
  response:string,
  person: Person[]
}


export interface Person {
    id: number;
    name: string;
    description: string;
  }