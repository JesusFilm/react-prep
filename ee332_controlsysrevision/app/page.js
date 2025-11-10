import Image from 'next/image'
import { Main } from '@/components/Main'
import { MainText } from '@/components/MainText'

export default function Home() {
  return (
    <div className="flex justify-center">
      <Main />
      <MainText
        paragraph="A way of representing a control systems (especially when it’s output feeds back into the input as an error) is through block diagrams. This is a visual way of seeing the relationships between transfer functions and inputs and outputs.
"
      />
    </div>
  )
}
