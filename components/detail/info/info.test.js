/* global describe it expect beforeEach */

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { DetailInfo } from 'components'

describe('Detail Info', () => {
  const info = {
    phone: '(820) 289-1818',
    address_1: '5190 Center Court Drive',
    city: 'Spring',
    state: 'TX',
    zipcode: '77370',
    bio: "I'm very choosy. I'm also very suspicious, very irrational and I have a very short temper. I'm also extremely jealous and slow to forgive. Just so you know."
  }

  beforeEach(() => {
    render(<DetailInfo info={info} />)
  })

  it('render detail-info component', () => {
    const component = screen.getByText(info.zipcode)
    expect(component).toBeInTheDocument()
  })
})
