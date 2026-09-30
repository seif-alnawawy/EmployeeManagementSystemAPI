export type Pet = {
  id: number;
  name: string;
  species: string;
  adopted: boolean;
  age: number;
};

export const pets: Pet[] = [
  {
    id: 1,
    name: "Buddy",
    species: "Dog",
    adopted: true,
    age: 3,
  },
  {
    id: 2,
    name: "Whiskers",
    species: "Cat",
    adopted: false,
    age: 2,
  },
  {
    id: 3,
    name: "Whiskers",
    species: "Cat",
    adopted: false,
    age: 2,
  },
  {
    id: 4,
    name: "Whiskers",
    species: "Cat",
    adopted: false,
    age: 2,
  },
];
