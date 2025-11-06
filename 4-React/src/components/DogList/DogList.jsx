import { Dog } from '../Dog/Dog'

export function DogList(props) {
  return (
    <div>
      <>
        {props.dogs.map(({ newName, newBreed, newSuperpower }) => (
          <Dog name={newName} breed={newBreed} superpower={newSuperpower}>
            <img src={'/image/' + newName + '.png'} />
          </Dog>
        ))}
      </>
    </div>
  )
}
