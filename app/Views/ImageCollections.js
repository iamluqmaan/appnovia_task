import React from 'react'
import rectangle from  '../../public/assets/icons/svg.png';
import eye from  '../../public/assets/icons/eye.png';
import bag from  '../../public/assets/icons/bag.png';
import Image from "next/image";


export default function ImageCollections() {
  return (
    <div className='max-w-full'>
      {/* IMAGE COLLECTION SECTION */}
      <section >
        <div className="flex space-x-5 md:justify-between px-10 py-3">
          <div className="space-x-5 text-xs">
            <span>All PRODUCTS</span>
            <span className='hidden sm:visible'> LIFESTYLE</span>
            <span className='hidden sm:visible'>BRAND</span>
            <span className='hidden sm:visible'>OUTWARES</span>
          </div>
          <div className="space-x-2 text-xs flex">
            <span>FILTER</span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </span>
          </div>
        </div>

        {/* FIRST IMAGE COLLECTION */}
        <div className="px-10 md:flex grid grid-cols-1 sm:grid-cols-2">
          <div>
            <div className="first md:w-[23vw] w-full px-2 py-2 flex justify-between">
              <div className=""><p className="bg-white px-1 ring-1 ring-neutral-400 text-xs">New</p></div>
              <div className="flex flex-col items-center space-y-2">
                <Image
                  src={rectangle}
                />
                <Image
                  src={eye}
                />
              </div>
            </div>
            <div className="flex justify-between ring-1 ring-neutral-700">
                  <div className="text-xs px-5 py-3">
                    <p>BLACK JACKET</p>
                    <p>$350.00</p>
                  </div>
                  <div className="ring-1 ring-neutral-700 px-5 flex items-center">
                    <span>
                      <Image
                        src={bag} 
                      />
                    </span>
                  </div>
              </div>
          </div>    
          <div>
            <div className="second  md:w-[23vw] w-full px-2 py-2 flex justify-between">
              <div className=""></div>
              <div className="flex flex-col items-center space-y-2">
                <Image
                  src={rectangle}
                />
                <Image
                  src={eye}
                />
              </div>
            </div>
            <div className="flex justify-between ring-1 ring-neutral-700">
                  <div className="text-xs px-5 py-3">
                    <p>LEATHER JACKET</p>
                    <p>$300.00</p>
                  </div>
                  <div className="ring-1 ring-neutral-700 px-5 flex items-center">
                    <span>
                      <Image
                        src={bag} 
                      />
                    </span>
                  </div>
            </div>
          </div> 
          <div>
            <div className="third md:w-[23vw] w-full px-2 py-2 flex justify-between">
              <div className=""><p className="bg-white px-1 ring-1 ring-neutral-400 text-xs">Sale</p></div>
              <div className="flex flex-col items-center space-y-2">
                <Image
                  src={rectangle}
                />
                <Image
                  src={eye}
                />
              </div>
            </div>
            <div className="flex justify-between ring-1 ring-neutral-700">
                  <div className="text-xs  px-5 py-3">
                    <p>BLACK OUTFIT</p>
                    <p>$220.00<span className="px-1">$180.00</span></p>
                  </div>
                  <div className="ring-1 ring-neutral-700 px-5 flex items-center">
                    <span>
                      <Image
                        src={bag} 
                      />
                    </span>
                  </div>
            </div>
          </div>
          <div>
            <div className="fourth md:w-[23vw] w-full px-2 py-2 flex justify-between">
              <div className=""></div>
              <div className="flex flex-col items-center space-y-2">
                <Image
                  src={rectangle}
                />
                <Image
                  src={eye}
                />
              </div>
            </div>
            <div className="flex justify-between ring-1 ring-neutral-700">
                  <div className="text-xs  px-5 py-3">
                    <p>T-SHIRT</p>
                    <p>$120.00</p>
                  </div>
                  <div className="ring-1 ring-neutral-700 px-5 flex items-center">
                    <span>
                      <Image
                        src={bag} 
                      />
                    </span>
                  </div>
            </div>
          </div>  
        </div>

        {/* SECOND IMAGE COLLECTIONS */}
        <div className="px-10 md:flex grid grid-cols-1 sm:grid-cols-2">
          <div>
            <div className="fifth md:w-[23vw] w-full px-2 py-2 flex justify-between">
              <div className=""></div>
              <div className="flex flex-col items-center space-y-2">
                <Image
                  src={rectangle}
                />
                <Image
                  src={eye}
                />
              </div>
            </div>
            <div className="flex justify-between ring-1 ring-neutral-700">
                  <div className="text-xs  px-5 py-3">
                    <p>BLACK VEST</p>
                    <p>$85.00</p>
                  </div>
                  <div className="ring-1 ring-neutral-700 px-5 flex items-center">
                    <span>
                      <Image
                        src={bag} 
                      />
                    </span>
                  </div>
              </div>
          </div>    
          <div>
            <div className="sixth md:w-[23vw] w-full px-2 py-2 flex justify-between">
              <div className=""></div>
              <div className="flex flex-col items-center space-y-2">
                <Image
                  src={rectangle}
                />
                <Image
                  src={eye}
                />
              </div>
            </div>
            <div className="flex justify-between ring-1 ring-neutral-700">
                  <div className="text-xs  px-5 py-3">
                    <p>LEATHER JACKET</p>
                    <p>$300.00</p>
                  </div>
                  <div className="ring-1 ring-neutral-700 px-5 flex items-center">
                    <span>
                      <Image
                        src={bag} 
                      />
                    </span>
                  </div>
            </div>
          </div> 
          <div>
            <div className="seventh md:w-[23vw] w-full px-2 py-2 flex justify-between">
              <div className=""></div>
              <div className="flex flex-col items-center space-y-2">
                <Image
                  src={rectangle}
                />
                <Image
                  src={eye}
                />
              </div>
            </div>
            <div className="flex justify-between ring-1 ring-neutral-700">
                  <div className="text-xs  px-5 py-3">
                    <p>BEIGE T-SHIRT</p>
                    <p>$60.00</p>
                  </div>
                  <div className="ring-1 ring-neutral-700 px-5 flex items-center">
                    <span>
                      <Image
                        src={bag} 
                      />
                    </span>
                  </div>
            </div>
          </div>
          <div>
            <div className="eighth md:w-[23vw] w-full h-full md:h-[22vw] px-2 py-2 flex justify-between">
              <div className=""></div>
              <div className="flex flex-col items-center space-y-2">
                <Image
                  src={rectangle}
                />
                <Image
                  src={eye}
                />
              </div>
            </div>
            <div className="flex justify-between ring-1 ring-neutral-700">
                  <div className="text-xs  px-5 py-3">
                    <p>BLACK HAT</p>
                    <p>$45.00</p>
                  </div>
                  <div className="ring-1 ring-neutral-700 px-5 flex items-center">
                    <span>
                      <Image
                        src={bag} 
                      />
                    </span>
                  </div>
            </div>
          </div>  
        </div>  
      </section>
      {/* END OF IMAGE COLLECTION SECTION */}

    </div>
  )
}
