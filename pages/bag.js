import styles from '../styles/Bag.module.css'
import CartItem from '../components/CartItem'
import Link from 'next/link'
import { useRecoilValue, useSetRecoilState } from "recoil"
import { bagState } from '../components/States'

export default function Bag() {

  const bagItem = useRecoilValue(bagState)

  const initialValue = 0;
  const total = bagItem.reduce((accumulator,current) => accumulator + current.price * current.quantity, initialValue)

  const bagItems = bagItem.map(item => {
    return  <CartItem key={item.id} item={item} />
  })
    
  return (
    <div className={styles.bag}>
        <h2>Shopping Bag</h2>

        <div className={styles.baginfo}>
            <div className={styles.bagitems}>

              {
                bagItem.length ? bagItems : <p className={styles.empty}>Your bag is empty</p>
              }

            </div>

            <div className={styles.summary}>
              <h2>Summary</h2>
              <div className={styles.summarydetails}>
                <div className={styles.subtotal}>
                  <p>Subtotal</p>
                  <p>${total.toFixed(2)}</p>
                </div>
                <div className={styles.subtotal}>
                  <p>Estimated Delivery & Handling</p>
                  <p>Free</p>
                </div>
                <div className={styles.total}>
                  <p>Total</p>
                  <p>${total.toFixed(2)}</p>
                </div>
              </div>
              <Link href={`/checkout`}><button>Checkout</button></Link>
            </div>
        </div>

    </div>
  )
}
