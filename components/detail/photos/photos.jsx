import Image from 'next/image'
import styles from './photos.module.css'

export default function DetailPhotos ({ photos, onClick }) {
  return (
    <div className={styles.photos}>
      {photos.map((photo, index) => {
        return (
          <span key={index}>
            <Image src={photo} alt={`galery-photo-${index}`} width={136} height={136} onClick={() => onClick(photo, `galery-photo-full-${index}`)} priority />
          </span>
        )
      })}
    </div>
  )
}
