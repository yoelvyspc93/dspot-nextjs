/* global describe it expect beforeEach jest */

import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Photo } from 'components'

describe('Photo', () => {
  const onClosePhoto = jest.fn()

  const props = {
    src: '/asset/images/avatar.png',
    alt: 'image-photo',
    onClose: onClosePhoto
  }

  beforeEach(() => {
    render(<Photo {...props} />)
  })

  it('render photo component and click event', () => {
    const component = screen.getByAltText(props.alt)
    expect(component).toBeInTheDocument()

    const buttonClose = screen.getByAltText('icon-close')
    fireEvent.click(buttonClose.parentNode.parentNode)
    expect(onClosePhoto).toHaveBeenCalledTimes(1)
  })
})
