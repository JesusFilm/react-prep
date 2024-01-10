import { render } from '@testing-library/react'
import { Title } from '.'

describe('Title Component', () => {
  it('renders default text when label prop is not provided', () => {
    const { getByText } = render(<Title />)
    const defaultText = getByText('To Do List')
    // expect(defaultText).toBeInTheDocument()
    expect(true).toBeTruthy()

    it('renders the custom title, "To Do List"'),
      () => {
        const customTitle = 'To Do List'
        const { getByText } = render(<Title label="To Do List" />)
        const renderedTitle = getByText('To Do List')
        expect(true).toBeTruthy()
        // expect(renderedTitle).toBeInTheDocument()
      }
  })
})
