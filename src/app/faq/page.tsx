



"use client"

import React, { useState } from 'react';
import { GoPlus } from "react-icons/go";

const testimonials = [
  {
    id: 1,
    title: 'Highly Recommend',
    content:
      "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
  },
  {
    id: 2,
    title: 'Highly Recommend',
    content:
      "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
  },
  {
    id: 3,
    title: 'Highly Recommend',
    content:
      "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
  },
  {
    id: 4,
    title: 'Highly Recommend',
    content:
      "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
  },
  {
    id: 5,
    title: 'Highly Recommend',
    content:
      "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
  },
  {
    id: 6,
    title: 'Highly Recommend',
    content:
      "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
  },
  // Add more testimonials here
];

const Testimonials: React.FC = () => {
  const [testimonialList, setTestimonialList] = useState(testimonials);

  const handleRemoveTestimonial = (id: number) => {
    setTestimonialList(testimonialList.filter((testimonial) => testimonial.id !== id));
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
          Questions Looks Here <br />
          <span className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, cumque?
          </span>
        </h1>
        <div className="flex flex-wrap -m-4">
          {testimonialList.map((testimonial) => (
            <div key={testimonial.id} className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded relative">
                <GoPlus
                  onClick={() => handleRemoveTestimonial(testimonial.id)}
                  className="absolute top-2 right-2 text-gray-600 cursor-pointer"
                  size={20}
                />
                <h2 className="text-xl font-semibold text-gray-900 mb-4">{testimonial.title}</h2>
                <p className="leading-relaxed mb-6">{testimonial.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
