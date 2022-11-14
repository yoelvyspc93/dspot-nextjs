import { DetailHeader } from 'components'
import { getFriendById } from 'services/friends'
import styles from 'styles/page.module.css'

export default async function Detail ({ params: { id } }) {
  const friend = await getFriendById({ id })

  return (
    <div className={styles.page}>
      <DetailHeader data={friend} />
    </div>
  )
}
