/* global describe it expect beforeEach */

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { List } from 'components'

describe('List', () => {
  const props = {
    title: 'List',
    data: [
      {
        id: 1,
        img: '/asset/images/avatar.png',
        first_name: 'Jeremy',
        last_name: 'Davis',
        status: 'At work...',
        available: false
      },
      {
        id: 2,
        img: '/asset/images/avatar.png',
        first_name: 'Vlad',
        last_name: 'Baratovich',
        status: 'Hangout out by the pool',
        available: true
      }
    ]
  }

  beforeEach(() => {
    render(<List {...props} />)
  })

  it('render list component', () => {
    const component = screen.getByText(props.title)
    expect(component).toBeInTheDocument()

    const cardComponent = screen.getByText(props.data[0].status)
    expect(cardComponent).toBeInTheDocument()
  })
})
