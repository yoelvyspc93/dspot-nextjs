import { Card } from 'components'
import styles from './list.module.css'

export default function List ({ data }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Friends</div>
      <div className={styles.list_friends}>
        {data.map((d) => {
          return (
            <div key={d.id}>
              <Card id={d.id} available={d.available} img={d.img} name={d.first_name + ' ' + d.last_name} status={d.status} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
