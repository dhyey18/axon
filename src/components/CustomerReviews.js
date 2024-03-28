import { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

const reviews = [
  {
    content: `Lead generation and prioritization. riyo.ai help target quality companies through it's full-featured lead generation and website monitoring tools.`,
    name: "Brittany F.",
    position: "Sales Marketing Manager",
    companyImageURL: "https://assets.traek.io/testimonials/britany.jpeg",
  },
  {
    content: `Good starting point. The product has a good ability to show a point in time view of where you are. This helps with taking a proactive approach to mitigating risk.`,
    name: "Jacob H.",
    position: "Product Owner",
    companyImageURL: "https://assets.traek.io/testimonials/jackob.jpeg",
  },
  {
    content: `Right for my website. I am really glad I started using this product. Now I can see what happens on my website and also work on it. companies are more and we are happy.`,
    name: "Rucha J.",
    position: "Product Manager",
    companyImageURL: "https://assets.traek.io/testimonials/rucha.jpeg",
  },
  {
    content: `Best tool for Website Audit. We use riyo.ai to track the traffic trends of our website & are quite happy with its performance so far. It is a simple to use tool that offers rich analytics for website monitoring and lead generation.`,
    name: "Aadeeb S.",
    position: "Brand Manager",
    companyImageURL: "https://assets.traek.io/testimonials/aadeeb.jpeg",
  },
  {
    content: `Essential Lead Gen Tool. riyo.ai is one of the essential lead generation tools in Notesally's tech stack. riyo.ai helps us by enabling us to convert visitor to our site into a lead.`,
    name: "Vivek G.",
    position: "Co-Founder",
    companyImageURL: "https://assets.traek.io/testimonials/vivek.jpeg",
  },
  {
    content: `Satisfied with the product. Overall I am happy with the product and the promised done to me while selecting it. Chatting, real-time, and watch are the best.`,
    name: "Mihir C.",
    position: "Marketing Executive",
    companyImageURL: "https://assets.traek.io/testimonials/mihir.jpeg",
  },
];

export default function customerReviews() {
  return (
    <div className="w-full relative">
      <div className="px-8 overflow-x-clip">
        <OwlCarousel
          className="owl-theme min-h-[330px] testimonial-slider"
          loop={true}
          autoplay={true}
          dots={false}
          nav={true}
          center={true}
          lazyLoad={true}
          navSpeed={800}
          navText={[
            `<svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 0 24 24" width="28px" fill="#4236CE"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>`,
            `<svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 0 24 24" width="28px" fill="#4236CE"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>`,
          ]}
          margin={25}
          responsive={{
            0: {
              items: 1,
            },
            400: {
              items: 1,
            },
            740: {
              items: 2,
              margin: 20,
            },
            940: {
              items: 2,
              margin: 20,
            },
            1024: {
              items: 3,
            },
            1400: {
              items: 5,
            },
          }}
        >
          {reviews.map(
            ({ name, content, position, companyImageURL }, index) => {
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-[#F3F7FF] md:p-5 px-3 py-5 slider-item"
                >
                  <div className="flex justify-start">
                    <img
                      src={companyImageURL}
                      className="object-contain rounded-2xl !w-[70px] !h-[70px] filter grayscale mb-4"
                    ></img>
                  </div>
                  <h5 className="text-xl font-semibold text-[#242331]">
                    {name}
                  </h5>
                  <h6 className="text-sm text-[#3A3A3F] font-normal mb-5">
                    {position}
                  </h6>
                  <p className="text-sm text-[#3A3A3F] font-light">{content}</p>
                </div>
              );
            }
          )}
        </OwlCarousel>
      </div>
    </div>
  );
}
