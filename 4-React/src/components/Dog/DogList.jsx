import { Dog } from '../Dog'

export function DogList({ dogs }) {
  // give a dogs array, for each element, render a dog component
  const dogList = dogs.map((dog) => <Dog dog={dog} />)
  return <>{dogList}</>
}
