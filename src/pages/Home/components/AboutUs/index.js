import styles from "./index.module.css"
import Sponsor1 from "../../../../assets/images/home/sponsor1.png"
import Sponsor2 from "../../../../assets/images/home/sponsor2.png"
import Sponsor3 from "../../../../assets/images/home/sponsor3.png"
import Sponsor4 from "../../../../assets/images/home/sponsor4.png"
import Sponsor5 from "../../../../assets/images/home/sponsor5.png"




function AboutUs(){
    return <>
        <div className={styles.container}>
                <div className={styles.sponsors}>
                    <img src={Sponsor1} alt=""/>
                </div>
            <div className={styles.sponsors}>
                <img src={Sponsor2} alt=""/>
            </div>
            <div className={styles.sponsors}>
                <img src={Sponsor3} alt=""/>
            </div>
            <div className={styles.sponsors}>
                <img src={Sponsor4} alt=""/>
            </div>
            <div className={styles.sponsors}>
                <img src={Sponsor5} alt=""/>
            </div>
        </div>
    </>
}
export default AboutUs;