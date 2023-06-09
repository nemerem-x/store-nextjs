"use client";
import { ProductObj } from "../utils/interface";
import styles from "../../styles/ProductDetails.module.css";
import Image from "next/image";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { bagState } from "../recoil/States";

export default function ProductPage(props: { detail: ProductObj }) {
  const { detail } = props;

  const bag = useRecoilValue(bagState);
  const setItem = useSetRecoilState(bagState);

  const addToBag = () => {
    const check = bag.some((item) => item.id == detail.id);

    let updated = bag.map((obj) => {
      if (obj.id == detail.id) {
        return { ...obj, quantity: obj.quantity + 1 };
      }
      return obj;
    });

    if (!check) {
      updated.push({
        id: detail.id,
        title: detail.title,
        image: detail.image,
        description: detail.description,
        category: detail.category,
        price: detail.price,
        quantity: 1,
        rating: {
          rate: detail.rating.rate,
          count: detail.rating.count,
        },
      });
    }

    localStorage.setItem("myCat", JSON.stringify(updated));
    setItem(updated);
  };

  return (
    <div className={styles.infoBox}>
      <div>
        <p className={styles.categoryMobile}>{detail.category}</p>
        <p className={styles.titleMobile}>{detail.title}</p>
      </div>
      <Image src={detail.image} alt="Product Image" width={500} height={500} />
      <div className={styles.info}>
        <p className={styles.category}>{detail.category}</p>
        <p className={styles.title}>{detail.title}</p>
        <p>{detail.description}</p>
        <p className={styles.price}>$ {detail.price}</p>
        <button onClick={addToBag}>Add to Bag</button>
      </div>
    </div>
  );
}
