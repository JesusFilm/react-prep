import { Dog } from '../Dog'

export function DogList({ arrDogs }) {
  return (
    <>
      {arrDogs.map((dog) => (
        <Dog name={dog.name} breed={dog.breed} superpower={dog.superpower} />
      ))}
    </>
  )
}
