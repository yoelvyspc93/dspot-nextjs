import { Divider } from 'components'
import styles from './info.module.css'

export default function DetailInfo ({ info }) {
  return (
    <div className={styles.card}>
      <div className={styles.bio}>
        <div className={styles.typography_title}>
          Bio:
        </div>
        <div className={styles.typography_description}>
          {info.bio}
        </div>
      </div>
      <Divider />
      <div className={styles.phone}>
        <div className={styles.typography_title}>
          Phone:
        </div>
        <div className={styles.typography_description}>{info.phone}</div>
      </div>
      <Divider />
      <div className={styles.more}>
        <div className={styles.typography_title}>
          Address:
        </div>
        <div className={styles.typography_description}>{info.adderss}</div>
        <div className={styles.typography_title}>
          City:
        </div>
        <div className={styles.typography_description}>{info.city}</div>
        <div className={styles.typography_title}>
          State:
        </div>
        <div className={styles.typography_description}>{info.state}</div>
        <div className={styles.typography_title}>
          Zipcode
        </div>
        <div className={styles.typography_description}>{info.zipcode}</div>
      </div>
    </div>
  )
}
