// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, EffectCoverflow } from 'swiper/modules';
import { CaseStudySliderStyles } from './Slider.styles';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';

// import required modules

export default function CaseStudySlider({ content }) {
  return (
    <CaseStudySliderStyles>
      <swiper-container
        slidesPerView="auto"
        navigation="true"
        pagination="true"
        effect="coverflow"
        loop
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
          <swiper-slide key={slide.id}>
            <img src={slide.url} alt="" />
          </swiper-slide>
        ))}
      </swiper-container>
    </CaseStudySliderStyles>
  );
}
