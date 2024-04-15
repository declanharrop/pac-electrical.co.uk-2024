// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper';
import { CaseStudySliderStyles } from './Slider.styles';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules

export default function CaseStudySlider({ content }) {
  console.log(content);
  return (
    <CaseStudySliderStyles>
      <Swiper
        slidesPerView="auto"
        navigation
        effect="coverflow"
        loop
        modules={[Navigation, EffectCoverflow]}
        className="mySwiper"
        centeredSlides
        // spaceBetween={30}
        coverflowEffect={{
          rotate: 30,
          stretch: -130,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
      >
        {content.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img src={slide.url} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </CaseStudySliderStyles>
  );
}
