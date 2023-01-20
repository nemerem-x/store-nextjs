import { useRecoilValue, useSetRecoilState } from "recoil"
import { bagState } from "../../components/States"
import Image from 'next/image'
import styles from '../../styles/ProductDetails.module.css'

export default function Details({details}) {

    const detail = details[0]
        
    const bag = useRecoilValue(bagState);
    const setItem = useSetRecoilState(bagState)

    const addToBag = () => {

        const check = bag.some(item => item.id == detail.id)

        let updated = bag.map(obj => {
            if(obj.id == detail.id) {
                return { ...obj, quantity: obj.quantity + 1}
            } 
            return obj
        })

        if(!check) {
            updated.push({
                        id: detail.id,
                        name: detail.title,
                        image: detail.image,
                        category: detail.category,
                        price: detail.price,
                        quantity: 1
                        })
        }
        
        localStorage.setItem("myCat", JSON.stringify(updated))
        setItem(updated)

    }

  return (
    <div className={styles.infoBox}>
        <Image
            src={detail.image}
            alt="Product Image"
            width={500}
            height={500}
        />
        <div className="info">
            <p>{detail.category}</p>
            <p className={styles.title}>{detail.title}</p>
            <p>{detail.description}</p>
            <p className={styles.price}>${detail.price}</p>
            <button onClick={addToBag}>Add to Bag</button>
        </div>
    </div>
  )
}

export const getStaticPaths = async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    const allPaths = data?.map(each => {
        return {
            params: {
                id: each.id.toString()
            }
        }
    })

    return {
      paths: allPaths,
      fallback: false
    }
}

export const getStaticProps = async (context) => {

    const id = context?.params.id
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()

    const details = data.filter(each => each.id == id)
    return {
        props: {details}
    }
}