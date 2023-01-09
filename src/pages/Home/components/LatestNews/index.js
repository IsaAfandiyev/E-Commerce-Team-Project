import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './index.module.css';

import { Pagination } from 'swiper';
import SliderComponent from "../LatestNews/Components/SliderComponent";
import sliderImg1 from '../../../../assets/images/home/latestNews1.png';
import sliderImg2 from '../../../../assets/images/home/latestNews2.png';

export default function App() {
	return (
		<>
			<Swiper
				slidesPerView={2}
				spaceBetween={30}
				slidesPerGroup={3}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination]}
				className="mySwiper"
			>
				<SwiperSlide className={styles.slider}>
					<SliderComponent img={sliderImg1} />
				</SwiperSlide>
				<SwiperSlide className={styles.slider}>
					<SliderComponent img={sliderImg2} />
				</SwiperSlide>
				<SwiperSlide className={styles.slider}>
					<SliderComponent img={sliderImg1} />
				</SwiperSlide>
				<SwiperSlide className={styles.slider}>
					<SliderComponent img={sliderImg2} />
				</SwiperSlide>
			</Swiper>
		</>
	);
}
