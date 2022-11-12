/* global describe it expect */

import { render, screen } from '@testing-library/react'
import Button from './button'
import '@testing-library/jest-dom'

describe('Button', () => {
  it('render button component', () => {
    render(<Button color='primary'>Detail</Button>)

    const button = screen.getByRole('button', { name: 'Detail' })
    expect(button).toBeInTheDocument()
  })

  it('render button enable and disabled', () => {
    render(
      <>
        <Button color='primary'>Enable</Button>
        <Button color='primary' disabled>Disabled</Button>
      </>
    )

    const buttonEnable = screen.getByRole('button', { name: 'Enable' })
    const buttonDisabled = screen.getByRole('button', { name: 'Disabled' })

    expect(buttonEnable).not.toBeDisabled()
    expect(buttonDisabled).toBeDisabled()
  })
})
