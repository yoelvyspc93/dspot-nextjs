'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import styles from './page.module.css'
import { Avatar, Badge, IconArrowBlack, DetailInfo, DetailPhotos, Tabs } from '@/components'
import photos from 'constant/photos'
import info from 'constant/info'

export default function Detail ({ params }) {
  const [tab, setTab] = useState(1)
  const router = useRouter()
  const { id } = params

  const tabChange = (index) => setTab(index)

  return (
    <div className={styles.container}>
      <div className={styles.page}>
        <IconArrowBlack className={styles.back} onClick={() => router.push('/')} />
        <div className={styles.header}>
          <Avatar available img='/asset/images/avatar.png' imgDimension={150} statusDimension={23} />
          <div className={styles.info}>
            <div className={styles.title}>Steph Walters {id}</div>
            <Badge>At Work</Badge>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.tab}>
            <div className={styles.tab_header}>
              <div className={tab === 1 ? styles.tab_active : styles.tab_desactive} onClick={() => tabChange(1)}>
                Info
              </div>
              <div className={tab === 2 ? styles.tab_active : styles.tab_desactive} onClick={() => tabChange(2)}>
                Photos
              </div>
            </div>
            <div className={styles.tab_body}>
              <div className={`${styles.tab_body_info} ${tab !== 1 && styles.tab_body_hidden}`}>
                <DetailInfo info={info} />
              </div>
              <div className={`${styles.tab_body_photo} ${tab !== 2 && styles.tab_body_hidden}`}>
                <DetailPhotos photos={photos} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

/*

<div className={styles.tab}>
  <div className={styles.tab_header}>
    <div className={tab === 1 ? styles.tab_active : styles.tab_desactive} onClick={() => tabChange(1)}>
      Info
    </div>
    <div className={tab === 2 ? styles.tab_active : styles.tab_desactive} onClick={() => tabChange(2)}>
      Photos
    </div>
  </div>
  <div className={styles.tab_body}>
    <div className={`${styles.tab_body_info} ${tab !== 1 && styles.tab_body_hidden}`}>
      <DetailInfo info={info} />
    </div>
    <div className={`${styles.tab_body_photo} ${tab !== 2 && styles.tab_body_hidden}`}>
      <DetailPhotos photos={photos} />
    </div>
  </div>
</div>

*/
