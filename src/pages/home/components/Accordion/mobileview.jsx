import React from "react";
import parse from "html-react-parser";
import Slider from "react-slick";
import image1 from '../../../../assets/images/mobimgs/Capture2.png';
import image2 from '../../../../assets/images/mobimgs/Capture.png';
import image3 from '../../../../assets/images/mobimgs/Capture3.png';
import image4 from '../../../../assets/images/mobimgs/Capture4.png';
export default function Mobileview({ data }) {
  const imageStyles = {
    width: '100%',
  };
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    margin: 50,
    nav: false,
    arrows: false,
    autoplay: true,
    autoplayspeed:2000,
  };
  return (
    <div>
      <div className="col-12">
        <p style={{ fontWeight: "600" }}>
          How banks can drive growth with Spinach.
        </p>
      </div>
      {!!data && !!data.length && (
        <Slider {...settings}>
          {!!data &&
             !!data.length &&
            data.map((item, index) => (
               <div className="smallercolour">
                <h1 className="text-center"> {parse(item.attributes.Title.replace('<br/>', ""))}</h1>
                <p className="text-center">{item.attributes.Details}</p>
                 <img src={index == 0 ? image1 : index == 1 ? image2 : index == 2 ? image3 : image4} style={imageStyles} />
              </div>
            ))}
        </Slider>
      )}
    </div>
  );
}
