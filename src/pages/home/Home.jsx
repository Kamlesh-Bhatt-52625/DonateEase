import React from "react";
import "./home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Home = () => {
  SwiperCore.use([Navigation]);

  return (
    <div>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide>
          <div
            style={{
              background: `url('https://cdn.pixabay.com/photo/2021/04/28/04/48/ngo-near-me-6212979_1280.jpg')`,
              backgroundPosition: "center",
              backgroundRepeat: "repeat",
              backgroundSize: "cover",
            }}
            className="slide"
          >
            {/* Dark overlay */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust transparency as needed
              }}
            ></div>
            <div className="slide-content">
              <h2>Support Education for Underprivileged Children</h2>
              <p>
                Your donation can help provide access to education for
                underprivileged children across India, giving them hope for a
                brighter future.
              </p>
              {/* <button>Donate Now</button> */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              background: `url('https://media.istockphoto.com/id/1176766131/photo/a-poor-homeless-happy-smiling-orphan-child.jpg?s=1024x1024&w=is&k=20&c=zoq5-S6OT8wXVgR1DdUvFmvzn9RUbtD17L7SGdifuJE=')`,
              backgroundPosition: "center",
              backgroundRepeat: "repeat",
              backgroundSize: "cover",
            }}
            className="slide"
          >
            {/* Dark overlay */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust transparency as needed
              }}
            ></div>
            <div className="slide-content">
              <h2>Support Shelter for Homeless Children</h2>
              <p>
                Your donation can provide shelter, food, and care for homeless
                children, offering them a safe and nurturing environment to
                thrive.
              </p>
              {/* <button>Donate Now</button> */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              background: `url('https://cdn.pixabay.com/photo/2021/04/28/04/48/ngo-near-me-6212979_1280.jpg')`,
              backgroundPosition: "center",
              backgroundRepeat: "repeat",
              backgroundSize: "cover",
            }}
            className="slide"
          >
            {/* Dark overlay */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust transparency as needed
              }}
            ></div>
            <div className="slide-content">
              <h2>Support Healthcare for Rural Communities</h2>
              <p>
                Your donation can support healthcare initiatives in rural
                communities, providing medical aid and improving healthcare
                access for those in need.
              </p>
              {/* <button>Donate Now</button> */}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
