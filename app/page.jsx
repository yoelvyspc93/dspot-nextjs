import { List } from 'components'
import { getFriendsAll } from 'services/friends'
import styles from 'styles/page.module.css'

export default async function Home () {
  const frineds = await getFriendsAll()

  return (
    <div className={styles.page}>
      <List title='Friends' data={frineds} />
    </div>
  )
}
