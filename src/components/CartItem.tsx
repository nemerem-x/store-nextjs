import { useState } from "react";
import styles from "../../styles/Bag.module.css";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { bagState } from "../recoil/States";
import { ProductObj } from "../utils/interface";
import Image from "next/image";

export default function CartItem(props: { item: ProductObj }) {
  const { item } = props;
  const [quantity, setQuantity] = useState(item?.quantity);
  const [price] = useState(item?.price);
  const bag = useRecoilValue(bagState);
  const setItem = useSetRecoilState(bagState);

  const handleChange = (e: any) => {
    setQuantity(parseInt(e.target.value));

    let updated = bag.map((obj) => {
      if (obj.id == item.id) {
        return { ...obj, quantity: parseInt(e.target.value) };
      }
      return obj;
    });
    setItem(updated);
  };

  const removeItem = () => {
    const newBag = bag.filter((obj) => obj.id !== item.id);
    setItem(newBag);
    localStorage.setItem("myCat", JSON.stringify(newBag));
  };

  return (
    <div className={styles.item}>
      <Image src={item?.image} alt="product image" width="100" height={100} />
      <div className={styles.info}>
        <p className={styles.title}>{item?.title}</p>
        <p>{item?.category}</p>

        <div className={styles.quantity}>
          <p>Quantity</p>
          <select value={quantity} onChange={handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div className={styles.deleteLike}>
          <svg
            onClick={removeItem}
            width="20"
            height="20"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.6875 7.50004H2.8125C2.56386 7.50004 2.3254 7.40127 2.14959 7.22546C1.97377 7.04964 1.875 6.81118 1.875 6.56254C1.875 6.3139 1.97377 6.07545 2.14959 5.89963C2.3254 5.72382 2.56386 5.62504 2.8125 5.62504H10.3125V2.81067C10.3125 2.56203 10.4113 2.32357 10.5871 2.14776C10.7629 1.97194 11.0014 1.87317 11.25 1.87317H18.75C18.9986 1.87317 19.2371 1.97194 19.4129 2.14776C19.5887 2.32357 19.6875 2.56203 19.6875 2.81067V5.62504H27.1875C27.4361 5.62504 27.6746 5.72382 27.8504 5.89963C28.0262 6.07545 28.125 6.3139 28.125 6.56254C28.125 6.81118 28.0262 7.04964 27.8504 7.22546C27.6746 7.40127 27.4361 7.50004 27.1875 7.50004H25.3125V27.1875C25.3125 27.4362 25.2137 27.6746 25.0379 27.8505C24.8621 28.0263 24.6236 28.125 24.375 28.125H5.625C5.37636 28.125 5.1379 28.0263 4.96209 27.8505C4.78627 27.6746 4.6875 27.4362 4.6875 27.1875V7.50004ZM17.8125 5.62504V3.75004H12.1875V5.62504H17.8125ZM6.5625 26.25H23.4375V7.50004H6.5625V26.25ZM12.1875 22.5C11.9389 22.5 11.7004 22.4013 11.5246 22.2255C11.3488 22.0496 11.25 21.8112 11.25 21.5625V12.1875C11.25 11.9389 11.3488 11.7004 11.5246 11.5246C11.7004 11.3488 11.9389 11.25 12.1875 11.25C12.4361 11.25 12.6746 11.3488 12.8504 11.5246C13.0262 11.7004 13.125 11.9389 13.125 12.1875V21.5625C13.125 21.8112 13.0262 22.0496 12.8504 22.2255C12.6746 22.4013 12.4361 22.5 12.1875 22.5ZM17.8125 22.5C17.5639 22.5 17.3254 22.4013 17.1496 22.2255C16.9738 22.0496 16.875 21.8112 16.875 21.5625V12.1875C16.875 11.9389 16.9738 11.7004 17.1496 11.5246C17.3254 11.3488 17.5639 11.25 17.8125 11.25C18.0611 11.25 18.2996 11.3488 18.4754 11.5246C18.6512 11.7004 18.75 11.9389 18.75 12.1875V21.5625C18.75 21.8112 18.6512 22.0496 18.4754 22.2255C18.2996 22.4013 18.0611 22.5 17.8125 22.5Z"
              fill="#222222"
            />
          </svg>
          <svg
            width="20"
            height="20"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.375 5C5.57813 5 2.5 8.07813 2.5 11.875C2.5 18.75 10.625 25 15 26.4538C19.375 25 27.5 18.75 27.5 11.875C27.5 8.07813 24.4219 5 20.625 5C18.3 5 16.2438 6.15438 15 7.92125C14.3661 7.01825 13.5239 6.28131 12.5447 5.77281C11.5656 5.2643 10.4783 4.99922 9.375 5Z"
              stroke="#222222"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className={styles.price}>
        <p>${price * quantity}</p>
      </div>
    </div>
  );
}
