import { Logo } from '../Logo'
import { Dog } from '../Dog'
import { Subtitle } from '../Subtitle'
import { DogList } from '../DogList'

export function Main() {
  const dogsData = [
    { name: '4th dog', breed: 'rare', superpower: 'all of them' },
  ]
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Logo />
      <Subtitle text="Canines using supercanine abilities for social good." />
      <Dog name="Desdemona" breed="Bulldog" superpower="Heat vision" />
      <Dog name="AnodDogoo" breed="small" superpower="death vision" />
      <Dog
        key="3"
        name="Third dog!"
        breed="massive fella"
        superpower="death vision"
      />
      {/* <DogList dogs={dogsData} /> */}
    </div>
  )
}
