import Link from 'next/link';
import React from 'react';
import styles from '../styles/Service.module.css'
import Image from 'next/image';

const Service = ({ service }) => {
  return (
    <div className={styles.service}>
      <h1 className={styles.heading}> what we can do?</h1>
      <h1 className={styles.heading2}>Services we can help you with</h1>
      <div className={styles.content}>
        {service.map(serviceData => (
          <Link passHref href={`/product/${serviceData.name}`} key={serviceData.id}>
            <div className={styles.service__card} >
              <span className={styles.category}>{serviceData.title}</span>
              <div className={styles.description}>{serviceData.desc}</div>
              <div className={styles.media}>
                {serviceData.video ? (<video src={`/images/${serviceData.video}`} autoPlay muted loop className={styles.video}/>) :
                  (<Image src={`/images/${serviceData.photo}`} alt={serviceData.title} width='100%' height="100%" objectFit='cover' layout='responsive' className={styles.img}/>)}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
};

export default Service;
