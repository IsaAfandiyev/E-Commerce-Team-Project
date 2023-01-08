import styles from "./index.module.css"
import {useContext, useEffect, useState} from "react";
import {dataContext} from "../../../../../../context/dataContext";
import React from "react";
import StarIcon from "../../../../../../assets/icons/star-regular (1).svg";
function RandomProductBox(){
    let {data} = useContext(dataContext);
    const [randomNumber,setRandomNumber] = useState(0);

    useEffect((randomNumber)=>{
        setRandomNumber(Math.floor(Math.random() * 20));
    },[]);

    return <>
        <section className={styles.sectionNav}>
            <div className={styles.top}>
                <div className={styles.container}>
                    <div className={styles.itemImg}>
                        <img src={data.length >0 ? data[randomNumber].image : 'https://media.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif'} alt="" />
                    </div>
                    <div className={styles.itemName}>
                        <p className={styles.itemName__text}>{data.length>0? data[randomNumber].title : 'loading...'}</p>
                        <p className={styles.itemPrice}>$ {data.length>0? data[randomNumber].price : 'loading...'}</p>
                        <div className={styles.starsContainer}>
                            <img src={StarIcon} alt="" id={styles.starIcon}/>
                            <img src={StarIcon} alt="" id={styles.starIcon}/>
                            <img src={StarIcon} alt="" id={styles.starIcon}/>
                            <img src={StarIcon} alt="" id={styles.starIcon}/>
                            <img src={StarIcon} alt="" id={styles.starIcon}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.bottom}>
                <div className={styles.container}>
                    <div className={styles.itemImg}>
                        <img src={data.length >0 ? data[randomNumber +1].image : 'https://media.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif'} alt="" />
                    </div>
                    <div className={styles.itemName}>
                        <p className={styles.itemName__text}>{data.length>0? data[randomNumber +1].title : 'loading...'}</p>
                        <p className={styles.itemPrice}>$ {data.length>0? data[randomNumber +1].price : 'loading...'}</p>
                        <div className={styles.starsContainer}>
                            <img src={StarIcon} alt="" id={styles.starIcon}/>
                            <img src={StarIcon} alt="" id={styles.starIcon}/>
                            <img src={StarIcon} alt="" id={styles.starIcon}/>
                            <img src={StarIcon} alt="" id={styles.starIcon}/>
                            <img src={StarIcon} alt="" id={styles.starIcon}/>
                        </div>
                    </div>
                </div>
            </div>

        </section>


    </>
}
export default RandomProductBox;