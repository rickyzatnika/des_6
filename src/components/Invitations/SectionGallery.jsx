import LightGallery from "lightgallery/react";
import { motion } from "framer-motion";
import Orn from "../../assets/images/orn-2.png";
import Orns from "../../assets/orn-3.png";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const SectionGallery = () => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
    <>
      <div className="w-full h-full pb-20 relative bg-white">
        <div className="flex flex-col items-center py-10">
          <motion.img
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            src={Orns}
            alt=""
            className="w-[150px] sm:w[205px] "
          />
          <h1 className="text-center py-2 text-2xl lg:text-3xl text-[#444337] ">
            Happy <span className="text-2xl text-[#bfa95b]">Moment</span>
          </h1>
          <motion.img
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            src={Orn}
            alt=""
            className="w-[150px] sm:w[205px] pt-1 "
          />
        </div>
        <div className="w-full mb-10 sm:mb-20">
          <LightGallery
            onInit={onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            elementClassNames="w-full max-w-5xl mx-auto columns-3 gap-0 px-1 py-4"
          >
            <a href="/gallery/gallery-7.png">
              <img
                src="/gallery/gallery-7.png"
                alt=""
                className="w-full object-cover border-2 border-[#727251]"
              />
            </a>

            <a href="/gallery/gallery-12.png">
              <img
                src="/gallery/gallery-12.png"
                alt=""
                className="w-full object-cover border-2 border-[#727251]"
              />
            </a>

            <a href="/gallery/gallery-11.png">
              <img
                src="/gallery/gallery-11.png"
                alt=""
                className="w-full object-cover border-2 border-[#727251]"
              />
            </a>

            <a href="/gallery/gallery-2.png">
              <img
                src="/gallery/gallery-2.png"
                alt=""
                className="w-full object-cover border-2 border-[#727251]"
              />
            </a>

            <a href="/gallery/gallery-3.png">
              <img
                src="/gallery/gallery-3.png"
                alt=""
                className="w-full object-cover border-2 border-[#727251]"
              />
            </a>

            <a href="/gallery/gallery-8.png">
              <img
                src="/gallery/gallery-8.png"
                alt=""
                className="w-full object-cover border-2 border-[#727251]"
              />
            </a>

            <a href="/gallery/gallery-4.png">
              <img
                src="/gallery/gallery-4.png"
                alt=""
                className="w-full object-cover border-2 border-[#727251]"
              />
            </a>

            <a href="/gallery/gallery-5.png">
              <img
                src="/gallery/gallery-5.png"
                alt=""
                className="w-full object-cover border-2 border-[#727251]"
              />
            </a>

            <a href="/gallery/gallery-6.png">
              <img
                src="/gallery/gallery-6.png"
                alt=""
                className="w-full object-cover border-2 border-[#727251]"
              />
            </a>

            <a href="/gallery/gallery-9.png">
              <img
                src="/gallery/gallery-9.png"
                alt=""
                className="w-full object-cover border-2 border-[#727251]"
              />
            </a>

            <a href="/gallery/gallery-10.png">
              <img
                src="/gallery/gallery-10.png"
                alt=""
                className="w-full object-cover border-2 border-[#727251]"
              />
            </a>

            <a href="/gallery/gallery-1.png">
              <img
                src="/gallery/gallery-1.png"
                alt=""
                className="w-full object-cover border-2 border-[#727251]"
              />
            </a>

            <a href="/gallery/gallery-13.png">
              <img
                src="/gallery/gallery-13.png"
                alt=""
                className="w-full object-cover border-2 border-[#727251]"
              />
            </a>
          </LightGallery>
        </div>
        <div className="w-full absolute -bottom-1 left-0 right-0 ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#DAD8C0"
              fillOpacity="1"
              d="M0,224L34.3,218.7C68.6,213,137,203,206,202.7C274.3,203,343,213,411,218.7C480,224,549,224,617,202.7C685.7,181,754,139,823,149.3C891.4,160,960,224,1029,245.3C1097.1,267,1166,245,1234,218.7C1302.9,192,1371,160,1406,144L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default SectionGallery;
