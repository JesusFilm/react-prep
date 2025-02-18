import { Logo } from '../Logo'
import { Subtitle } from '../Subtitle'
import { DogList } from '../DogList'

/**
 * Renders the main layout of the application displaying a list of dogs.
 *
 * This React functional component creates an array of dog objects, each
 * containing properties such as name, breed, superpower, and imageSrc.
 * It then renders the following UI components:
 * - Logo: Displays the application logo.
 * - Subtitle: Shows a descriptive subtitle ("Canines using supercanine abilities for social good.").
 * - DogList: Receives the array of dog objects and renders the list of dogs.
 *
 * Note: There is commented-out code for rendering individual Dog components that could be utilized in the future.
 *
 * @returns {JSX.Element} The JSX layout for the Main component.
 */
export function Main() {
  // Create array of dog info objects
  let DogsArray = []
  DogsArray.push({
    name: 'Daisy',
    breed: 'Bull-terrier',
    superpower: 'Superpower 1',
    imageSrc: 'images/bull-terrier.png',
  })
  DogsArray.push({
    name: 'Maisy',
    breed: 'Greyhound',
    superpower: 'Superpower 2',
    imageSrc: 'images/greyhound.png',
  })
  DogsArray.push({
    name: 'Crazy',
    breed: 'Dachshund',
    superpower: 'Superpower 3',
    imageSrc: 'images/dachshund.png',
  })

  return (
    <div>
      <Logo />
      <Subtitle text="Canines using supercanine abilities for social good." />
      <DogList arrDogs={DogsArray} />
      {/* <Dog name="Dawg" breed="bulldog" superpower="Insane Kibble Eating" />
      <Dog name="Boi" breed="hound" />
      <Dog name="Daxter" breed="scottie" superpower="Ferocious Pooping" />
      <Dog name="Dingle" breed="dachshund" superpower="Murderous Puppy Eyes" /> */}
    </div>
  )
}
