import styles from '../styles/Navbar.module.css';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [open , setOpen] = useState(false)
  return (
       <>
      <div className={styles.navbar}>
       <div className={styles.navbar__child}>
       <Link href = '/'> whatever</Link>
       </div>
       <div className={styles.list}>
         <ul className={styles.unorderList}>
           <li className={styles.listItems}><Link href ='/product/design' className={styles.activeLInk}>design</Link></li>
           <li className={styles.listItems}><Link href ='/product/development'>development</Link></li>
           <li className={styles.listItems}><Link href ='/product/production'>production</Link></li>
           <li className={styles.listItems}><Link href ='/product/photography'>photography</Link></li>
           <li className={styles.listItems}><Link href ='/contact'>contact</Link></li>
         </ul>
       </div>
       <div className={styles.humburger} onClick={()=>setOpen(!open)}>
         <div className={styles.line}/>
         <div className={styles.line}/>
         <div className={styles.line}/>
       </div>
       <ul className={styles.menu} style={{top:open ? '0px' : "-110%"}} onClick={()=>setOpen(!open)}>
            <li className={styles.menuItems}><Link href ='/product/design'>design</Link></li>
           <li className={styles.menuItems}><Link href ='/product/development'>development</Link></li>
           <li className={styles.menuItems}><Link href ='/product/production'>production</Link></li>
           <li className={styles.menuItems}><Link href ='/product/photography'>photography</Link></li>
           <li className={styles.menuItems}><Link href ='/contact'>contact</Link></li>
       </ul>
      </div>
      </>
  )
};

export default Navbar;

