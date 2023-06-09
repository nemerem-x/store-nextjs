import styles from "../../styles/success.module.css";
import Image from "next/image";
import successIcon from "../../public/check-mark.png";
import Link from "next/link";

export default function Success() {
  // const { referenceId } = props;
  return (
    <div className={styles.successBox}>
      <div className={styles.modal}>
        <div className={styles.modalBox}>
          <Image src={successIcon} width="100" height={"100"} alt="product" />
          <h2>Payment Successful!</h2>

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

          <p className={styles.arrival}>
            Your order will<br></br>arrive in 4days!
          </p>

          <button>
            <Link href="/">Back To Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
