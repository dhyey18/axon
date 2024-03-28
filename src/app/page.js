"use client";
import { useEffect, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
// import { Contact } from '../../components/contactUs/page.js'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import { Switch } from '@headlessui/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import "../styles/index.css";

import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { Router } from 'next/router';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function handelSubmit(e) {
  console.log(e, "dp");

}



const navigation = [
  { name: 'Product', href: 'products' },
  { name: 'About US', href: 'AboutUs' },
  // { name: 'Marketplace', href: '#'/
]




const stats2 = [
  { name: 'Offices Accross India', value: '2' },
  { name: 'Full-time colleagues', value: '6' },
  { name: 'Available', value: '24X7' },
]


export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const openModal = () => {
    setIsLoading(true);
    setIsModalOpen(true);
  };


  const handleTabClick = () => {
    const tabMain = document.querySelector(".tabs-main");
    const tabHeaderList = document.querySelectorAll(
      ".tabs-main .tab-header ul li"
    );
    const tabContentList = document.querySelectorAll(
      ".tabs-main .tab-content .tab-inner"
    );

    tabMain.addEventListener("click", (event) => {
      let getCurrentHeadingTab = event.target.dataset.tab;

      if (getCurrentHeadingTab) {
        tabHeaderList.forEach((headerList) => {
          headerList.classList.remove("active");
        });
        event.target.classList.add("active");

        tabContentList.forEach((contentList) => {
          contentList.classList.remove("active");
        });

        let getCurrentContentTab = document.querySelector(
          `#${getCurrentHeadingTab}`
        );
        getCurrentContentTab.classList.add("active");
      }
    });
  };

  const handleItemClick = () => {
    const getDiscoverWrapper = document.querySelector(".discover-main");
    const getDiscoverBox = getDiscoverWrapper.querySelectorAll(
      ".discover-main .discover-box"
    );

    getDiscoverBox.forEach((butList) => {
      butList.addEventListener("click", (e) => {
        let getCurrentButList = e.target;
        if (getCurrentButList) {
          getDiscoverBox.forEach((butListInner) => {
            butListInner.classList.remove("active");
          });
          getCurrentButList.classList.add("active");
        }
      });
    });
  };

  useEffect(() => {
    handleTabClick();
    // handleItemClick();
  }, []);

  return (
    <>

      <div className="bg-white">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav className="flex items-center justify-between lg:px-8 bg-gray-50 fixed w-full sm:h-20" aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-20 w-auto"
                  src="/axon1.png"
                  alt=""
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            {/* <div className="p-4">
              {products.map((item) => (
                <div
                  key={item.name}
                  className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                >
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                  </div>
                  <div className="flex-auto">
                    <a href={item.href} className="block font-semibold text-gray-900">
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div> */}
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (

                <Link key={item.name} href={`/${item.href}`} className="text-sm font-semibold leading-6 text-gray-900">
                  {item.name}
                </Link >

              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Log in <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>
          {/* <Dialog as="div" className="lg:hidden"  open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src="/axon1.png"
                    alt=""
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog> */}
        </header>

        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Announcing our next round of funding.{' '}
                <a href="#" className="font-semibold text-indigo-600">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                INDUSTRIAL AUTOMATION SOLUTION
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Effortlessly automate your industry with us.
              </p>
              <p>
                Achieve your automation goals with us.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Contact Us
                </a>
                <a href="/products" className="text-sm font-semibold leading-6 text-gray-900">
                  more products <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>




      </div>



      {/* ////////////////////// */}

      <div className="bg-gray-100 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Trusted by the world’s most innovative teams
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/Siemens.png"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/Allen-Bradley.png"
              alt="Reform"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/ABB.png"
              alt="Tuple"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="/Mitsubishi.png"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="/OMRON.png"
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Our Products
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/products/p1.jpeg"
              alt="Transistor"
              onClick={() => { Router.push('/products/siemens/') }}
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/products/p2.jpeg"
              alt="Reform"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full object-contain lg:col-span-1"
              src="/products/p3.jpeg"
              alt="Tuple"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="/products/p4.jpeg"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            {/* <img
              className="col-span-2 col-start-2 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="/products/p5.jpeg"
              alt="Statamic"
              width={158}
              height={48}
            /> */}
          </div>
          <Link href={`/products`} className="text-sm font-semibold leading-6 text-indigo-600">
            more products <span aria-hidden="true">→</span>
          </Link >
        </div>
      </div>

      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Work with us</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Welcome to Axon - Your Premier Destination for Automation Production Solutions!

              At Axon, we take pride in being your trusted partner in automation production. With a dedication to excellence and a passion for innovation, we offer a wide range of cutting-edge solutions tailored to meet your unique production needs.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats2.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* <div className="bg-[#635BFF] bg-middle-shade 2xl:px-0 px-5">
        <div className="flex items-center max-w-[1125px] mx-auto pt-[120px] pb-20">
          <div className="lg:w-3/5 lg:text-left text-center">
            <h3 className="lg:text-[30px] md:text-[28px] text-2xl font-semibold text-[#F6F7FB] pb-2 leading-[1.4]">
              Elevate Your Customer Engagement with AI-Powered Insights.
            </h3>
            <p className="text-[#DDD] text-[20px] font-light pb-5 mb-5">
              Shaping the future of business growth with data driven
              decisions.
            </p>
            <div className="lg:text-left text-center">
              <span
                onClick={openModal}
                className="bg-[#18164C] mt-10 text-xl rounded-[100px] whitespace-nowrap py-4 px-7 cursor-pointer text-white font-normal border-4"
              >
                Get A Demo
              </span>
            </div>
          </div>
        </div>
      </div> */}

      {/* footer */}

      {/*  */}


      {/* How We do Section */}
      <div className="max-w-[1125px] mx-auto mt-20 lg:pb-28 md:pb-16 pb-10">
        <h2 className="text-[#070127] xl:text-5xl md:text-[40px] text-[28px] font-semibold lg:pb-12 pb-7 text-center">
          What we offer
        </h2>
        <div className="tabs-main">
          <div className="tab-header">
            <ul>
              <li className="active" data-tab="Tfirst">
                IOT
              </li>
              <li data-tab="Tsecond">Automation</li>
              <li data-tab="Tthird">Smart City</li>
            </ul>
          </div>
          <div className="tab-content">
            <div className="tab-inner active" id="Tfirst">
              <div className="flex lg:flex-row flex-col-reverse items-center justify-between bg-[#FAEBC0] rounded-[26px]">
                <div className="xl:w-1/2 lg:w-[45%] pr-7 py-7 lg:pl-14 pl-7">
                  <h4 className="text-[#010101] xl:text-4xl md:text-2.5xl text-2xl lg:font-semibold font-medium  leading-[1.3] mb-12 color-shade yellow-shade">
                    Empowering Connectivity, Welcome to IoT
                  </h4>

                  <p className="text-[#010101] md:text-xl text-lg pb-3.5">
                    <span className="font-semibold">IIoT:</span>{" "}
                    The next big revolution for digitalization of the factories and processes is IIoT or Industrie 4.0. Every business has enormous possibilities of improving the processes and optimising resources. IIoT opens a wide spectrum of opportunities for all.
                  </p>

                  <a
                    className="flex items-center gap-x-2.5 group transition duration-500"
                    href="/products/siemens"
                  >
                    <span className="text-[#635BFF] font-medium xl:text-lg border-b text-base">
                      More products
                    </span>
                    <img
                      src="/rba.svg"
                      alt="arrow"
                      className="object-contain group-hover:translate-x-1.5 transition duration-500 w-5 h-5"
                    />
                  </a>
                </div>
                <div className="xl:w-1/2 lg:w-[55%] pt-7 pb-7">
                  {/* <img
                    className="ml-auto rounded-br-[26px] lg:object-none lg:w-auto w-[400px] object-contain lg:h-[480px] pr-3"
                    src="/d6.jpg"
                    alt="analyse banner"
                  /> */}
                  <img
                    className="ml-auto rounded-br-[26px] lg:w-auto w-[400px] object-cover lg:h-[470px] pt-4"
                    src="/d6.jpg"
                    alt="convert banner"
                  />
                </div>
              </div>
            </div>
            <div className="tab-inner" id="Tsecond">
              <div className="flex lg:flex-row flex-col-reverse items-center justify-between bg-[#C2E3FB] rounded-[26px]">
                <div className="xl:w-1/2 lg:w-[45%] pr-7 py-7 lg:pl-14 pl-7">
                  <h4 className="text-[#010101] xl:text-4xl md:text-2.5xl text-2xl lg:font-semibold font-medium leading-[1.3] mb-12 color-shade blue-shade">
                    Unleash the Power Automation
                  </h4>
                  <p className="text-[#010101] md:text-xl text-lg pb-3.5">
                    <span className="font-semibold">us:</span> We are one of the leading system integrator in the country. Multi locational presence allows us to cater to various industrial verticals/domains.
                  </p>
                  <p className="text-[#010101] md:text-xl text-lg pb-3.5">
                    <span className="font-semibold">Solution:</span> We are authorized Solution partner of Siemens Automation product range.
                  </p>
                  <a
                    className="flex items-center gap-x-2.5 group transition duration-500"
                    href="/products/mitsubishi"
                  >
                    <span className="text-[#635BFF] font-medium xl:text-lg border-b text-base">
                      More products
                    </span>
                    <img
                      src="/rba.svg"
                      alt="arrow"
                      className="object-contain group-hover:translate-x-1.5 transition duration-500 w-5 h-5"
                    />
                  </a>
                </div>
                <div className="xl:w-1/2 lg:w-[55%] pt-6 pb-4">
                  {/* <img
                    className="ml-auto rounded-br-[26px] lg:object-none lg:w-auto w-[280px] object-contain"
                    src="/d1.jpg"
                    alt="connect banner"
                  /> */}
                  <img
                    className="ml-auto rounded-br-[26px] lg:w-auto w-[400px] object-cover lg:h-[470px]"
                    src="/p02.jpg"
                    alt="convert banner"
                  />
                </div>
              </div>
            </div>

            <div className="tab-inner" id="Tthird">
              <div className="flex lg:flex-row flex-col-reverse items-center justify-between bg-[#F5CDFF] rounded-[26px]">
                <div className="xl:w-1/2 lg:w-[45%] pr-7 py-7 lg:pl-14 pl-7">
                  <h4 className="text-[#010101] xl:text-4xl md:text-2.5xl text-2xl lg:font-semibold font-medium  leading-[1.3] mb-12 color-shade pink-shade">
                    Urban Living: Welcome to the Era of Smart Cities
                  </h4>
                  <p className="text-[#010101] md:text-xl text-lg pb-3.5">
                    <span className="font-semibold">
                      smart :
                    </span>{" "}
                    At AXON Automation, we are strategically positioned to leverage our expertise in automation to elevate living standards in urban and rural areas across India.
                  </p>
                  <p className="text-[#010101] md:text-xl text-lg pb-3.5">
                    <span className="font-semibold">
                      Electrical :
                    </span>{" "}
                    Our Electrical Systems, Automation and Drive Solutions are a benchmark in all smart city projects.
                  </p>
                  <a
                    className="flex items-center gap-x-2.5 group transition duration-500"
                    href="/products/allen-bradley"
                  >
                    <span className="text-[#635BFF] font-medium xl:text-lg border-b text-base">
                      More products
                    </span>
                    <img
                      src="/rba.svg"
                      alt="arrow"
                      className="object-contain group-hover:translate-x-1.5 transition duration-500 w-5 h-5"
                    />
                  </a>
                </div>
                <div className="xl:w-1/2 lg:w-[55%] pt-6 pb-4">
                  <img
                    className="ml-auto rounded-br-[26px] lg:w-auto w-[400px] object-cover lg:h-[470px] pb-8 pt-4"
                    src="/d3.jpg"
                    alt="convert banner"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* contact */}

      <div className="isolate bg-white px-6 py-24  sm:py-32 lg:px-8">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Reach out to our sales department for inquiries and assistance. We're here to help you navigate through your decisions.
          </p>
        </div>
        <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20" onSubmit={handelSubmit}>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                Company
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                Phone number
              </label>
              <div className="relative mt-2.5">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  >
                    <option>IN</option>
                    <option>US</option>
                    <option>CAD</option>
                  </select>
                  <ChevronDownIcon
                    className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
            </div>
            <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <Switch
                  checked={agreed}
                  onChange={setAgreed}
                  className={classNames(
                    agreed ? 'bg-indigo-600' : 'bg-gray-200',
                    'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  )}
                >
                  <span className="sr-only">Agree to policies</span>
                  <span
                    aria-hidden="true"
                    className={classNames(
                      agreed ? 'translate-x-3.5' : 'translate-x-0',
                      'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                    )}
                  />
                </Switch>
              </div>
              <Switch.Label className="text-sm leading-6 text-gray-600">
                By selecting this, you agree to our{' '}
                <a href="#" className="font-semibold text-indigo-600">
                  privacy&nbsp;policy
                </a>
                .
              </Switch.Label>
            </Switch.Group>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Let's talk
            </button>
          </div>
        </form>
      </div>


      <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Contact Details</h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                Call us: 9924428852 , 9328152863
                <br></br>
                Email Us: axontechnology28@gmail.com
              </p>
              <div className="mt-6 flex max-w-md gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <CalendarDaysIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <dt className="mt-4 font-semibold text-white">Address</dt>
                <dd className="mt-2 leading-7 text-gray-400">
                  B-105, Akshardham app, opp sai mandir, zadeshwar road , Bharuch , Gujarat(392011)
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <HandRaisedIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <dt className="mt-4 font-semibold text-white">Buisness Details</dt>
                <dd className="mt-2 leading-7 text-gray-400">
                  GST no: 24ARVPP1139M1Z7
                  <br></br>
                  Trade Name: AXON AUTOMATION
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>

    </>
  )
}
