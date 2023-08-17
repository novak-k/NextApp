'use client'

import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import useSWR from 'swr';

//not allowed in 'use client' component
// export const metadata = {
//   title: 'NextApp Dashboard',
//   description: 'This is Dashboard Page',
// }

const Dashboard = () => {

  //OLD WAY TO FETCH DATA

  // const [data, setData] = useState([]);
  // const [err, setErr] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true);
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       cache: "no-store",
  //     });

  //     if (!res.ok) {
  //       setErr(true);
  //     }

  //     const data = await res.json();

  //     setData(data);
  //     setIsLoading(false);
  //   };
  //   getData()
  // }, []);

  //NEW WAY TO FETCH DATA
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR("https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  // console.log(data);

  return (
    <div className={styles.container}>Dashboard</div>
  )
}

export default Dashboard;
