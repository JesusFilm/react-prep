import { Logo } from '../Logo'
import { Dog } from '../Dog'
import { Subtitle } from '../Subtitle'
import { DogList } from '../DogList'

export function Main() {
  const DogsArray = [
    { name: 'Bully', breed: 'Bulldog', superpower: 'Having a smushed face' },
    { name: 'Greya', breed: 'Greyhound', superpower: 'Being lanky' },
    {
      name: 'Tutu',
      breed: 'Scottie',
      superpower: 'Lowkey has a beard and looks like a mop',
    },
    {
      name: 'Weiner',
      breed: 'Dachshund',
      superpower: 'Being so cute and looking like a sausage',
    },
  ]

  return (
    <div>
      <Subtitle text="Irene's Dog Collection" />
      <Logo />

      <DogList dogsArray={DogsArray} />
    </div>
  )
}
