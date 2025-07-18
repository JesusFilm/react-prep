import { Dog } from '../Dog'
import { Photo } from '../Photo/Photo'
export function DogList({ dogs }) {
  return (
    <>
      {dogs.map((dog, idx) => (
        <div key={idx}>
          <Dog name={dog.name} breed={dog.breed} superpower={dog.superpower} />
          <Photo />
        </div>
      ))}
    </>
  )
}
