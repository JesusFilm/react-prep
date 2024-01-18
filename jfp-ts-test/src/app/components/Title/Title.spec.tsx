import { render } from '@testing-library/react'
import { Title } from '.'
import '@testing-library/jest-dom'
// From the.toBeInTheDocument not being a function:
// import '@testing-library/jest-dom/extend-expect'

describe('Title Component', () => {
  it('renders default text when label prop is not provided', () => {
    const { getByText } = render(<Title />)
    const defaultText = getByText('Hello World')
    expect(defaultText).toBeInTheDocument()
  })

  it('renders the custom title, "To Do List"', () => {
    const customTitle = 'To Do List'
    const { getByText } = render(<Title label="To Do List" />)
    const renderedTitle = getByText('To Do List')
    expect(renderedTitle).toBeInTheDocument()
  })
})