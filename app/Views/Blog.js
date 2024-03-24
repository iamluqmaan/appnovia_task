import React from 'react'

export default function Blog() {
  return (
    <div>
      <section className="py-20 space-y-14">
        <div className="text-center space-y-4">
          <span className="text-xs md:[2.5vw] font-medium"> Read Our Blog Posts</span>
          <p className="text-xs md:text-sm tracking-wide">Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eiusmod.</p>
        </div>
        <div className="sm:flex space-y-5 sm:space-y-0 px-10 space-x-8 justify-center">
          <div className=''>
            <div className="border-b border-neutral-950">
              <div className="blogFirst w-full sm:bg-contain md:w-[30vw] px-2 py-2 flex justify-between">
                    <div className=""><p className="bg-white px-1 ring-1 ring-neutral-400 text-xs">September 29, 2022</p></div>
              </div>
              <div className="space-x-2 text-xs text-center py-2">
                <span>FASHION</span>
                <span className="bg-black"> </span>
                <span>INSPIRATION</span>
              </div>
            </div>
            <div className="text-center space-y-1">
              <span className="pt-1 text-xs sm:text-sm">Top 10 Winter Essentials 2022 You Should</span> 
              <p className="text-xs sm:text-sm">Try</p>
              <div className="text-xs text-neutral-700 underline tracking-wide"><span className="cursor-pointer">Read more</span></div>
            </div>
          </div>
          <div>
            <div className="border-b border-neutral-950">
              <div className="blogSecond w-full sm:bg-contain sm:w-[30vw] px-2 py-2 flex justify-between">
                    <div className=""><p className="bg-white px-1 ring-1 ring-neutral-400 text-xs">September 29, 2022</p></div>
              </div>
              <div className="space-x-2 text-xs text-center py-2">
                <span>FASHION</span>
                <span className="bg-black"> </span>
                <span>INSPIRATION</span>
              </div>
            </div>
            <div className="text-center space-y-1">
              <span className="pt-1 text-xs sm:text-sm">The Complete Communication Skill Master</span> 
              <p className="text-xs sm:text-sm">Class For Work</p>
              <div className="text-xs text-neutral-700 underline tracking-wide"><span className="cursor-pointer">Read more</span></div>
            </div>
          </div>
          <div>
            <div className="border-b w-full border-neutral-950">
              <div className="blogThird w-full sm:bg-contain md:w-[30vw]  px-2 py-2 flex justify-between">
                    <div className=""><p className="bg-white px-1 ring-1 ring-neutral-400 text-xs">September 29, 2022</p></div>
              </div>
              <div className="space-x-2 text-xs text-center py-2">
                <span>FASHION</span>
                <span className="bg-black"> </span>
                <span>INSPIRATION</span>
              </div>
            </div>
            <div className="text-center space-y-1">
              <span className="pt-1 text-xs sm:text-sm">Premium Consultant Course For You</span> 
              <div className="text-xs text-neutral-700 underline tracking-wide "><span className="cursor-pointer">Read more</span></div>
            </div>
          </div>
         
        </div>
      </section>
    </div>
  )
}
