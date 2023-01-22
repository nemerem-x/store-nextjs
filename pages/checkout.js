import styles from '../styles/checkout.module.css'
import CartItem from '../components/CartItem'
import { useRecoilValue, useSetRecoilState } from "recoil"
import { bagState } from '../components/States'
import { useState } from 'react'
import { usePaystackPayment } from 'react-paystack';
import Success from '../components/Success'

export default function Checkout() {

    const bagItem = useRecoilValue(bagState)
    const setItem = useSetRecoilState(bagState)

    const initialValue = 0;
    const total = bagItem.reduce((accumulator, current) => accumulator + current.price * current.quantity, initialValue)
    
    const publicKey = 'pk_test_5093a6ee583d0b397b5aef04b0a2ea0b57436a39'
    const amount = total.toFixed(2) * 100 // Remember, set in kobo!
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [street, setStreet] = useState("")

    const [referenceId, setReferenceId] = useState(0)
    const [successful, setSuccessful] = useState(false)

    const config = {
        reference: (new Date()).getTime().toString(),
        email,
        amount,
        publicKey,
        metadata: {
            phone,
            name,
            street,
        }
    }

    const onSuccess = (reference) => {
        // Implementation for whatever you want to do with reference and after success call.
        setReferenceId(reference.trxref)
        setSuccessful(true)
        localStorage.clear()
        setItem([])
    }

    const onClose = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        console.log('closed')
    }

    const initializePayment = usePaystackPayment(config)
    const makePayment = (e) => {
        e.preventDefault()
        initializePayment(onSuccess, onClose)
    }

    const bagItems = bagItem.map(item => {
        return <CartItem key={item.id} item={item} />
    })

    return (
        <div className={styles.checkout}>


            {successful && <Success referenceId={referenceId}/>}

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
                                <p>&#8358;{total.toFixed(2)}</p>
                            </div>
                            <div className={styles.subtotal}>
                                <p>Estimated Delivery & Handling</p>
                                <p>Free</p>
                            </div>
                            <div className={styles.total}>
                                <p>Total</p>
                                <p>&#8358;{total.toFixed(2)}</p>
                            </div>
                        </div>

                    </div>

                </div>

                <form onSubmit={makePayment}>
                    <div className={styles.contactInfo}>

                        <h3>Contact Information</h3>

                        <div className={styles.name}>
                            <div>
                                <label htmlFor='first'><p>First name</p></label>
                                <input onChange={(e) => setName(e.target.value)} id='first' type="text" placeholder="John" ></input>
                            </div>
                            <div>
                                <label htmlFor='last'><p>Last name</p></label>
                                <input id='last' type="text" placeholder="Doe" ></input>
                            </div>
                        </div>

                        <div>
                            <p>Phone</p>
                            <input onChange={(e) => setPhone(e.target.value)} type="number" placeholder="+234 808" ></input>
                        </div>

                        <div>
                            <p>Email address</p>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="john@email.com" ></input>
                        </div>


                        <h3>Shipping Information</h3>

                        <div className={styles.street}>
                            <label htmlFor='address'><p>Street address</p></label>
                            <input onChange={(e) => setStreet(e.target.value)} id='address' type="text" placeholder="100 smith street" ></input>
                        </div>

                        <div className={styles.town}>
                            <div>
                                <p>Town/City</p>
                                <input type="text" placeholder="collingwood" ></input>
                            </div>

                            <div>
                                <p>State</p>
                                <input type="text" placeholder="VIC" ></input>
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

                        <button disabled={bagItem.length === 0}>Make payment</button>

                    </div>
                </form>
            </div>

        </div>
    )
}
