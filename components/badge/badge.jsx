import { Typography } from 'components'
import React from 'react'
import styles from './badge.module.css'

export default function Badge ({ children }) {
  return (
    <div className={styles.badge}>
      <div>
        <Typography medium small>{children}</Typography>
      </div>
    </div>
  )
}
