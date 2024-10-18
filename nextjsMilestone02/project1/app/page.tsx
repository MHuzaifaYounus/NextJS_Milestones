import styles from './page.module.css'
import { FaGithub, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link'
import Image from 'next/image'


export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.mainText}>
        <h1>Hi, I am <span>H</span>uzaifa <span>Y</span>ounus</h1>
        <h2><span>Front End Developer</span></h2>
        <p>Hi, I&apos;m Muhammad Huzaifa Younus  a creative web developer with a passion for building dynamic, user-friendly applications.Let&apos;s create something amazing together!</p>
        <div className={styles.iconsBox}>
          <Link href={"https://github.com/MHuzaifaYounus"}> <FaGithub /></Link>
          <Link href={"#"}> <FaTwitter /></Link>
          <Link href={"https://www.facebook.com/profile.php?id=61556341636932"}> <FaFacebook /></Link>
          <Link href={"https://l.facebook.com/l.php?u=https%3A%2F%2Flinkedin.com%2Fin%2Fhuzaifayounus14%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR17fl5VkxFhFDBUOSSirbKx9sgeJOdkcGdT_WSFrWpAnz4_xHP1k7FgBIg_aem_fN6-DrklAlDSJkU38f4png&h=AT1bNTsSgSI7aH5L4jVb2e8efI-z_A1zwC1yeZOcc28yG5ijpIAPmub6TIQNkuYDGcQ80ZxFNKkm6CH0i_9Kj4BK4LBE0XHHz58-Ai3QDicoVvs2xmEmnS3U_m8TldSP4JqH"}>  <FaLinkedin /></Link>
        </div>
        <div className={styles.btnBox}>
          <button><Link href={"/contact"}>Let&apos;s Talk</Link></button>
          <button><Link href={"/static/huzaifacv.pdf"}>Resume</Link></button>
        </div>
      </div>
      <div className={styles.mainImg}>
        <Image src={"/static/main.png"} alt='no found' width={500} height={500}></Image>
      </div>
    </div>
  );
}
