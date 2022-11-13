/* global describe it expect beforeEach */

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Avatar } from 'components'

describe('Avatar', () => {
  const props = {
    available: true,
    img: '/asset/images/avatar.png',
    imgDimension: 136,
    statusDimension: 24
  }

  beforeEach(() => {
    render(<Avatar {...props} />)
  })

  it('render avatar component', () => {
    const component = screen.getByAltText('badge available')
    expect(component).toBeInTheDocument()
  })
})
