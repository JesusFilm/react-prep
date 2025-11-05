import { Logo } from '../Logo'
import { Dog } from '../Dog'
import { Subtitle } from '../Subtitle'

export function Main() {
  return (
    <div>
      <Logo />
      <Subtitle Subtitle="Dogs are awsome" />
      <Dog
        name="Piss"
        breed="Bulldog"
        superpower="Heat vision"
        image="bulldog"
      />
      <Dog name="bob" superpower="yellow piss" />
      <Dog name="bartholomew bartamias the 2nd" breed="Poodle" />
    </div>
  )
}
