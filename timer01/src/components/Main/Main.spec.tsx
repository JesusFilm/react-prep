import { render, screen } from '@testing-library/react'
import { Main } from './Main'

describe('Main', () => {
  it('should display Main page component ', () => {
    render(<Main />)
    const Label = screen.getByText('Timers')
    expect(Label).toBeInTheDocument()
  })
})
