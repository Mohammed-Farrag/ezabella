import React from "react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

function Review({ review }) {
  return (
    <div className="flex shadow-none  md:shadow-md py-2 flex-col gap-2 px-4 items-center rounded-lg bg-[#FFf] transition-all ease-in hover:bg-[#276DB8] hover:text-[#fff] hover:-mt-3">
      <BiSolidQuoteAltLeft className="text-blue-300 text-6xl" />
      <p className="text-base md:text-2xl">{review.text}</p>
      <span className="my-3">{review.author}</span>
      {/* <img src="/images/videos/thumbnail.png" className='w-10 h-10 rounded-full' alt="" /> */}
    </div>
  );
}

export default Review;
