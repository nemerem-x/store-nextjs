import styles from '../styles/Bag.module.css'
import CartItem from '../components/CartItem'
import { useState } from 'react'

export default function bag() {

  const [total, setTotal] = useState(0)
    
  return (
    <div className={styles.bag}>
        <h2>Shopping Bag</h2>

        <div className={styles.baginfo}>
            <div className={styles.bagitems}>

              <CartItem setTotal={setTotal} />

            </div>

            <div className={styles.summary}>
              <h2>Summary</h2>
              <div className={styles.summarydetails}>
                <div className={styles.subtotal}>
                  <p>Subtotal</p>
                  <p>${total}</p>
                </div>
                <div className={styles.subtotal}>
                  <p>Estimated Delivery & Handling</p>
                  <p>Free</p>
                </div>
                <div className={styles.total}>
                  <p>Total</p>
                  <p>${total}</p>
                </div>
              </div>
              <button>Checkout</button>
            </div>
        </div>

    </div>
  )
}
