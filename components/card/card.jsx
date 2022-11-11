'use client'

import { useRouter } from 'next/navigation'

import { Button, Avatar, Badge } from 'components'
import styles from './card.module.css'

export default function Card ({ id, available, img, name, status }) {
  const router = useRouter()

  return (
    <div className={styles.card}>
      <div className={styles.card_header}>
        <Avatar available={available} img={img} imgDimension={60} statusDimension={12} className={styles.img} />
        <div className={styles.info}>
          <div className={styles.title}>{name}</div>
          <Badge>{status}</Badge>
        </div>
      </div>
      <div className={styles.card_footer}>
        <Button color='primary' onClick={() => router.push(`/detail/${id}`)}>Details</Button>
      </div>
    </div>
  )
}
