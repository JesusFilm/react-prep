import { Logo } from '../Logo'
import { Dog } from '../Dog'
import { DogList } from '../Dog'
import { Subtitle } from '../Subtitle'

const DogArray = [
  {
    name: 'Desdemona',
    breed: 'Bulldog',
    superpower: 'Heat vision',
    picture: '/images/bulldog.png',
  },
  {
    name: 'Mango',
    breed: 'Scottie',
    superpower: 'Sleeping',
    picture: '/images/scottie.png',
  },
  {
    name: 'Soomi',
    breed: 'Dachshund',
    superpower: 'Time travel',
    picture: '/images/dachshund.png',
  },
]

export function Main() {
  return (
    <div>
      <Logo />
      <Subtitle text="Canines using supercanine abilities for social good." />
      <DogList dogs={DogArray} />
      {/* <Dog dog={DogArray[0]} />
      <Dog dog={DogArray[1]} />
      <Dog dog={DogArray[2]} /> */}
    </div>
  )
}
