import { Logo } from '../Logo'
import { Dog } from '../Dog'
import { Subtitle } from '../Subtitle'
import { DogList } from '../DogList'

const dogs = [
  { name: 'Matthew', breed: 'hound', superpower: 'Pyro' },
  { name: 'Mark', breed: 'bull-terrier', superpower: 'Hydro' },
  { name: 'Luke', breed: 'greyhound', superpower: 'Electro' },
  { name: 'John', breed: 'dachshund', superpower: 'Magneto' },
]

export function Main() {
  return (
    <div>
      <Logo />
      <Subtitle Subtitle="Dogs are awesome" />
      <Dog name="Tom" breed="Bulldog" superpower="Heat vision">
        <img src={'/images/bulldog.png'} />
      </Dog>
      <Dog name="Liam" breed="scottie" superpower="yellow piss">
        <img src={'/images/scottie.png'} />
      </Dog>
      <Dog
        name="bartholomew bartamias the 2nd"
        breed="dachshund"
        superpower="big fart"
      >
        <img src={'/images/dachshund.png'} />
      </Dog>

      <DogList dogs={dogs} />
    </div>
  )
}
