import styles from './page.module.css'
import { List } from 'components'

import frineds from 'constant/frineds'

export default function Home () {
  return (
    <div className={styles.container}>
      <List data={frineds} />
    </div>
  )
}
