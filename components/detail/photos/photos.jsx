import Image from 'next/image'
import styles from './photos.module.css'

export default function DetailPhotos ({ photos }) {
  return (
    <div className={styles.photos}>
      {photos.map((photo, index) => {
        return (
          <span key={index}>
            <Image src={photo} alt='galery-photo' width={136} height={136} onClick={() => console.log({ photo })} />
          </span>
        )
      })}
    </div>
  )
}
