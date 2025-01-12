import React from "react";
import Image from "next/image";
import Link from "next/link";

const Carousel = () => {
  return (
    <div className="w-full h-[400px] overflow-hidden">
      <div className="carousel w-full h-full">
        <div id="slide1" className="carousel-item relative w-full h-full">
          <Image
            src="/images/slider1.jpg"
            alt="Image 1"
            layout="responsive"
            width={800}
            height={400}
            className="object-cover"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <Link href="#slide4" className="btn btn-circle">
              ❮
            </Link>
            <Link href="#slide2" className="btn btn-circle">
              ❯
            </Link>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full h-full">
          <Image
            src="/images/slider3.webp"
            alt="Image 2"
            layout="responsive"
            width={800}
            height={400}
            className="object-cover"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <Link href="#slide1" className="btn btn-circle">
              ❮
            </Link>
            <Link href="#slide3" className="btn btn-circle">
              ❯
            </Link>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full h-full">
          <Image
            src="/images/slider2.jpg"
            alt="Image 3"
            layout="responsive"
            width={800}
            height={400}
            className="object-cover"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <Link href="#slide2" className="btn btn-circle">
              ❮
            </Link>
            <Link href="#slide4" className="btn btn-circle">
              ❯
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
