"use client";

import styles from "./badges.module.scss";
import Image from "next/image";
import _ from "lodash";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function Badges() {
  const badges = useRef(null);
  useGSAP(() => {
    badges.current, { rotation: "-=360", duration: 3 }, { scrop: badges };
  });

  useEffect(() => {
    const badgeEl = document.querySelector(".header .badges");
    const toTopEl = document.querySelector("#to-top");

    window.addEventListener(
      "scroll",
      _.throttle(() => {
        if (window.scrollY > 500) {
          // 배치 숨기기
          // gsap.to(요소, 지속시간, 옵션)
          gsap.to(badgeEl, 0.6, {
            opacity: 0,
            display: "none",
          });
          // 버튼 보이기
          gsap.to(toTopEl, 0.2, {
            x: 0,
          });
        } else {
          // 배치 보이기
          gsap.to(badgeEl, 0.6, {
            opacity: 1,
            display: "block",
          });
          // 버튼 숨기기
          gsap.to(toTopEl, 0.2, {
            x: 100,
          });
        }
      }, 300)
    );
  }, []);

  return (
    <div ref={badges} className={styles.badges}>
      <div className={styles.badge}>
        <Image
          src="/images/badge1.jpg"
          alt="Badge"
          layout="responsive"
          width={1}
          height={1}
        />
      </div>
      <div className={styles.badge}>
        <Image
          src="/images/badge2.jpg"
          alt="Badge"
          layout="responsive"
          width={1}
          height={1}
        />
      </div>
    </div>
  );
}
