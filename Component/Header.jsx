import styles from '../styles/Header.module.css'
import Image from 'next/image';
import Circle from './Circle';
const Header = () => {
  return(

      <div className={styles.header}>
        <Circle backgroundColor='#b0ff49' top='-50vh' left="-50vh"/>
          <div className={styles.card}>
            <div className={styles.header__child}>
            <h1 className={styles.heading}><span className={styles.brandname}>whatever</span> digital <br /> product agency</h1>
            <p className={styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sint fugit, ex esse sequi ab magni cupiditate minus illum natus autem corrupti! Tempore, repudiandae deserunt? Quisquam voluptate provident, hic praesentium iure quas ducimus quibusdam rem esse. Minus repellendus totam dolore?</p>
            <button className={styles.btn}>discover</button>
          </div>
          </div>
          <div className={`${styles.card} ${styles.images}`}>
            <Image src='/images/Avocado.png' alt="header__image" width='100' height="100%"layout='responsive' objectFit='cover' className={styles.img}/>
          </div>
      </div>

  ) 
};

export default Header;
