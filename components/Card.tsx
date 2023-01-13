import React from "react";
import Image from "next/image";

const Card = ({ h1text, h2text, p1, p2, q, a, imageURL }) => (
  <div className="relative h-96 w-72">
    <Image
      src={imageURL}
      className="object-cover h-full w-full"
      alt={"background-image"}
      height={800}
      width={800}
    />
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center opacity-0 hover:opacity-100 bg-opacity-0 hover:bg-opacity-90 bg-blue-gray">
      <div className="flex flex-col justify-center text-center mx-8">
        <h1 className="text-white opacity-90 text-sm tracking-wide pb-3">
          {h1text}
        </h1>
        <h2 className="text-dark-gray opacity-80 text-xs tracking-widest pb-4">
          {h2text}
        </h2>
        <div className="flex flex-row justify-center text-center tracking-tight text-xs font">
          <span className="text-dark-gray opacity-80 font-semibold">{q}</span>
          <p className="text-white pb-4 opacity-90 tracking-tight">{p1}</p>
        </div>
        <div className="flex flex-row justify-center text-center tracking-tight text-xs">
          <span className="text-dark-gray opacity-80 font-semibold">{a}</span>
          <p className="text-white pb-4 opacity-90 tracking-tight">{p2}</p>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
