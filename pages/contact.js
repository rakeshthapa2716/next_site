import React from 'react';
import styles from '../styles/Contact.module.css'
import Circle from '../Component/Circle';

const contact = () => {
  return (
   <div className={styles.contact}>
       <Circle backgroundColor="green"/>
       <Circle backgroundColor="yello" />
       <h1 className={styles.heading}>get in touch</h1>
       <form className={styles.form}>
           <input type="text" className={`${styles.inputs} ${styles.inputres}`} placeholder='phone no'/>
           <input type="text" className={`${styles.inputs} ${styles.inputres}`} placeholder='email'/>
           <input type="text" className={`${styles.inputl} ${styles.inputres}`} placeholder='username'/>
           <input type="text" className={`${styles.inputl} ${styles.inputres}`} placeholder='subject'/>
           <textarea placeholder='massage'  rows="10" className={`${styles.textarea} ${styles.inputres}`}/>
           <button className={styles.btn}>submit</button>
       </form>
   </div>
   
  )
};

export default contact;
