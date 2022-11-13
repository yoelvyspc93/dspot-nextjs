/* global describe it expect beforeEach */

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Typography } from 'components'

describe('Typography', () => {
  const text = 'Friends'

  beforeEach(() => {
    render(<Typography title body small blod medium regular>{text}</Typography>)
  })

  it('render font component and check styles', () => {
    const component = screen.getByText(text)
    expect(component).toBeInTheDocument()
  })
})
