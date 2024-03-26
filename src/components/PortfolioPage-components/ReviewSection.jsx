import React from "react";
import { FaStar } from "react-icons/fa6";
import Svgquote from "../../assets/img/svg/quote.svg";
import { useSelector } from "react-redux";

function ReviewSection() {
  const { colorValue } = useSelector((state) => state.Color);
  const { testimonials } = useSelector(({ FetchData }) => FetchData.DataValue);

  return (
    <section className="ReviewPag" style={{ color: `${colorValue}` }}>
      <div className="card w-[98%] md:w-[60%] mx-auto p-10 shadow-Bx space-y-8">
        <span className="Icons flex text-xl md:text-2xl">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </span>
        <div className="text font-Poppins text-xl">
          <p>{testimonials[0].review}</p>
        </div>

        <div className="details font-Poppins text-xl  ItemsVerticalCenter justify-between max-sm:flex-col-reverse">
          <span className="author max-sm:my-3 max-sm:text-center space-y-3">
            <h1>{testimonials[0].name}</h1>
            <h1>{testimonials[0].position}</h1>
          </span>
          <img
            className="AboutImage size-60 rounded-xl"
            src={testimonials[0].image.url}
            alt="AboutImage"
          />
        </div>
        <div className="avatar">
          <div className="image" data-img-url="img/about/1.jpg"></div>
        </div>
        <img className="svg size-32 SvgAbout " src={Svgquote} alt="" />
      </div>
    </section>
  );
}

export default ReviewSection;
