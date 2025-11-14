import { Dog } from '../Dog/Dog'

export function DogList({ dogs }) {
  return (
    <div>
      <>
        {dogs.map(({ newName, newBreed, newSuperpower }) => (
          <Dog
            key={newName}
            name={newName}
            breed={newBreed}
            superpower={newSuperpower}
          >
            <img src={'/image/${newBreed}.png'} alt={newBreed} />
          </Dog>
        ))}
      </>
    </div>
  )
}
