'use client'

import { useState } from 'react'

import { Avatar, Badge, IconArrowBlack, DetailInfo, DetailPhotos } from 'components'
import styles from './header.module.css'
import useModalPhoto from 'hooks/useModalPhoto'
import Link from 'next/link'

export default function DetailHeader ({ data }) {
  const { modal, openPhoto } = useModalPhoto()

  const [tab, setTab] = useState(1)

  const { statuses, photos, ...info } = data

  return (
    <>
      {modal}
      <div className={styles.page}>
        <Link href='/'>
          <IconArrowBlack className={styles.back} />
        </Link>
        <div className={styles.header}>
          <Avatar available={info.available} img={info.img} imgDimension={150} statusDimension={23} />
          <div className={styles.info}>
            <div className={styles.title}>{info.first_name} {info.last_name}</div>
            <Badge>{statuses[0]}</Badge>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.tab}>
            <div className={styles.tab_header}>
              <div role='tab-info' className={tab === 1 ? styles.tab_active : styles.tab_desactive} onClick={() => setTab(1)}>
                Info
              </div>
              <div role='tab-photos' className={tab === 2 ? styles.tab_active : styles.tab_desactive} onClick={() => setTab(2)}>
                Photos
              </div>
            </div>
            <div className={styles.tab_body}>
              <div className={`${styles.tab_body_info} ${tab !== 1 && styles.tab_body_hidden}`}>
                <DetailInfo info={info} />
              </div>
              <div className={`${styles.tab_body_photo} ${tab !== 2 && styles.tab_body_hidden}`}>
                <DetailPhotos photos={photos} onClick={openPhoto} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
