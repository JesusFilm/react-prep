import { render } from '@testing-library/react'
import { Title } from '.'
import '@testing-library/jest-dom' //important!

describe('Title', () => {
  it('should have a title that says Tasks', () => {
    // Arrange
    const { getByText } = render(<Title />)
    // Act - (Nothing here because just checking if text is present on page not needing to click any buttons etc..)
    // Assert
    const titleElement = getByText(/Tasks/i)
    expect(titleElement).toBeInTheDocument()
  })
})
