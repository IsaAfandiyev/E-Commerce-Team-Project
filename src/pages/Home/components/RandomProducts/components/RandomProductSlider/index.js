import React, { useState, useContext, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import './index.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import styles from './index.module.css';
import { dataContext } from '../../../../../../context/dataContext';
import StarIcon from '../../../../../../../src/assets/icons/star-regular (1).svg';
import CartIcon from '../../../../../../assets/icons/header/shopping-cart.svg';
import Eye from '../../../../../../assets/icons/eye.svg';

function RandomProductSlider() {
	let { data } = useContext(dataContext);
	const [randomNumber, setRandomNumber] = useState(0);
	console.log(data);

	useEffect(() => {
		setRandomNumber(Math.floor(Math.random() * 20));
	}, []);

	return (
		<>
			<div className={styles.container}>
				<Swiper
					spaceBetween={30}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination]}
					className="mySwiper"
				>
					<SwiperSlide>
						<div className={styles.item__container}>
							<div className={styles.itemImg}>
								<img
									className={styles.swiperSlide}
									src={
										data.length > 0
											? data[randomNumber].image
											: 'https://media.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif'
									}
									alt=""
								/>
							</div>
							<div className={styles.itemDescr}>
								<p className={styles.itemName}>{data.length > 0 ? data[randomNumber].title : 'loading...'}</p>
								<p className={styles.itemPrice}> $ {data.length > 0 ? data[randomNumber].price : 'loading...'}</p>
								<div className={styles.starsContainer}>
									<img src={StarIcon} alt="" id={styles.starIcon} />
									<img src={StarIcon} alt="" id={styles.starIcon} />
									<img src={StarIcon} alt="" id={styles.starIcon} />
									<img src={StarIcon} alt="" id={styles.starIcon} />
									<img src={StarIcon} alt="" id={styles.starIcon} />
								</div>
								<div className={styles.itemsInStock}>
									<div className={styles.itemInStock}>26</div>
									<div className={styles.itemInStock}>04</div>
									<div className={styles.itemInStock}>19</div>
									<div className={styles.itemInStock}>96</div>
								</div>
								<div className="addToCartSection">
									<div className={styles.addToCart}>
										<p className={styles.addToCartText}>Add To Cart</p>
										<div>
											<img src={CartIcon} alt="" id={styles.cartIcon} />
										</div>
									</div>
									<div className={styles.watch}>
										<img src={Eye} alt="" id={styles.watchIcon} />
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className={styles.item__container}>
							<div className={styles.itemImg}>
								<img
									src={
										data.length > 0
											? data[randomNumber + 1].image
											: 'https://media.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif'
									}
									alt=""
								/>
							</div>
							<div className={styles.itemDescr}>
								<p className={styles.itemName}>{data.length > 0 ? data[randomNumber].title : 'loading...'}</p>
								<p className={styles.itemPrice}> $ {data.length > 0 ? data[randomNumber].price : 'loading...'}</p>
								<div className={styles.starsContainer}>
									<img src={StarIcon} alt="" id={styles.starIcon} />
									<img src={StarIcon} alt="" id={styles.starIcon} />
									<img src={StarIcon} alt="" id={styles.starIcon} />
									<img src={StarIcon} alt="" id={styles.starIcon} />
									<img src={StarIcon} alt="" id={styles.starIcon} />
								</div>
								<div className={styles.itemsInStock}>
									<div className={styles.itemInStock}>26</div>
									<div className={styles.itemInStock}>04</div>
									<div className={styles.itemInStock}>19</div>
									<div className={styles.itemInStock}>96</div>
								</div>
								<div className="addToCartSection">
									<div className={styles.addToCart}>
										<p className={styles.addToCartText}>Add To Cart</p>
										<div>
											<img src={CartIcon} alt="" id={styles.cartIcon} />
										</div>
									</div>
									<div className={styles.watch}>
										<img src={Eye} alt="" id={styles.watchIcon} />
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</>
	);
}
export default RandomProductSlider;
