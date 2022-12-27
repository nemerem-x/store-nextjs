import styles from '../styles/Bag.module.css'

export default function bag() {
    
  return (
    <div className={styles.bag}>
      <div className={styles.bagitems}>
        <h2>Shopping Bag</h2>

        <div className={styles.item}>
          <img></img>
          <p>Item 1 - school bag</p>
          <div className={styles.price}>
                <p>$</p>
                <p>100</p>
          </div>
        </div>
      </div>

      <div className={styles.summary}>

      </div>
    </div>
  )
}
