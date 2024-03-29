"use client";
import styles from "../../../styles/Home.module.css";
import Product from "../../components/Product";
import { useState, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { bagState } from "../../recoil/States";
import { ProductObj } from "../../utils/interface";

export default function HomePage(props: { data: ProductObj[] }) {
  const { data } = props;
  const [selected, setSelected] = useState<string | null>("Filter by");
  const [filterDropdown, setFilterDropdown] = useState(false);
  const setItem = useSetRecoilState(bagState);

  //Get from LocalStorage
  useEffect(() => {
    const storage = localStorage.getItem("myCat") || "";
    if (storage?.length) {
      setItem(JSON.parse(storage));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const select = (e: any) => {
    setSelected(e.target.textContent);
    setFilterDropdown(false);
  };

  const filter = () => {
    if (
      selected?.toLowerCase() === "all categories" ||
      selected === "Filter by"
    ) {
      return data;
    } else {
      const filtered = data?.filter(
        (item: ProductObj) => item.category == selected?.toLowerCase()
      );
      return filtered;
    }
  };

  const products = filter()?.map((product: ProductObj) => {
    return <Product key={product.id} product={product} />;
  });

  return (
    <>
      {
        <main className={styles.main}>
          <div className={styles.description}>
            <h1>
              I'm looking for anything <br />
              designed by any brand
            </h1>
          </div>

          <div className={styles.filterSection}>
            <div
              className={styles.filter}
              onClick={() => setFilterDropdown(!filterDropdown)}
            >
              <p>{selected}</p>
              <svg
                transform={filterDropdown ? "rotate(180)" : undefined}
                width="14"
                height="7"
                viewBox="0 0 14 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.99999 8.47077C6.84443 8.47077 6.69393 8.4416 6.54849 8.38327C6.40226 8.32493 6.28054 8.24716 6.18332 8.14993L0.816652 2.78327C0.602763 2.56938 0.495819 2.29716 0.495819 1.9666C0.495819 1.63605 0.602763 1.36382 0.816652 1.14993C1.03054 0.936046 1.30276 0.829102 1.63332 0.829102C1.96387 0.829102 2.2361 0.936046 2.44999 1.14993L6.99999 5.69993L11.55 1.14993C11.7639 0.936046 12.0361 0.829102 12.3667 0.829102C12.6972 0.829102 12.9694 0.936046 13.1833 1.14993C13.3972 1.36382 13.5042 1.63605 13.5042 1.9666C13.5042 2.29716 13.3972 2.56938 13.1833 2.78327L7.81665 8.14993C7.69999 8.2666 7.5736 8.34905 7.43749 8.39727C7.30137 8.44627 7.15554 8.47077 6.99999 8.47077Z"
                  fill="#000"
                />
              </svg>
            </div>

            <div className={styles.sort}>
              <p>Sort by</p>
              <svg
                width="14"
                height="7"
                viewBox="0 0 14 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.99999 8.47077C6.84443 8.47077 6.69393 8.4416 6.54849 8.38327C6.40226 8.32493 6.28054 8.24716 6.18332 8.14993L0.816652 2.78327C0.602763 2.56938 0.495819 2.29716 0.495819 1.9666C0.495819 1.63605 0.602763 1.36382 0.816652 1.14993C1.03054 0.936046 1.30276 0.829102 1.63332 0.829102C1.96387 0.829102 2.2361 0.936046 2.44999 1.14993L6.99999 5.69993L11.55 1.14993C11.7639 0.936046 12.0361 0.829102 12.3667 0.829102C12.6972 0.829102 12.9694 0.936046 13.1833 1.14993C13.3972 1.36382 13.5042 1.63605 13.5042 1.9666C13.5042 2.29716 13.3972 2.56938 13.1833 2.78327L7.81665 8.14993C7.69999 8.2666 7.5736 8.34905 7.43749 8.39727C7.30137 8.44627 7.15554 8.47077 6.99999 8.47077Z"
                  fill="#000"
                />
              </svg>
            </div>

            {filterDropdown && (
              <div className={styles.filterCat}>
                <p onClick={select}>All Categories</p>
                <p onClick={select}>Men's clothing</p>
                <p onClick={select}>Jewelery</p>
                <p onClick={select}>Electronics</p>
                <p onClick={select}>Women's clothing</p>
              </div>
            )}

            <p className={styles.itemlength}>
              showing {filter()?.length} items
            </p>
          </div>

          <div className={styles.allProducts}>
            {data ? products : <p>Loading items...</p>}
          </div>
        </main>
      }
    </>
  );
}
