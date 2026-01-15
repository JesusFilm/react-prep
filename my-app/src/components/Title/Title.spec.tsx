import { render, screen } from '@testing-library/react'
import { Title } from './Title'

describe('Title Component', () => {
  test('Title renders correctly', () => {
    render(<Title />)
    const textElement = screen.getByText('hi')
    expect(textElement).toBeInTheDocument()
  })
})
