import styles from "./index.module.css"
import Sponsor1 from '../../../../assets/images/home/Ellipse 4.svg'
import Sponsor2 from '../../../../assets/images/home/Ellipse 4 (1).svg'

function Sponsors() {
    return <>
        <div className={styles.container}>
            <div className={styles.slider}>
                <img src={Sponsor1} alt="" className={styles.sponsorImg}/>
                <p className={styles.sponsorName}>lorem ipsum</p>
                <p className={styles.sponsorText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa doloribus error praesentium sapiente sint velit voluptas. Dolorem nemo sapiente veniam?</p>
            </div>
            <div className={styles.slider}>
                <img src={Sponsor2} alt="" className={styles.sponsorImg}/>
                <p className={styles.sponsorName}>lorem ipsum</p>
                <p className={styles.sponsorText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa doloribus error praesentium sapiente sint velit voluptas. Dolorem nemo sapiente veniam?</p>
            </div>
            <div className={styles.slider}>
                <img src={Sponsor1} alt="" className={styles.sponsorImg}/>
                <p className={styles.sponsorName}>lorem ipsum</p>
                <p className={styles.sponsorText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa doloribus error praesentium sapiente sint velit voluptas. Dolorem nemo sapiente veniam?</p>
            </div>
        </div>
    </>
}
export default Sponsors;