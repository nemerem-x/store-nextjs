"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/shop-logo.png";
import styles from "../../styles/Home.module.css";
import { useRouter, usePathname } from "next/navigation";
import { bagState } from "../recoil/States";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useRecoilValue, useSetRecoilState } from "recoil";

export default function Header() {
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });

  const router = useRouter();
  const pathname = usePathname();
  const bag = useRecoilValue(bagState);
  const setItem = useSetRecoilState(bagState);

  //Get from LocalStorage
  useEffect(() => {
    const storage = localStorage.getItem("myCat");
    if (storage) {
      setItem(JSON.parse(storage));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {}, [bag]);

  return (
    <div className={styles.header}>
      <div className={styles.nav}>
        <Image src={Logo} width="80" alt="logo"></Image>
        <Link className={pathname == "/" ? styles.active : ""} href="/">
          Home
        </Link>
        {!isMobile && (
          <Link
            className={pathname == "/about" ? styles.active : ""}
            href="/about"
          >
            About
          </Link>
        )}
        {!isMobile && (
          <Link
            className={pathname == "/contact" ? styles.active : ""}
            href="/contact"
          >
            Contact
          </Link>
        )}
      </div>

      <div className={styles.signup}>
        <svg
          onClick={() => router.push("/bag")}
          width="20"
          height="28"
          viewBox="0 0 34 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.5833 10.5833H25.3333V8.49996C25.3333 6.28982 24.4553 4.17021 22.8925 2.6074C21.3297 1.0446 19.2101 0.166626 17 0.166626C14.7898 0.166626 12.6702 1.0446 11.1074 2.6074C9.54462 4.17021 8.66665 6.28982 8.66665 8.49996V10.5833H2.41665C1.86411 10.5833 1.33421 10.8028 0.943508 11.1935C0.552807 11.5842 0.333313 12.1141 0.333313 12.6666V35.5833C0.333313 37.2409 0.991793 38.8306 2.1639 40.0027C3.336 41.1748 4.92571 41.8333 6.58331 41.8333H27.4166C29.0742 41.8333 30.664 41.1748 31.8361 40.0027C33.0082 38.8306 33.6666 37.2409 33.6666 35.5833V12.6666C33.6666 12.1141 33.4472 11.5842 33.0565 11.1935C32.6658 10.8028 32.1358 10.5833 31.5833 10.5833ZM12.8333 8.49996C12.8333 7.39489 13.2723 6.33508 14.0537 5.55368C14.8351 4.77228 15.8949 4.33329 17 4.33329C18.105 4.33329 19.1649 4.77228 19.9463 5.55368C20.7277 6.33508 21.1666 7.39489 21.1666 8.49996V10.5833H12.8333V8.49996ZM29.5 35.5833C29.5 36.1358 29.2805 36.6657 28.8898 37.0564C28.4991 37.4471 27.9692 37.6666 27.4166 37.6666H6.58331C6.03078 37.6666 5.50087 37.4471 5.11017 37.0564C4.71947 36.6657 4.49998 36.1358 4.49998 35.5833V14.75H8.66665V16.8333C8.66665 17.3858 8.88614 17.9157 9.27684 18.3064C9.66754 18.6971 10.1974 18.9166 10.75 18.9166C11.3025 18.9166 11.8324 18.6971 12.2231 18.3064C12.6138 17.9157 12.8333 17.3858 12.8333 16.8333V14.75H21.1666V16.8333C21.1666 17.3858 21.3861 17.9157 21.7768 18.3064C22.1675 18.6971 22.6974 18.9166 23.25 18.9166C23.8025 18.9166 24.3324 18.6971 24.7231 18.3064C25.1138 17.9157 25.3333 17.3858 25.3333 16.8333V14.75H29.5V35.5833Z"
            fill="#222222"
          />
        </svg>
        {!!bag.length && <p>{bag.length}</p>}

        <Link href="/signup">Signup</Link>
      </div>
    </div>
  );
}
