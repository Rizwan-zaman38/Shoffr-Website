import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='py-10 max-md:py-5'>
        <div className='flex justify-between items-center px-10 max-md:flex-col max-md:px-5 max-md:gap-5'>
          <img src="../src/assets/images/Company Logo.png" alt="logo" />
          <div className=' md:flex justify-between items-center'>
            <ul className='flex justify-between items-center font-Roboto mr-2'>
              <li className='hover:bg-slate-100 py-2 px-4 rounded-1xl'><a href="">Rides</a></li>
              <li className='hover:bg-slate-100 py-2 px-4 rounded-1xl'><a href="">Services</a></li>
              <li className='hover:bg-slate-100 py-2 px-4 rounded-1xl'><a href="">About</a></li>
              <li className='hover:bg-slate-100 py-2 px-4 rounded-1xl'><a href="">More</a></li>
            </ul>
          </div>
          <div className='flex gap-2'>
            <img src="../src/assets/icons/Facebook.png" alt="facebook" className='cursor-pointer'/>
            <img src="../src/assets/icons/instagram.png" alt="facebook" className='cursor-pointer'/>
            <img src="../src/assets/icons/X.png" alt="facebook" className='cursor-pointer'/>
            <img src="../src/assets/icons/LinkedIn.png" alt="facebook" className='cursor-pointer'/>
            <img src="../src/assets/icons/Youtube.png" alt="facebook" className='cursor-pointer'/>
          </div>
        </div>
        <div className='flex justify-center items-center my-20 text-[#D4C5A0] max-md:my-10'>
          <hr className='w-[95%]'/>
        </div>
        <div className='flex md:flex justify-center items-center'>
            <ul className='flex justify-between items-center font-Roboto mr-2 max-md:flex-col'>
              <li className='hover:bg-slate-100 py-2 px-4 rounded-1xl'><a href="">© 2024 Shoffr. All rights reserved.</a></li>
              <li className='hover:bg-slate-100 py-2 px-4 rounded-1xl'><a href="">Privacy policy</a></li>
              <li className='hover:bg-slate-100 py-2 px-4 rounded-1xl'><a href="">Terms of service</a></li>
              <li className='hover:bg-slate-100 py-2 px-4 rounded-1xl'><a href="">Cookies settings</a></li>
            </ul>
          </div>
      </div>
    </footer>
  )
}

export default Footer