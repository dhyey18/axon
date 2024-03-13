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




export default function Example() {
  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-4xl font-semibold leading-7 text-indigo-600">Schenider</h2>
          </div>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/schenider/schenider1.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/schenider/schenider02.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            /><img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/schenider/schenider3.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            /><img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/schenider/schenider4.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            /><img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/schenider/schenider5.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            /><img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/schenider/schenider6.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            /><img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/schenider/schenider04.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/schenider/schenider8.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            /><img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/schenider/schenider9.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/schenider/schenider10.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            /><img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/schenider/schenider11.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/schenider/schenider12.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            /><img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/schenider/schenider13.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/schenider/schenider14.jpeg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/schenider/schenider15.jpeg"
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
