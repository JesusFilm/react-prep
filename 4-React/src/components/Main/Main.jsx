import { Logo } from '../Logo'

import { Dog } from '../Dog'

import { Subtitle } from '../Subtitle'

import { Doglist } from '../Doglist'

export function Main() {
  console.log('lkjdsfhkljsdfh')
  return (
    <>
      <Logo />
      <Subtitle text="These are ma dwags" />
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
      <Doglist
        dogArray={[
          { name: 'Desmond', breed: 'dog', superpower: 'lookin' },
          { name: 'Tatai', breed: 'dog', superpower: 'lookin' },
          { name: 'Siyang', breed: 'dog', superpower: 'lookin' },
        ]}
      />
    </>
  )
}
