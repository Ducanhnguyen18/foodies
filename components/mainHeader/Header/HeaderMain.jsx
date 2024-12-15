import Link from "next/link";
import logoImg from "@/assets/logo.png";
import styles from "./HeaderMain.module.css";
import Image from "next/image";
import MainHeaderBackground from "../MainHeaderBackground/MainHeaderBackground";
import NavLinks from "../Navlinks/Navlinks";

const HeaderMain = () => {
  return (
    <>
      <MainHeaderBackground />
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
            <NavLinks href={"/meals"}>Browse Meals</NavLinks>
            <NavLinks href={"/community"}>Community</NavLinks>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default HeaderMain;
