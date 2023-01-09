import styles from "./index.module.css"
import BoxTick from "../../../../assets/icons/home/box-tick.svg"
import Crown from "../../../../assets/images/home/specialsCrown.png"
import SpecailSecurity from "../../../../assets/images/home/specialsSecurity.png"
function Specials() {
    return <>
        <div className={styles.container}>
            <div className={styles.freeDelivery}>
                <img src={BoxTick} alt=""/>
                <div className={styles.freeDeliveryTexts}>
                    <p className={styles.freeDeliveryText}>Free Delivery</p>
                    <p className={styles.freeDeliveryAbout}>on order above  $ 50,00</p>
                </div>

            </div>
            <div className={styles.freeDelivery}>
                <img src={Crown} alt=""/>
                <div className={styles.freeDeliveryTexts}>
                    <p className={styles.freeDeliveryText}>Best Quality</p>
                    <p className={styles.freeDeliveryAbout}>best quality in low price</p>
                </div>

            </div>
            <div className={styles.freeDelivery}>
                <img src={SpecailSecurity} alt=""/>
                <div className={styles.freeDeliveryTexts}>
                    <p className={styles.freeDeliveryText}>1 year warranty</p>
                    <p className={styles.freeDeliveryAbout}>Avaibale warranty</p>
                </div>
            </div>
        </div>
    </>
}
export default Specials;