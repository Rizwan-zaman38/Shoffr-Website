import React, { useState } from 'react'
import Question from '../components/Question'
import { Data } from '../constants/variable'

const FAQS = () => {
  const [showselect, setshowselect] = useState(null);

  const showAnswer = (index) => {
    setshowselect(index);
  }
  
  return (
    <section>
      <div className='py-10 bg-black border border-[#D4C5A0]'>
        <div className='w-[80%] py-10 px-3 mx-auto'>
          <div>
            <h1 className='font-Roboto text-5xl text-center max-sm:text-4xl py-2 text-[#D4C5A0]'>Frequently Asked Questions</h1>
          </div>
          <div className='flex text-white justify-start my-8 gap-3 flex-wrap'>
            <button className='flex gap-3 font-Roboto text-black bg-[#D4C5A0] border border-[#D4C5A0] py-3 px-6 hover:bg-slate-500 cursor-pointer rounded-3xl'>General</button>
            <button className='flex gap-3 font-Roboto border border-[#D4C5A0] py-3 px-6 hover:bg-slate-500 cursor-pointer rounded-3xl'>Payment</button>
            <button className='flex gap-3 font-Roboto border border-[#D4C5A0] py-3 px-6 hover:bg-slate-500 cursor-pointer rounded-3xl'>Booking</button>
            <button className='flex gap-3 font-Roboto border border-[#D4C5A0] py-3 px-6 hover:bg-slate-500 cursor-pointer rounded-3xl'>Airport Transfers</button>
            <button className='flex gap-3 font-Roboto border border-[#D4C5A0] py-3 px-6 hover:bg-slate-500 cursor-pointer rounded-3xl'>City Tour</button>
          </div>
          <div>
            {
              Data.map((daata,index)=>{
                return <Question key={daata.id} data={daata} onClick={()=>showAnswer(index)} isOpen={showselect===index}/>
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQS