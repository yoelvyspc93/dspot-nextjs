import { Button, Avatar, Badge, Typography } from 'components'
import styles from './card.module.css'
import Link from 'next/link'

export default function Card ({ id, available, img, name, status }) {
  return (
    <div className={styles.card}>
      <div className={styles.card_header}>
        <Avatar available={available} img={img} imgDimension={60} statusDimension={12} className={styles.img} />
        <div className={styles.info}>
          <Typography body medium className={styles.title}>{name}</Typography>
          <Badge>{status}</Badge>
        </div>
      </div>
      <div className={styles.card_footer}>
        <Link href={`/detail/${id}`}>
          <Button color='primary'>Details</Button>
        </Link>
      </div>
    </div>
  )
}
