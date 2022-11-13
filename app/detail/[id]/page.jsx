import { DetailHeader } from 'components'
import { getFriendById } from 'services/friends'
import styles from 'styles/page.module.css'

export default function Detail ({ params }) {
  const { id } = params
  const friend = getFriendById({ id })

  return (
    <div className={styles.page}>
      <DetailHeader data={friend} />
    </div>
  )
}
