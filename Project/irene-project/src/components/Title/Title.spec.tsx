import { render, screen } from '@testing-library/react'
import Title from './Title'

describe('Title', () => {
  it('should display default label when no label prop is provided', () => {
    // Arrange & Act
    render(<Title />)

    // Assert
    expect(screen.getByText('Timer App')).toBeInTheDocument()
  })

  it('should display custom label when label prop is provided', () => {
    // Arrange
    const customLabel = 'My Timer Dashboard'

    // Act
    render(<Title label={customLabel} />)

    // Assert
    expect(screen.getByText(customLabel)).toBeInTheDocument()
  })

  it('should render as h1 heading', () => {
    // Arrange & Act
    render(<Title label="Test Title" />)

    // Assert
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Test Title')
  })
})

