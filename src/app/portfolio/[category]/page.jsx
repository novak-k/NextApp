import React from 'react'
import styles from './page.module.css'
import Button from '@/components/button/Button';
import Image from 'next/image';
import { items } from "./data.js";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({params}) => {
  const data = getData(params.category);

  return (
    <div className={styles.contaier}>
      <h1 className={styles.catTitle}>{params.category}</h1>

      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              width={500}
              height={500}
              src={item.image}
              alt=""
            />
          </div>
        </div>
      ))}

      {/* <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>DESC</p>
          <Button text={'See more'} url={'/'}/>
        </div>
        <div className={styles.imgContaier}>
          <Image 
            className={styles.img}
            src='/pexels-illustration1.jpg' 
            width={500} height={500}
          />
        </div>
      </div>     */}

    </div>
  )
}

export default Category;
