
import styles from '../styles/Footer.module.css';
import Image from 'next/image';
 
const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
       <div className={styles.footer}>
           <div className={styles.cardL}>
               <h1 className={styles.header}>whatever creatives.</h1>
               <h1 className={styles.link__header}>
                   <a href='/contact' >
                <span className={styles.link}>word with us   
              </span> <Image src= "/images/link.png" alt='link_img' width='30px' height='30px' className={styles.link__img}/></a></h1>
           </div>
           <div className={styles.cardS}>
               <div className={styles.cardItems}>
                   12 adam street ny <br /> usa
               </div>
               <div className={styles.cardItems}>
                   contact@rk.thapa <br /> +919814556950
               </div>
           </div>
           <div className={styles.cardS}>
               <div className={styles.cardItems}>
                   follow us: <br />
                   __fb__insta__tw
               </div>
               <div className={styles.cardItems}>
               © {year} rk interactive. <br />
               all rights reserved
               </div>
           </div>
       </div>
        </>
    )
};

export default Footer;
