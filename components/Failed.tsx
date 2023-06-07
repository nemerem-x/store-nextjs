import styles from "../styles/failed.module.css";
import Image from "next/image";
import failed from "../public/failed.png";
import Link from "next/link";

export default function Success() {
  //   const { referenceId } = props;
  return (
    <div className={styles.successBox}>
      <div className={styles.modal}>
        <div className={styles.modalBox}>
          <Image src={failed} width="100" height={"100"} alt="failed" />
          <h2>Payment Cancelled!</h2>

          <div className={styles.ids}>
            {/* <div>
                        <p>Transaction ID:</p>
                        <p>{referenceId}</p>
                    </div> */}

            <div>
              <p>Order ID:</p>
              <p>895543385668</p>
            </div>
          </div>

          {/* <p className={styles.arrival}>Your order will<br></br>arrive in 4days!</p> */}
          <div className={styles.buttons}>
            <button>
              <Link href="/">Back To Home</Link>
            </button>
            <button className={styles.goToCart}>
              <Link href="/bag">Go to cart</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
