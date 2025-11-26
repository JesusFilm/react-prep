import { render, screen } from '@testing-library/react'
import { Title } from './Title'

describe('Title', () => {
  it('should display the title', () => {
    render(<Title label="Timers" />)
    const Label = screen.getByText('Timers')
    expect(Label).toBeInTheDocument()
  })
})
