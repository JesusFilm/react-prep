import { Dog } from '../Dog/Dog'

export function DogList(props) {
  return (
    <div>
      <span className="dogs">{props.dogs}</span>
      <>
        {props.dogs.map(({ newName, newBreed, newSuperpower }) => (
          <Dog name={newName} breed={newBreed} superpower={newSuperpower}>
            <img src={'/image/' + { newBreed } + '.png'} />
          </Dog>
        ))}
      </>
    </div>
  )
}
