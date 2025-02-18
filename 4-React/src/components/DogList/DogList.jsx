import { Dog } from '../Dog'

/**
 * Renders a list of Dog components.
 *
 * This React functional component accepts an array of dog objects and returns a fragment 
 * containing a Dog component for each dog. Each Dog component receives the dog's name, breed, 
 * and superpower as props.
 *
 * @param {Object} props - The component props.
 * @param {Array<{name: string, breed: string, superpower: string}>} props.arrDogs - An array of dog objects.
 * @returns {JSX.Element} A React fragment containing a list of rendered Dog components.
 */
export function DogList({ arrDogs }) {
  return (
    <>
      {arrDogs.map((dog) => (
        <Dog name={dog.name} breed={dog.breed} superpower={dog.superpower} />
      ))}
    </>
  )
}
