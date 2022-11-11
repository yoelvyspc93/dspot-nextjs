import React from 'react'
import styles from './badge.module.css'

export default function Badge ({ children }) {
  return (
    <div className={styles.badge}>
      <div>{children}</div>
    </div>
  )
}
