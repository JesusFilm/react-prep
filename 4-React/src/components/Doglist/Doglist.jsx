import { Dog } from "../Dog/dog"

export function Doglist(props) {
  return (
    <>
      {props.dogArray.map((doglist) => (
        <Dog
          name={doglist.name}
          breed={doglist.breed}
          superpower={doglist.superpower}
        />
      ))}
    </>
  )
}
