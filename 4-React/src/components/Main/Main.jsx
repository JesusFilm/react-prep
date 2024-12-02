import { Logo } from '../Logo'
import { Subtitle } from '../Subtitle'
import { DogList } from '../DogList'

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
