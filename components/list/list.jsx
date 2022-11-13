import { Card, Typography } from 'components'
import styles from './list.module.css'

export default function List ({ title, data }) {
  return (
    <div className={styles.container}>
      <Typography title bold className={styles.title}>{title}</Typography>
      <div className={styles.list_friends}>
        {data.map((d) => {
          return (
            <div key={d.id}>
              <Card
                id={d.id}
                available={d.available}
                img={d.img}
                name={d.first_name + ' ' + d.last_name}
                status={d.status}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
