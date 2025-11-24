import { Dog } from '../Dog'
import { DogList } from '../DogList'
import { Logo } from '../Logo'
import { Subtitle } from '../Subtitle'

export function Main() {
  const dogs = [
    {
      name: 'Sofia',
      breed: 'Greyhound',
      superpower: 'Shoots laser beams out of her eyes',
    },
    {
      name: 'Desdemona',
      breed: 'Bulldog',
      superpower: 'Heat vision',
    },
    {
      name: 'Brandon',
      breed: 'Dachshund',
      superpower: 'Super-screaming',
    },
  ]
  return (
    <div>
      <Logo />
      <Subtitle text="Canines using super-canine abilities for social good." />
      <DogList dogs={dogs} />
    </div>
  )
}
