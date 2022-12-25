import Image from "next/image"
import styles from '../../../styles/Product.module.css'
import Link from 'next/Link'

export default function Product({product}) {

    return (
    <div className={styles.product}>
        <div className="productImage">
            <Image src={product.image} width='200' height={'200'} alt='product' />
        </div>

        <div className={styles.title}>
            <Link href={`/product-info/${product.id}`}><h2>{product.title}</h2></Link> 
            <p>{product.rating.rate}</p>

            <div className={styles.price}>
                <p>$</p>
                <p>{product.price}</p>
            </div>
        </div>
    </div>
  )
}
