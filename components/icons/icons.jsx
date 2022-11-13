import Image from 'next/image'
import styles from './icons.module.css'

export function IconArrowBlack ({ onClick, ...props }) {
  return (
    <div {...props}>
      <div className={`${styles.icon} ${styles.icon_arrow_black}`} onClick={onClick}>
        <Image src='/asset/svg/arrow-black.svg' alt='icon-arrow-black' width={24} height={24} />
      </div>
    </div>
  )
}

export function IconClose (props) {
  return (
    <div {...props}>
      <span className={`${styles.icon} ${styles.icon_close}`}>
        <Image src='/asset/svg/close.svg' alt='icon-close' width={24} height={24} />
      </span>
    </div>

  )
}
