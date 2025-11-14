import Image from 'next/image'
import { Main } from '@/components/Main'
import { MainText } from '@/components/MainText'
import { BulletPoint } from '@/components/BulletPoint'

export default function Home() {
  return (
    <div>
      <div className="justify-self-center">
        <Main />
      </div>

      <div className="grid h-56 grid-cols-2 content-around">
        <MainText paragraph="A way of representing a control systems (especially when its output feeds back into the input as an error) is through block diagrams. This is a visual way of seeing the relationships between transfer functions and inputs and outputs."></MainText>
        <Image
          alt="block diagram"
          src="/images/lti-block-diagram.png"
          width={400}
          height={100}
        />
      </div>

      <div className="grid justify-self-start">
        <BulletPoint
          Points="It takes X(s) as the input (or “Cause“) and produces Y(s) as the
          output (or “Effect“)"
        />
        <BulletPoint Points="The block diagram is unidirectional, meaning that the Effect can not produce a Cause" />

        <BulletPoint Points="Mathematically this block looks like: Y(s)=G(s)X(s)" />
      </div>

      <div className="grid h-56 grid-cols-2 content-around">
        <button className="favorite styled" type="button">
          Next Page
        </button>
      </div>
    </div>
  )
}
