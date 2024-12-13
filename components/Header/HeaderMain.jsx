import Link from "next/link";
import logoImg from "@/assets/logo.png";
import styles from "./HeaderMain.module.css";
import Image from "next/image";

const HeaderMain = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image
          src={logoImg.src}
          alt="a plate with foot on it"
          width={500}
          height={100}
          priority
        />
        NextLevel Food
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Browse Meals</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderMain;
