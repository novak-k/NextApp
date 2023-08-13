import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>2023 ©  All rigths reserved</div>
      <div className={styles.social}>
          <Image src="/1.png" width={15} height={15} className={styles.icon} alt="FB Dev" />
          <Image src="/2.png" width={15} height={15} className={styles.icon} alt="Insta Dev" />
          <Image src="/3.png" width={15} height={15} className={styles.icon} alt="Twitter Dev" />
          <Image src="/4.png" width={15} height={15} className={styles.icon} alt="YouTube Dev" />
      </div>
    </div>
  )
}

export default Footer;

 //wrap Images with a Link if needed 