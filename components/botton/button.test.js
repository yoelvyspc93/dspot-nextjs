/* global describe it expect jest */

import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Button } from 'components'

describe('Button', () => {
  it('render button component, test enabled and disabled properties', () => {
    const mockHandler = jest.fn()

    render(
      <>
        <Button color='primary' onClick={mockHandler}>Enable</Button>
        <Button color='primary' disabled>Disabled</Button>
      </>
    )

    const buttonEnable = screen.getByRole('button', { name: 'Enable' })
    const buttonDisabled = screen.getByRole('button', { name: 'Disabled' })

    expect(buttonEnable).toBeInTheDocument()
    expect(buttonDisabled).toBeInTheDocument()

    expect(buttonEnable).not.toBeDisabled()
    expect(buttonDisabled).toBeDisabled()

    fireEvent.click(buttonEnable)
    expect(mockHandler).toHaveBeenCalledTimes(1)
  })
})
