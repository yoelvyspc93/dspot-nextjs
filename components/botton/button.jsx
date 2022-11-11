import styles from './button.module.css'

export default function Button ({ children, color, ...props }) {
  const style = `${styles.btn} ${color === 'primary' && styles.btnPrimary}`

  return (
    <button className={style} {...props}>
      {children}
    </button>
  )
}
