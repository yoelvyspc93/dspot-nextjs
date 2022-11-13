/* global describe it expect beforeEach jest */

import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { IconArrowBlack, IconClose } from 'components'

describe('Icons', () => {
  const onClickArrowBlack = jest.fn()
  const onClickClose = jest.fn()

  beforeEach(() => {
    render(
      <>
        <IconArrowBlack onClick={onClickArrowBlack} />
        <IconClose onClick={onClickClose} />
      </>
    )
  })

  it('render icon component and click event', () => {
    const iconArrowBlack = screen.getByAltText('icon-arrow-black')
    const iconClose = screen.getByAltText('icon-close')

    expect(iconArrowBlack).toBeInTheDocument()
    expect(iconClose).toBeInTheDocument()

    fireEvent.click(iconArrowBlack)
    fireEvent.click(iconClose)
    expect(onClickArrowBlack).toHaveBeenCalledTimes(1)
    expect(onClickClose).toHaveBeenCalledTimes(1)
  })
})
