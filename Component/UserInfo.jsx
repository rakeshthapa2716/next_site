import React from 'react';
import styles from '../styles/UserInfo.module.css';
import Circle from './Circle';
import Image from 'next/image';
import { users } from '../Component/data';

const UserInfo = () => {
  return (
      <div className={styles.users}>
        <Circle backgroundColor='darkblue' top='-70vh' right="0" left="0"/> 
        <h1 className={styles.heading}>testimonials</h1>
        <div className={styles.user__div}>
            {users.map(user=>(
                <div className={styles.card} key={user.id}>
                    <Image src={`/images/${user.logo}`} alt={user.title} width="60" height='60' className={styles.logo}/>
                    <p className={styles.cmt}>{user.comment}</p>
                    <div className={styles.subscriber}>
                        <Image src={`/images/${user.avatar}`} width='70' height="70" className={styles.avatar}/ >
                        <div className={styles.info}>
                        <span className={styles.user__name}>{user.name}</span>
                        <span className={styles.user__info}>{user.title}</span>
                    </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
  )
};

export default UserInfo;
