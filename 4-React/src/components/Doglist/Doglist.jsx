import { Dog } from '../Dog'

export function Doglist(props) {
  return (
    <div>
      {props.array.map((dog) => (
        <Dog
          name={dog.name}
          breed={dog.breed}
          superpowers={dog.superpower}
          image={dog.image}
        ></Dog>
      ))}
    </div>
  )
}
