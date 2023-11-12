import { Logo } from '../Logo'

import { Dog } from '../Dog'

import{Subtitle} from '../Subtitle'

export function Main() {
  return (
    <>
      <Logo />
      <Subtitle text='Canines using supercanine abilities for social good.' />
      <Dog name="Desdemona" breed="Bulldog" superpower="Heat vision" />
      <Dog
        name="Bobo"
        breed="Husky"
        superpower="Breaking things down to its finest component"
      />
      <Dog
        name="Jack"
        breed="Poodle"
        superpower="Breaking things down to its finest component"
      />
    </>
  )
}
