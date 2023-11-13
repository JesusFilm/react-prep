import { Logo } from '../Logo'
import { Dog } from '../Dog'
import { Subtitle } from '../Subtitle'
import { DogList } from '../DogList'
export function Main() {
  return (
    <div>
      <Logo />
      <Subtitle text="Canines using supercanine abilities for social good." />

      <DogList
        dogsArray={[
          {
            name: 'Rhino',
            breed: 'Husky',
            superpower: 'Eating',
          },

          {
            name: 'Ellie',
            breed: 'Chorkie',
            superpower: 'running',
          },
        ]}
      />
    </div>
  )
}
