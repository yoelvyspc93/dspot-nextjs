
import { Photo } from 'components'
import { useState } from 'react'

export default function useModalPhoto () {
  const [visible, setVisible] = useState(false)
  const [image, setImage] = useState({
    src: null,
    alt: ''
  })

  const openPhoto = (src, alt) => {
    setVisible(true)
    setImage({ src, alt })
  }
  const closePhoto = () => setVisible(false)

  const modal = (
    <>
      {visible && <Photo src={image.src} alt={image.alt} onClose={closePhoto} />}
    </>
  )

  return { modal, openPhoto }
}
