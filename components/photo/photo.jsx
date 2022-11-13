import Image from 'next/image'
import { IconClose } from 'components'
import styles from './photo.module.css'

export default function Photo ({ src, alt, onClose }) {
  return (
    <div className={styles.container}>
      <IconClose className={styles.close} onClick={onClose} />
      <div className={styles.page}>
        <Image src={src} alt={alt} width={985} height={656} />
      </div>
    </div>
  )
}
