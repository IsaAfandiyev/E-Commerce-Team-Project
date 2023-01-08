import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { dataContext } from '../../../../context/dataContext';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import ItemsSliderInner from './ItemsSliderInner';
import { Navigation } from 'swiper';

export default function ItemsSlider() {
	let { data } = useContext(dataContext);
	return (
		<>
			<Swiper
				slidesPerView={1}
				spaceBetween={10}
				pagination={{
					type: 'progressbar',
				}}
				breakpoints={{
					'@0.00': {
						slidesPerView: 1,
						spaceBetween: 10,
					},
					'@0.75': {
						slidesPerView: 2,
						spaceBetween: 10,
					},
					'@1.00': {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					'@1.50': {
						slidesPerView: 3,
						spaceBetween: 30,
					},
				}}
				navigation={true}
				className="mySwiper"
				modules={[Navigation]}
			>
				{data &&
					data.map((item) => (
						<SwiperSlide key={item.id}>
							<ItemsSliderInner item={item} />
						</SwiperSlide>
					))}
			</Swiper>
		</>
	);
}
