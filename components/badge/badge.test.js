/* global describe it expect beforeEach */

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Badge } from 'components'

describe('Badge', () => {
  const text = 'At work'

  beforeEach(() => {
    render(<Badge>{text}</Badge>)
  })

  it('render badge component', () => {
    const component = screen.getByText(text)
    expect(component).toBeInTheDocument()
  })
})
