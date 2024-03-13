/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

"use client";
import Link from 'next/link'

import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'


const products = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '#',
    price: '$48',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    price: '$89',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '$35',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '#',
    price: '$48',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    price: '$89',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '$35',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More products...
]

const callouts = [
  {
    name: 'S7-1200.',
    description: 'Work from home accessories',
    imageSrc: '/siemens/s71200.jpeg',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'S7-1500',
    description: 'Journals and note-taking',
    imageSrc: '/siemens/s71500.jpeg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'S7-300',
    description: 'Daily commute essentials',
    imageSrc: '/siemens/s7300.jpeg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
]
// products/siemens/plc

export default function Example() {
  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-4xl font-semibold leading-7 text-indigo-600">ABB</h2>
          </div>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/abb/abb01.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/abb/abb02.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            /><img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/abb/abb03.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            /><img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/abb/abb04.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            /><img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/abb/abb05.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            /><img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/abb/abb06.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            /><img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/abb/abb07.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/abb/abb08.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            /><img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/abb/abb09.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/abb/abb10.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            /><img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/abb/abb11.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/abb/abb12.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            /><img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/abb/abb13.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/abb/abb14.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/abb/abb15.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            />

          </div>

        </div>
      </div>
    </>

  )
}
