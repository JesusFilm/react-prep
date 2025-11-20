import { render, screen } from '@testing-library/react'
import { Main } from './Main'

describe('ComponentName', () => {
  it('should do something', () => {
    render(<Main />)
    expect(screen.getByText('Timer App')).toBeInTheDocument()

    // Arrange
    // Assert
    // Act
  })
})
