import { List } from 'components'
import { getFriendsAll } from 'services/friends'
import styles from 'styles/page.module.css'

export default function Home () {
  const frineds = getFriendsAll()

  return (
    <div className={styles.page}>
      <List title='Friends' data={frineds} />
    </div>
  )
}
