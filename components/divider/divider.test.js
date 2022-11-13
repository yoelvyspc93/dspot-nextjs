/* global describe it expect beforeEach */

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Divider } from 'components'

describe('Badge', () => {
  beforeEach(() => {
    render(<Divider />)
  })

  it('render divider component', () => {
    const component = screen.getByRole('divider')
    expect(component).toBeInTheDocument()
  })
})
