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
const products = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '#',
    price: '$48',
    imageSrc: '/siemens/et200s.jpeg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35',
    imageSrc: '/siemens/et200sp.jpeg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    price: '$89',
    imageSrc: '/siemens/logoplc.jpeg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '$35',
    imageSrc: '/siemens/s7400.jpeg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '$35',
    imageSrc: '/siemens/s7200.jpeg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More products...
]

export default function Example() {
  return (
    <div className="bg-white">
      {/* <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-4xl font-semibold leading-7 text-indigo-600">siemens</h2>
          </div>
        </div>
      </div> */}
      <div className="bg-white py-16 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Siemens
          </h2>
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
             {/* <img
              className="col-span-2 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="/siemens/et200s.jpeg"
              alt="SavvyCal"
              width={158}
              height={48}
            /> */}
          </div>
          <Link href={`/products/siemens`} className="text-sm font-semibold leading-6 text-indigo-600">
            more products <span aria-hidden="true">→</span>
          </Link >
        </div>
      </div>

      <div className="bg-white py-16 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Mitsubishi
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/mitsubishi/m01.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/mitsubishi/m02.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/mitsubishi/m03.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/mitsubishi/m04.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            />
            {/* <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/mitsubishi/m01.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            /> */}
          </div>
          <Link href={`/products/mitsubishi/`} className="text-sm font-semibold leading-6 text-indigo-600">
            more products <span aria-hidden="true">→</span>
          </Link >
        </div>
      </div>

      <div className="bg-white py-16 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Allen Bradely
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/allenbradely/ab1.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/allenbradely/ab2.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/allenbradely/ab3.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/allenbradely/ab4.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            />
          </div>
          <Link href={`/products/allen-bradley/`} className="text-sm font-semibold leading-6 text-indigo-600">
            more products <span aria-hidden="true">→</span>
          </Link >
        </div>
      </div>

      <div className="bg-white py-16 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Omron
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/omron/am1.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/omron/am2.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/omron/am3.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/omron/am4.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            />
          </div>
          <Link href={`/products/omron/`} className="text-sm font-semibold leading-6 text-indigo-600">
            more products <span aria-hidden="true">→</span>
          </Link >
        </div>
      </div>

      <div className="bg-white py-16 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Fuji
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="guji/guji01.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="guji/guji02.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="guji/guji03.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="guji/guji04.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            />
          </div>
          <Link href={`/products/fuji/`} className="text-sm font-semibold leading-6 text-indigo-600">
            more products <span aria-hidden="true">→</span>
          </Link >
        </div>
      </div>

      <div className="bg-white py-16 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Delta
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="delta/delta01.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="delta/delta02.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="delta/delta03.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="delta/delta04.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            />
          </div>
          <Link href={`/products/delta/`} className="text-sm font-semibold leading-6 text-indigo-600">
            more products <span aria-hidden="true">→</span>
          </Link >
        </div>
      </div>

      <div className="bg-white py-16 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          schenider
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="schenider/schenider01.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="schenider/schenider02.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="schenider/schenider03.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="schenider/schenider04.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            />
          </div>
          <Link href={`/products/schenider/`} className="text-sm font-semibold leading-6 text-indigo-600">
            more products <span aria-hidden="true">→</span>
          </Link >
        </div>
      </div>
    </div>
  )
}
