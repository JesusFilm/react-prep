import { Logo } from '../Logo'
import { Dog } from '../Dog'
import { Subtitle } from '../Subtitle'

export function Main() {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Logo />
      <Subtitle text="subtitle component text" />
      <Dog
        name="Charles Oliveira"
        breed="GOAT"
        superpower="awesome"
        image="hound"
      />
      <Dog
        name="Desdemona"
        breed="Bulldog"
        superpower="Heat Vision"
        image="bulldog"
      />
      <Dog
        name="test"
        breed="scottie"
        superpower="superpower"
        image="scottie"
      />
    </div>
  )
}
