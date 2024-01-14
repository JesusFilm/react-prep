import { render } from '@testing-library/react'
import { Title } from '.'
import '@testing-library/jest-dom' //important!

describe('Title', () => {
  it('should have a title that says Tasks', () => {
    // Arrange
    const { getByText } = render(<Title label="Tasks" />)
    // Act - (Nothing here because it is only checking if text is present on page not needing to click any buttons etc..)
    // Assert
    const titleElement = getByText('Tasks')
    expect(titleElement).toBeInTheDocument()
  })
})
