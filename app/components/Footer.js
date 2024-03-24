import React from 'react'
import stack from  '../../public/assets/icons/stack.png';
import brand_logo from '../../public/assets/images/brand_logo.png'
import emailArrow from '../../public/assets/icons/emailArrow.png'
import Image from 'next/image';

export default function Footer() {
  return (
    <section className="pt-20 pb-5">
        <div>
          <div className="md:flex sm:grid-cols-2 grid grid-cols-1 justify-center ring-1 ring-neutral-800 ">
            <div className="flex px-5  border-r border-neutral-800 py-10 space-x-5 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                </svg>
                <span >FAST DELIVERY</span>
            </div>
            <div className="flex px-5 space-x-5 ring-1  ring-neutral-800 py-10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
              </svg>

              <span>FREE RETURNS</span>
            </div>
            <div className="flex px-5 space-x-5 border-b  border-neutral-800 py-10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>

              <span>SECURE CHECKOUT</span>
            </div>
            <div className="flex px-5 space-x-5 border-l  border-neutral-800 py-10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
              </svg>

              <span>ORDER TRACKING</span>
            </div>
          </div>

          <div className="footer sm:grid sm:grid-cols-2 space-y-5 sm:space-y-3 md:space-y-0 px-10 py-20 border-b border-neutral-800">
            <div className="">
              <Image 
                  src={brand_logo}
                  alt='brand logo'
              />
              <div className="text-xs py-5">
                Sed ut perspiciatis unde omnis iste natus <br /> error sit voluptatem accusantium
              </div>
            </div>
            <div className="gap-1">
              <span className="">SUPPORT</span>
              <div className="text-xs py-3 space-y-2">
                <p>Help & Contact Us</p>
                <p>Return & Refunds</p>
                <p>Online Stores</p>
                <p>Privacy Policy</p>
              </div>
            </div>
            <div className="">
              <span>COMPANY</span>
              <div className="py-3"><Image src={stack} /></div>
            </div>
            <div>
              <span>LOCATIONS</span>
              <div className="text-xs space-y-3 py-3">
                <p>Vienna, Hansalgasse, Austria</p>
                <p>Berlin, Buschallee, Germany</p>
                <p>The Piazza, London, UK</p>
              </div>
            </div>
            <div className="space-y-5">
                <span>Get the Latest News</span>
                <div className="flex ">
                <span className="flex border-b text-black border-neutral-900 pb-3">
                  <input className="bg-inherit outline-none text-xs" placeholder="Email address" />
                  <span className="px-3 sm:px-5 md:px-14"></span>
                  <Image 
                  src={emailArrow}
                  width={25}
                  height={25}
                />
                </span>
              </div>
            </div>
          </div>
          <div className="sm:flex items-center py-2 justify-between px-10 text-xs">
              <div> <span>&copy;</span> 2023 ALL RIGHTS RESERVED</div>
              <div> ENG | FRA | SKR </div>
          </div>
        </div>
    </section>
  )
}
