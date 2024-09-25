import classNames from "classnames";
import styles from "./home.module.scss";
import Image from "next/image";
import Button from "../components/Button";

export default function Home() {
  return (
    <section>
      <div className={styles.visual}>
        <div className={classNames("inner", styles.inners)}>
          <div className={classNames(styles.title, styles.fade_in)}>
            <Image
              src="/images/visual_title.png"
              alt="STARBUCKS DELIGHTFUL START TO THE YEARS"
              width={470}
              height={231}
            />
            <Button color="brown">자세히 보기</Button>
          </div>
          <div className="fade-in">
            <Image
              src="/images/visual_cup1.png"
              alt="new OATMEAL LATTE"
              className={styles.cup1_image}
              width={279}
              height={576}
            />
            <Image
              src="/images/visual_cup1_text.png"
              alt="OATMEAL LATTE"
              className={styles.cup1_text}
              width={179}
              height={76}
            />
          </div>
          <div className="fade-in">
            <Image
              src="/images/visual_cup2.png"
              alt="new STARBUCKS CARAMEL CRUMBL MOCHA"
              className={styles.cup2_image}
              width={280}
              height={504}
            />
            <Image
              src="/images/visual_cup2_text.png"
              alt="STARBUCKS CARAMEL CRUMBL MOCHA"
              className={styles.cup2_text}
              width={254}
              height={96}
            />
          </div>
          <div className="fade-in">
            <Image
              src="/images/visual_spoon.png"
              alt="Spoon"
              className={styles.spoon}
              width={413}
              height={218}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
