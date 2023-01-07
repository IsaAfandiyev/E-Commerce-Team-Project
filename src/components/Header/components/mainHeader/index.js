import React from 'react';
import styles from "./index.module.css"
import logo from "../../../../assets/images/logo.png"
import heart from "../../../../assets/icons/header/heart.svg"
import person from "../../../../assets/icons/header/user.svg"
import cart from "../../../../assets/icons/header/shopping-cart.svg"
const MainHeader = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <img src={logo}></img>
                <div className={styles.search}>
                    <input type="text" placeholder="Search any things"/>
                    <button>Search</button>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.person}>
                    <img src={person}/>
                        <p> Sign in</p>
                </div>
                <div className={styles.heart}>
                    <img src={heart}/>
                        <p> Sign in</p>
                </div>
                <div className={styles.cart}>
                    <img src={cart}/>
                        <p>Cart</p>
                </div>
            </div>
        </div>
    );
};

export default MainHeader;