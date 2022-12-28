import Image from "next/image"
import styles from '../styles/Product.module.css'
import Link from 'next/link'

export default function Product({product}) {

    return (
    <div className={styles.product}>
        <div className="productImage">
        <Link href={`/product-info/${product.id}`}><Image src={product.image} width='200' height={'200'} alt='product' /></Link> 
        </div>

        <div className={styles.title}>
            <Link href={`/product-info/${product.id}`}><h2>{product.title}</h2></Link> 
            <p>
                <svg width="15" height="14" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.5 9.55L16.5125 8.775L13 0.5L9.4875 8.7875L0.5 9.55L7.325 15.4625L5.275 24.25L13 19.5875L20.725 24.25L18.6875 15.4625L25.5 9.55ZM13 17.25V5.625L15.1375 10.675L20.6125 11.15L16.4625 14.75L17.7125 20.1L13 17.25Z" fill="#FFC700"/>
                </svg>

                ({product.rating.rate})
            </p>

            <div className={styles.price}>
                <p>$</p>
                <p>{product.price}</p>
            </div>
        </div>
    </div>
  )
}
