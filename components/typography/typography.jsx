import styles from './typography.module.css'

export default function Typography (props) {
  const {
    title,
    body,
    small,
    bold,
    medium,
    regular,
    children,
    className
  } = props

  const typographyStyle = [
    styles.typography,
    title && styles.title,
    body && styles.body,
    small && styles.small,
    bold && styles.bold,
    medium && styles.medium,
    regular && styles.regular,
    className && className
  ]

  return (
    <div className={typographyStyle.join(' ')}>{children}</div>
  )
}
