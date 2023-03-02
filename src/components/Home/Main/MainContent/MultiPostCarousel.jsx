import { Swiper, SwiperSlide } from "swiper/react";
import "../RecentPost/RecentPost.css";
// Import Swiper styles
import "swiper/swiper.min.css";

export default function MultiPostCarousel() {
  return (
    <>
      <h4 className="text-center m-3 bg-warning p-1"> Recent Posts</h4>
      <Swiper
        className="w-100 my-3 card p-2"
        spaceBetween={30}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="position-relative">
            <p className="post-tag">Android</p>
            <img
              src="/assets/images/and1.jpg"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
            <p className="post-image-title">How to make a website</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="position-relative">
            <p className="post-tag">Web</p>
            <img
              src="/assets/images/web3.jpg"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
            <p className="post-image-title">How to make a website</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="position-relative">
            <p className="post-tag">Database</p>
            <img
              src="/assets/images/db3.jpg"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
            <p className="post-image-title">How to make a website</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="position-relative" style={{ height: "230px" }}>
            <p className="post-tag">Android</p>
            <img
              src="/assets/images/and2.jpg"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
            <p className="post-image-title">How to make a website</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="position-relative" style={{ height: "230px" }}>
            <p className="post-tag">Database</p>
            <img
              src="/assets/images/db2.jpg"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
            <p className="post-image-title">How to make a website</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
