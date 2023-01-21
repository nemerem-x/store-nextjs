import styles from '../styles/checkout.module.css'
import CartItem from '../components/CartItem'
import Link from 'next/link'
import { useRecoilValue, useSetRecoilState } from "recoil"
import { bagState } from '../components/States'

export default function Checkout() {

    const bagItem = useRecoilValue(bagState)
    
    const initialValue = 0;
    const total = bagItem.reduce((accumulator,current) => accumulator + current.price * current.quantity, initialValue)
    
    const bagItems = bagItem.map(item => {
      return  <CartItem key={item.id} item={item} />
    })

  return (
    <div className={styles.checkout}>

        <div>

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

            </div>

        </div>

        <div>
                        
        <h1>Checkout</h1>
        
            <h3>Contact Information</h3>
            <div>
                <div>
                    <p>First name</p>
                    <input type="text" placeholder="John"></input>
                </div>
                <div>
                    <p>Last name</p>
                    <input type="text" placeholder="Doe"></input>
                </div>
            </div>

            <div>
                <p>Street address</p>
                <input type="text" placeholder="100 smith street"></input>
            </div>

            <div>
                <p>Town/City</p>
                <input type="text" placeholder="collingwood"></input>

                <div>
                    <p>State</p>
                    <input type="text" placeholder="VIC"></input>
                </div>

                <div>
                    <p>Postcode</p>
                    <input type="text" placeholder="2323"></input>
                </div>
            </div>

            <div>
                <p>Country</p>
                <select>
                    <option>Nigeria</option>
                </select>
            </div>

            <div>
                <p>Email address</p>
                <input type="email" placeholder="john@email.com"></input>
            </div>

            <button>Checkout</button>

        </div>

    </div>
  )
}
