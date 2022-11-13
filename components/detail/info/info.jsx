import { Divider, Typography } from 'components'
import styles from './info.module.css'

export default function DetailInfo ({ info }) {
  return (
    <div className={styles.card}>
      <div className={styles.bio}>
        <Typography body medium className={styles.typography_title}>
          Bio:
        </Typography>
        <Typography body regular className={styles.typography_description}>
          {info.bio}
        </Typography>
      </div>
      <Divider />
      <div className={styles.phone}>
        <Typography body medium className={styles.typography_title}>
          Phone:
        </Typography>
        <Typography body medium className={styles.typography_description}>{info.phone}</Typography>
      </div>
      <Divider />
      <div className={styles.more}>
        <Typography body medium className={styles.typography_title}>
          Address:
        </Typography>
        <Typography body medium className={styles.typography_description}>{info.address_1}</Typography>
        <Typography body medium className={styles.typography_title}>
          City:
        </Typography>
        <Typography body medium className={styles.typography_description}>{info.city}</Typography>
        <Typography body medium className={styles.typography_title}>
          State:
        </Typography>
        <Typography body medium className={styles.typography_description}>{info.state}</Typography>
        <Typography body medium className={styles.typography_title}>
          Zipcode
        </Typography>
        <Typography body medium className={styles.typography_description}>{info.zipcode}</Typography>
      </div>
    </div>
  )
}
