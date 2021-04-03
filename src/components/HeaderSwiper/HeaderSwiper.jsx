import React from 'react';
import './Header__swiper.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay, A11y} from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss'
import swiper1 from './../../img/swiper1.png';
import swiper2 from './../../img/swiper2.png';
import TransitionsModal from '../Modal/TransitionModal';

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay, A11y]);

const HeaderSwiper = () => {

    return (
        <div className="header__swiper">
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                navigation
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)} >
                <SwiperSlide>
                    <div class="swiper-slide">
                        <div class="s-s-body row">
                            <div class="s-b-inform">
                                <h1>Zamonaviy kasblarni tez va oson o'rganing</h1>
                                <p>Audiokitoblar</p>
                                <TransitionsModal text="Sotib olish" />
                            </div>
                            <div class="s-b-img">
                                <img src={swiper1} alt=""/>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="swiper-slide">
                        <div class="s-s-body row">
                            <div class="s-b-inform">
                                <h1>Zamonaviy kasblarni tez va oson o'rganing!</h1>
                                <p>Videodarslar</p>
                                <TransitionsModal text="Sotib olish" />
                            </div>
                            <div class="s-b-img">
                                <img src={swiper2} alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="swiper-slide">
                        <div class="s-s-body row">
                            <div class="s-b-inform">
                                <h1>Zamonaviy kasblarni tez va oson o'rganing</h1>
                                <p>Audiodarslar</p>
                                <TransitionsModal text="Sotib olish" />
                            </div>
                            <div class="s-b-img">
                                <img src={swiper1} alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default HeaderSwiper;