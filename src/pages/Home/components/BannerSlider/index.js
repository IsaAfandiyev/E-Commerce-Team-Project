import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper';
import BanerSliderInner from './BanerSliderInner';

function BanerSlider() {
	const pagination = {
		clickable: true,
		renderBullet: function (index, className) {
			return '<span class="' + className + '"></span>';
		},
	};

	return (
		<>
			<Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
				<SwiperSlide>
					<BanerSliderInner />
				</SwiperSlide>
				<SwiperSlide>
					<BanerSliderInner />
				</SwiperSlide>
				<SwiperSlide>
					<BanerSliderInner />
				</SwiperSlide>
			</Swiper>
		</>
	);
}

export default BanerSlider;
