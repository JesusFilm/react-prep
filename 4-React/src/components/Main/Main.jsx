import { Logo } from '../Logo'
import { Dog } from '../Dog'
import { Subtitle } from '../Subtitle'
import { Doglist } from '../Doglist'

export function Main() {
  const DogsArray = [
    {
      name: 'Charles Oliveira',
      breed: 'GOAT',
      superpower: 'Awesome',
      image: 'hound',
    },
    {
      name: 'Desdemona',
      breed: 'Bulldog',
      superpower: 'Heat Vision',
      image: 'bulldog',
    },
    {
      name: 'test',
      breed: 'breed',
      superpower: 'superpower',
      image: 'scottie',
    },
  ]

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Logo />
      <Subtitle text="subtitle component text" />
      <Doglist array={DogsArray}></Doglist>
    </div>
  )
}
