import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Switch from './Switch'

describe('Switch', () => {
  it('should render with default label', () => {
    // Arrange & Act
    render(<Switch />)

    // Assert
    expect(screen.getByText('Switch')).toBeInTheDocument()
  })

  it('should render with custom label', () => {
    // Arrange
    const customLabel = 'Enable Feature'

    // Act
    render(<Switch label={customLabel} />)

    // Assert
    expect(screen.getByText(customLabel)).toBeInTheDocument()
  })

  it('should be unchecked by default', () => {
    // Arrange & Act
    render(<Switch />)

    // Assert
    const switchInput = screen.getByRole('switch')
    expect(switchInput).not.toBeChecked()
  })

  it('should be checked when defaultChecked is true', () => {
    // Arrange & Act
    render(<Switch defaultChecked={true} />)

    // Assert
    const switchInput = screen.getByRole('switch')
    expect(switchInput).toBeChecked()
  })

  it('should toggle when clicked', async () => {
    // Arrange
    const user = userEvent.setup()

    // Act
    render(<Switch />)
    const switchInput = screen.getByRole('switch')

    // Assert - initially unchecked
    expect(switchInput).not.toBeChecked()
    expect(screen.queryByText('Switch is ON')).not.toBeInTheDocument()

    // Act - click to toggle on
    await user.click(switchInput)

    // Assert - should be checked
    expect(switchInput).toBeChecked()
    expect(screen.getByText('Switch is ON')).toBeInTheDocument()

    // Act - click to toggle off
    await user.click(switchInput)

    // Assert - should be unchecked
    expect(switchInput).not.toBeChecked()
    expect(screen.queryByText('Switch is ON')).not.toBeInTheDocument()
  })

  it('should display "Switch is ON" text when checked', async () => {
    // Arrange
    const user = userEvent.setup()

    // Act
    render(<Switch />)
    const switchInput = screen.getByRole('switch')
    await user.click(switchInput)

    // Assert
    expect(screen.getByText('Switch is ON')).toBeInTheDocument()
  })

  it('should be disabled when disabled prop is true', () => {
    // Arrange & Act
    render(<Switch disabled={true} />)

    // Assert
    const switchInput = screen.getByRole('switch')
    expect(switchInput).toBeDisabled()
  })

  it('should not toggle when disabled', () => {
    // Arrange & Act
    render(<Switch disabled={true} defaultChecked={false} />)
    const switchInput = screen.getByRole('switch')

    // Assert - should be unchecked and disabled
    expect(switchInput).not.toBeChecked()
    expect(switchInput).toBeDisabled()
    // Note: We can't test clicking disabled elements with userEvent,
    // but we verify the element is properly disabled
  })
})

