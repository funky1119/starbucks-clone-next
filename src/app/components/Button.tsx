import Link from "next/link";
import styles from "./button.module.scss";
import classNames from "classnames";
import { ReactNode } from "react";

export default function Button({
  color,
  children,
}: {
  color: "reverse" | "brown" | "gold" | "white";
  children: ReactNode;
}) {
  return (
    <Link
      href={"#"}
      className={classNames(
        styles.btn,
        color === "reverse" && styles.btn__reverse,
        color === "brown" && styles.btn__brown,
        color === "gold" && styles.btn__gold,
        color === "white" && styles.btn__white
      )}
    >
      {children}
    </Link>
  );
}
