import { Dog } from '../Dog/Dog'

export function DogList(props) {
  const dogsArray = props.dogsArray
  console.log(dogsArray)
  return (
    <>
      {dogsArray.map((dog) => (
        <Dog
          name={dog.name}
          breed={dog.breed}
          superpower={dog.superpower}
        ></Dog>
      ))}
    </>
  )
}
