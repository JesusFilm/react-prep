import { render, screen } from '@testing-library/react'
import { Title } from './Title'

describe('ComponentName', () => {
  it('should render title of app', () => {
    render(<Title label="test name 12345"></Title>)
    expect(screen.getByText('test name 12345')).toBeInTheDocument()

    // Arrange
    // Assert
    // Act
  })
})
