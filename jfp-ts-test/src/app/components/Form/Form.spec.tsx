import { Form } from '.'
import { getByText, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

//Uses findByText, works
describe('Task Form', () => {
  it('renders default task name in form', () => {
    // const handleAdd = jest.fn()
    const { getByLabelText } = render(<Form handleAdd={jest.fn()} />)
    const defaultForm = getByLabelText('Task Name')
    expect(defaultForm).toBeInTheDocument()
  })

  it('renders submit button', () => {
    const { getByText } = render(<Form handleAdd={jest.fn()} />)
    const defaultButtonText = getByText('Submit')
    expect(defaultButtonText).toBeInTheDocument()
  })

  it('button click calls handleAdd once ', () => {
    const handleAdd = jest.fn()
    const { getByText } = render(<Form handleAdd={handleAdd} />)
    const submitButton = getByText('Submit')

    fireEvent.click(submitButton)

    expect(handleAdd).toHaveBeenCalledTimes(1)
  })
})

//Uses getByText, does not work
// describe('Task Form', () => {
//   it('renders default task name in form', () => {
//     // const handleAdd = jest.fn()
//     const { getByText } = render(<TextField />)
//     const defaultForm = getByText('Task Name')
//     expect(defaultForm).toBeInTheDocument
//   })

//   it('renders submit button', () => {
//     const { getByText } = render(<Button />)
//     const defaultButtonText = getByText('Submit')
//     expect(defaultButtonText).toBeInTheDocument
//   })
// })
