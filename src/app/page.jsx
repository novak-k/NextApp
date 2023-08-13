import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'
import Base from 'public/pexels-photo-blue.jpeg'
import Button from '@/components/button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
       <div className={styles.item}>
          <h1 className={styles.title}>Lorem Ipsum Title</h1>
          <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat, sapien sed elementum imperdiet, mauris mauris commodo erat, id lacinia neque nunc ut dolor. </p>
          <Button url="/portfolio" text="See our works" />
        </div>
        <div className={styles.item}>
          <Image src={Base} alt='' className={styles.img}/>
        </div>
    </div>
  )
}
