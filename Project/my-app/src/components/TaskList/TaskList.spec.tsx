import { fireEvent, render } from '@testing-library/react'
import { TaskList } from '.'
import '@testing-library/jest-dom' //important!

describe('TaskList', () => {
  it('should start with three taskCards in it', () => {
    const mockFunction = jest.fn()

    const work = {
      id: '1',
      name: 'Do some work',
      completed: true,
    }

    //const { getby } = render(<TaskList />)

    // Act
    const deleteButton = 'x'
    //fireEvent.click(deleteButton)

    // Assert
    expect(mockFunction).toHaveBeenCalledTimes(1)
  })

  it('should allow other tasks to be added', () => {
    //call add funciton
    //check list length
  })

  it('should allow other tasks to be deleted', () => {
    //call delete function remove one from list
    //check list length
  })
})

// TODO ^^
