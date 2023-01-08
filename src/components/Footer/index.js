import mailicon from '../../assets/icons/footer/send.svg';
import styles from './index.module.css';
import headphone from '../../assets/icons/footer/headphone.svg';
import logo from '../../assets/images/logo-11.svg';
import google from '../../assets/icons/footer/google.svg';
import fb from '../../assets/icons/footer/facebook.svg';
import wa from '../../assets/icons/footer/whatsapp.svg';
import dot from '../../assets/icons/footer/Ellipse.svg';
function Footer() {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.top}>
					<div className={styles.topleft}>Subscribe newsletter</div>
					<div className={styles.topcenter}>
						<p>Email Address</p>
						<img src={mailicon} alt="#" />
					</div>
					<div className={styles.topright}>
						<img src={headphone} alt="#" />
						<div className={styles.textss}>
							<p>Call us 24/7 :</p>
							<p> (+62) 0123 567 789</p>
						</div>
					</div>
				</div>
				<div className={styles.bottom}>
					<div className={styles.bottomone}>
						<img src={logo} alt="#" style={{ width: '120px' }} />
						<div className={styles.loc}>
							<p>64 st james boulevard</p>
							<p>hoswick , ze2 7zj</p>
						</div>
						<div className={styles.line}></div>
						<div className={styles.social}>
							<img alt="#" src={google} />
							<img alt="#" src={fb} />
							<img alt="#" src={wa} />
						</div>
					</div>
					<div className={styles.bottomtexter}>
						<div className={styles.headtext}>Find product</div>
						<div className={styles.simpletext}>
							<img alt="#" src={dot} />
							Brownze arnold
						</div>
						<div className={styles.simpletext}>
							<img alt="#" src={dot} />
							Chronograph blue
						</div>
						<div className={styles.simpletext}>
							<img alt="#" src={dot} />
							Smart phones
						</div>
						<div className={styles.simpletext}>
							<img alt="#" src={dot} />
							Automatic watch
						</div>
						<div className={styles.simpletext}>
							<img alt="#" src={dot} />
							Hair straighteners
						</div>
					</div>
					<div className={styles.bottomtexter}>
						<div className={styles.headtext}>Get help</div>
						<div className={styles.simpletext}>
							<img alt="#" src={dot} />
							About us
						</div>
						<div className={styles.simpletext}>
							<img alt="#" src={dot} />
							Contact us
						</div>
						<div className={styles.simpletext}>
							<img alt="#" src={dot} />
							Return policy
						</div>
						<div className={styles.simpletext}>
							<img alt="#" src={dot} />
							Privacy policy
						</div>
						<div className={styles.simpletext}>
							<img alt="#" src={dot} />
							Payment policy
						</div>
					</div>
					<div className={styles.bottomtexter}>
						<div className={styles.headtext}>About us</div>
						<div className={styles.simpletext}>
							<img alt="#" src={dot} />
							Faq’s
						</div>
						<div className={styles.simpletext}>
							<img alt="#" src={dot} />
							News
						</div>
						<div className={styles.simpletext}>
							<img alt="#" src={dot} />
							Service
						</div>
						<div className={styles.simpletext}>
							<img alt="#" src={dot} />
							Our policy
						</div>
						<div className={styles.simpletext}>
							<img alt="#" src={dot} />
							Customer care
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default Footer;
