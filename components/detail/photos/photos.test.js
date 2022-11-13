/* global describe it expect beforeEach jest */

import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { DetailPhotos } from 'components'

describe('Detail Photo', () => {
  const photos = [
    '/asset/images/galery.png',
    '/asset/images/galery.png',
    '/asset/images/galery.png',
    '/asset/images/galery.png'
  ]
  const mockHandler = jest.fn()

  beforeEach(() => {
    render(<DetailPhotos photos={photos} onClick={mockHandler} />)
  })

  it('render detail-photo component', () => {
    const component = screen.getByAltText('galery-photo-0')
    expect(component).toBeInTheDocument()

    fireEvent.click(component)
    expect(mockHandler).toHaveBeenCalledTimes(1)
  })
})
