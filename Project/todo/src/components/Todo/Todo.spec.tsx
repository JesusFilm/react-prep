import { Todo } from '.'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Todo', () => {
  it('should render', () => {
    const { getByText } = render(<Todo />)
    expect(getByText('Hello World')).toBeInTheDocument()
  })
})
