import { Dog } from "../Dog";

export function DogList(props) {
  return <>{props.list.map(dog => <Dog name={dog.name} breed={dog.breed} superpower={dog.superpower} /> )}
  </>
}