import { Logo } from "./components/Logo";
import { Subtitle } from "./components/Subtitle";
import { Dog } from "./components/Dog";
import { DogList } from "./components/DogList/DogList";
import "./App.css";

// This is the parent component.
// The main styles of the app are imported and applied here. See line 2. Feel free to have a look at the style sheet and have a play around.

const dogList = [{
  name: 'Desdemona',
  breed: 'Bulldog',
  superpower: 'Heat Vision'
},
{ 
 name: 'Jay',
 breed: 'Yorky',
 superpower: 'Flight' 
}
]

export function App() {
  return (
    <div className="container">
      <Logo />
      <Subtitle text='Canines using supercanine abilities for social good.' />
      {/* <Dog name="Desdemona" breed="Bulldog" superpower="Heat vision" /> */}
      <DogList list={dogList} />
    </div>
  );
}


