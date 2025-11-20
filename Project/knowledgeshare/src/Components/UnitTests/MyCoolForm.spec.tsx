import {render, screen} from '@testing-library/react'
import { MyCoolForm } from './MyCoolForm'

describe('MyCoolForm', () => {

  it('should submit form', () => {
    render(<MyCoolForm />) 

    screen.debug()
  })
}) 