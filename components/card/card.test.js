/* global describe it expect beforeEach */

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Card } from 'components'

describe('Card', () => {
  const props = {
    id: 1,
    img: '/asset/images/avatar.png',
    first_name: 'Jeremy',
    last_name: 'Davis',
    status: 'At work...',
    available: false
  }

  beforeEach(() => {
    render(<Card {...props} />)
  })

  it('render card component and verify the href', () => {
    const component = screen.getByText(props.status)
    expect(component).toBeInTheDocument()

    const link = screen.getByRole('link')
    expect(link.getAttribute('href')).toBe(`/detail/${props.id}`)
  })
})
