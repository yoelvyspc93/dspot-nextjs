import Image from 'next/image'
import styles from './avatar.module.css'

export default function Avatar ({ available, img, imgDimension, statusDimension, ...props }) {
  const active = available ? '/asset/svg/badge-active.svg' : '/asset/svg/badge-desactive.svg'

  return (
    <div {...props}>
      <div className={styles.img}>
        <span className={styles.badge}>
          <Image src={active} alt='badge available' width={statusDimension} height={statusDimension} priority />
        </span>
        <Image src={img} alt='avatar' width={imgDimension} height={imgDimension} priority />
      </div>
    </div>
  )
}
