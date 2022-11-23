import React, { useState } from "react"
import FsLightbox from "fslightbox-react"

import videoThumbImg from "../../images/choose/choose-7.jpg"
import video from "../../images/choose/testimoni.mp4"

import shapeImg1 from "../../images/choose/choose-shape-3.png"
import shapeImg2 from "../../images/about/about-shape-3.png"

const WhyChooseUs = () => {
  const [toggler, setToggler] = useState(false)
  return (
    <>
    <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />
      
      {/* <FsLightbox
        toggler={toggler}
        sources={[
          "https://www.youtube.com/watch?v=e9AtZbQ7nYU"
          // "https://youtube.com/shorts/SlBmpKnqjUo"
          // <div className="video-player">
          // <iframe
					// 	src={video}
					// 	frameBorder="0"
					// 	allow="autoplay; fullscreen"
					// 	allowFullScreen
					// />
          // </div>
        ]}
      /> */}

      <div className="start-consuling-choose ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="consulting-choose-content pr-20">
                <div className="choose-content-title">
                  <span>Kenapa Memilih Kami?</span>
                  <h2>Berikut Salah Satu Testimoni dari Klien Kami</h2>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="consult-choose-img pl-20">
                <img 
                  src={videoThumbImg} 
                  alt="Image" 
                />

                <div className="icon">
                  <div className="play-btn" onClick={() => setToggler(!toggler)}>
                    <i className="flaticon-play-button-arrowhead"></i>
                  </div>
                </div>

                {/* Shape Images */}
                <img
                  src={shapeImg1}
                  className="choose-shape-1"
                  alt="Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhyChooseUs
