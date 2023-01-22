import styles from '../styles/checkout.module.css'
import CartItem from '../components/CartItem'
import Link from 'next/link'
import { useRecoilValue, useSetRecoilState } from "recoil"
import { bagState } from '../components/States'
import { useState } from 'react'

export default function Checkout() {

    const bagItem = useRecoilValue(bagState)

    const initialValue = 0;
    const total = bagItem.reduce((accumulator, current) => accumulator + current.price * current.quantity, initialValue)

    const bagItems = bagItem.map(item => {
        return <CartItem key={item.id} item={item} />
    })

    return (
        <div className={styles.checkout}>

            <h1>Checkout</h1>

            <div className={styles.checkoutBox}>

                <div className={styles.bagSummary}>

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

                <form>
                    <div className={styles.contactInfo}>

                        <h3>Contact Information</h3>

                        <div className={styles.name}>
                            <div>
                                <label htmlFor='first'><p>First name</p></label>
                                <input id='first' type="text" placeholder="John" required></input>
                            </div>
                            <div>
                                <label htmlFor='last'><p>Last name</p></label>
                                <input id='last' type="text" placeholder="Doe" required></input>
                            </div>
                        </div>

                        <div>
                            <p>Phone</p>
                            <input type="email" placeholder="+234 808" required></input>
                        </div>

                        <div>
                            <p>Email address</p>
                            <input type="email" placeholder="john@email.com" required></input>
                        </div>


                        <h3>Shipping Information</h3>

                        <div className={styles.street}>
                            <label htmlFor='address'><p>Street address</p></label>
                            <input id='address' type="text" placeholder="100 smith street" required></input>
                        </div>

                        <div className={styles.town}>
                            <div>
                                <p>Town/City</p>
                                <input type="text" placeholder="collingwood" required></input>
                            </div>

                            <div>
                                <p>State</p>
                                <input type="text" placeholder="VIC" required></input>
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

                        <button>Checkout</button>

                    </div>
                </form>

            </div>

        </div>
    )
}
