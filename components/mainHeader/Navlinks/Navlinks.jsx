"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navlinks.module.css";

const NavLinks = ({ href, children }) => {
  const path = usePathname();
  console.log(path);
  console.log(path);
  return (
    <li>
      <Link
        href={href}
        className={
          path === href
            ? `${styles.navlinks} ${styles.active}`
            : `${styles.navlinks}`
        }
      >
        {children}
      </Link>
    </li>
  );
};

export default NavLinks;
