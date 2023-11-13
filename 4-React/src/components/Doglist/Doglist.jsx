import { Dog } from '../Dog'

export function Doglist(props) {
  const { dogArray } = props
  return (
    <>
      {dogArray.map((dog) => (
        <Dog name={dog.name} breed={dog.breed} superpower={dog.superpower} />
      ))}
    </>
  )
}
