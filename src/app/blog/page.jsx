import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
// import Blog1 from "public/pexels-blog4.jpg"
// import Blog2 from "public/pexels-blog2.jpg"
import Blog3 from "public/pexels-blog3.jpg"

export const metadata = {
  title: 'NextApp Blog',
  description: 'This is Blog Page',
}

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts', { 
    // next: { revalidate: 10 }
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const Blog = async () => {
  const data = await getData();

  return (
    <div className={styles.mainContainer}>

      {data.map((item) => (
        <Link href={`/blog/${item._id}`} className={styles.container} key={item.key}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src={Blog3}
            // src={item.img}
            width={400}
            height={250}
            alt=""
          />
        </div>
         <div className={styles.content}>
          <h1 className={styles.title}>{item.title}</h1>
          <p className={styles.desc}>{item.desc}</p>
        </div>
      </Link>
      ))}

      {/* <Link href={'/blog/testId'} className={styles.container}>
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
      </Link> */}

      {/* <Link href={'/blog/testId'} className={styles.container}>
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
      </Link> */}

    </div>
  )
}

export default Blog;
