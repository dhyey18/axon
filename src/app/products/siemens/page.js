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
            <h2 className="text-4xl font-semibold leading-7 text-indigo-600">siemens</h2>
          </div>
        </div>
      </div>
      {/* <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              </a>
            ))}
          </div>
        </div>
      </div> */}

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/siemens/s7300.jpeg"
              alt="Transistor"
              onClick={() => { Router.push('/products/siemens/') }}
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/siemens/s71500.jpeg"
              alt="Reform"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/siemens/s71200.jpeg"
              alt="Tuple"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="/siemens/s7300.jpeg"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="/siemens/s7300_2.jpeg"
              alt="Statamic"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="/siemens/si01.jpeg"
              alt="Statamic"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="/siemens/si02.jpeg"
              alt="Statamic"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="/siemens/si03.jpeg"
              alt="Statamic"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="/siemens/si04.jpeg"
              alt="Statamic"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="/siemens/si05.jpeg"
              alt="Statamic"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="/siemens/si06.jpeg"
              alt="Statamic"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="/siemens/si07.jpeg"
              alt="Statamic"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="/siemens/si08.jpeg"
              alt="Statamic"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="/siemens/si09.jpeg"
              alt="Statamic"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="/siemens/si10.jpeg"
              alt="Statamic"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="/siemens/si11.jpeg"
              alt="Statamic"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="/siemens/si12.jpeg"
              alt="Statamic"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="/siemens/si13.jpeg"
              alt="Statamic"
              width={158}
              height={48}
            />

            <img
              className="col-span-2 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="/siemens/si14.jpeg"
              alt="Statamic"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="/siemens/si15.jpeg"
              alt="Statamic"
              width={158}
              height={48}
            />

            <img
              className="col-span-2 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="/siemens/si16.jpeg"
              alt="Statamic"
              width={158}
              height={48}
            />

            <img
              className="col-span-2 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="/siemens/si17.jpeg"
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
          {/* <Link href={`/products/siemens/plc`} className="text-sm font-semibold leading-6 text-indigo-600">
              more products <span aria-hidden="true">→</span>
            </Link > */}
        </div>
      </div>
    </>

  )
}
