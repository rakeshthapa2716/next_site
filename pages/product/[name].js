import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Product.module.css'
import { data } from '../../Component/data';

const products = ({product}) => {

  return (
      <div className={styles.container}>
        <div className={styles.cardB}>
            {product.images.map((items_data)=>{
                return (
                    <div className={styles.img_container} key={items_data.id}>
                        <Image src={items_data.url} alt={items_data.title}   objectFit='cover' layout='fill'/>
                    </div>
                )
            })}
           </div>
           <div className={styles.cardS}>
               <h1 className={styles.heading}>{product.title}</h1>
               <p className={styles.para}> {product.longDesc}</p>
               <button className={styles.button}><Link href='/contact'>Contact</Link></button>
           </div>
      </div>
  )
};

export const getStaticPaths = async () =>{
    const products = data;
    const paths = products.map((items)=>{
        return {
            params: {name:items.name}
        }
    })
    return{
        paths,
        fallback: false,
    }
}
export const getStaticProps = async (ctx) =>{
    console.log(ctx);
    const name = ctx.params.name;
    const product = data.filter((items)=>items.name === name) [0];
    console.log(product);
    return{
        props: {product}
    
    }
 }
export default products;
