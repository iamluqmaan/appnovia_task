import Image from 'next/image'
import brand_logo from '../../public/assets/images/brand_logo.png'
import userIcon from '../../public/assets/icons/user.png'
import remark from '../../public/assets/icons/svg.png'
import searchIcon from '../../public/assets/icons/search.png'
import cartBag from '../../public/assets/icons/cart.png'
import React from 'react'

export default function Header() {
  return (
    <nav className='flex justify-between mx-10 py-5 border-b border-gray-600 border-spacing-3'>
        <div className='flex space-x-10' >
            <Image 
                src={brand_logo}
                alt='brand logo'
            />
            <div className='hidden md:flex space-x-5 text-xs uppercase font-sans tracking-wide font-semibold'>
                <div>home</div>
                <div>pages</div>
                <div>shop</div>
                <div>portfolio</div>
                <div>blog</div>
            </div>
        </div>
        <div className=' xl:bg-white flex items-end justify-evenly space-x-5 text-xs uppercase font-sans tracking-wide font-semibold'>
            <div className='hidden md:flex space-x-2'>
                <span>search</span>
                <Image src={searchIcon} />
               
            </div>
            <div className=' flex space-x-1'>
                <span>cart </span>
                <Image src={cartBag} />
                <span> 0 </span>

            </div>
            <div className='hidden md:flex space-x-2'>
                <Image src={remark} />
               <span> 0 </span>
            </div>
            <div>
                <Image src={userIcon} />
            </div>
        </div>
    </nav>
  )
}
