import { Logo } from '../Logo'
import { Dog } from '../Dog'
import { Subtitle } from '../Subtitle'
import { Doglist } from '../Doglist'

export function Main() {
  return (
    <>
      <Logo />
      <Subtitle text="aeiufhjhszedfg" />
      <Doglist
        dogArray={[
          { name: 'dog1', breed: 'dawg', superpower: 'ecpiness' },
          { name: 'dog2', breed: 'dawg', superpower: 'ecpiness' },
          { name: 'dog3', breed: 'dawg', superpower: 'ecpiness' },
        ]}
      />
    </>
  )
}
