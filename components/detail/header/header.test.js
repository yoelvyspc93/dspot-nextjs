/* global describe it expect beforeEach */

import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { DetailHeader } from 'components'

describe('Detail Header', () => {
  const data = {
    id: 6,
    img: '/asset/images/avatar.png',
    first_name: 'Steph',
    last_name: 'Walters',
    phone: '(820) 289-1818',
    address_1: '5190 Center Court Drive',
    city: 'Spring',
    state: 'TX',
    zipcode: '77370',
    bio: "I'm very choosy. I'm also very suspicious, very irrational and I have a very short temper. I'm also extremely jealous and slow to forgive. Just so you know.",
    photos: [
      '/asset/images/galery.png',
      '/asset/images/galery.png',
      '/asset/images/galery.png',
      '/asset/images/galery.png'
    ],
    statuses: [
      'Developing something amazing',
      'This could be interesting....',
      'Man, life is so good',
      'There is nothing quite like a good friend',
      'Take a look around you, everything is awesome',
      'What is the point of all of this'
    ],
    available: true
  }

  beforeEach(() => {
    render(<DetailHeader data={data} />)
  })

  it('render detail-header component and click event', () => {
    const component = screen.getByText(data.city)
    expect(component).toBeInTheDocument()

    const info = screen.getByRole('tab-info')
    const photos = screen.getByRole('tab-photos')

    fireEvent.click(photos)
    expect(info).toHaveClass('tab_desactive')
    expect(photos).toHaveClass('tab_active')

    fireEvent.click(info)
    expect(info).toHaveClass('tab_active')
    expect(photos).toHaveClass('tab_desactive')
  })
})
