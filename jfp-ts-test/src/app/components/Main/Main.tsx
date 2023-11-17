import { ReactElement } from 'react' 
import { Title } from '../Title'
import { Form } from '../Form'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export function Main() :ReactElement {
  return (
    <>
      <Title />
      <Form /> 

    </>
  )
}
