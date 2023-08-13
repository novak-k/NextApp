import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import Blog1 from "public/pexels-blog4.jpg"
import Blog2 from "public/pexels-blog2.jpg"
import Blog3 from "public/pexels-blog3.jpg"

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href={'/blog/testId'} className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src={Blog1}
            width={400}
            height={250}
            alt=""
          />
        </div>
         <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>DESC</p>
        </div>
      </Link>

      <Link href={'/blog/testId'} className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src={Blog2}
            width={400}
            height={250}
            alt=""
          />
        </div>
         <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>DESC</p>
        </div>
      </Link>

      <Link href={'/blog/testId'} className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src={Blog3}
            width={400}
            height={250}
            alt=""
          />
        </div>
         <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>DESC</p>
        </div>
      </Link>

    </div>
  )
}

export default Blog;
