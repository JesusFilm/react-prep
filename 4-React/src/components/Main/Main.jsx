import { Logo } from '../Logo'
import { Dog } from '../Dog'

export function Main() {
  return (
    <div>
      <Logo />
      <Dog name="Charles Oliveira" breed="GOAT" superpower="awesome" />
      <Dog name="Desdemona" breed="Bulldog" superpower="Heat Vision" />
      <Dog name="test" breed="breed" superpower="superpower" />
    </div>
  )
}
