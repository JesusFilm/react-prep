import { Logo } from '../Logo'
import { Dog } from '../Dog'
import { Subtitle } from '../Subtitle'
import { Photo } from '../Photo/Photo'
import { DogList } from '../DogList'
export function Main() {
  let DogsArray = [
    { name: 'D', breed: 'Bulldog', superpower: 'Heat vision' },
    { name: 'R', breed: 'Bulldog', superpower: 'Super strength' },
    { name: 'L', breed: 'Bulldog', superpower: 'Invisibility' },
  ]
  return (
    <div>
      <Logo />
      <Subtitle text="Canines using supercanine abilities for social good." />
      <Dog name="Desdemona" breed="Bulldog" superpower="Heat vision" />
      <Photo />
      <Dog name="Rex" breed="Bulldog" superpower="Super strength" />
      <Photo />
      <Dog name="Luna" breed="Bulldog" superpower="Invisibility" />
      <Photo />
      <DogList dogs={DogsArray} />
    </div>
  )
}
