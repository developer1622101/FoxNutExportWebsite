'use client'

import React, { useState } from 'react'
import Products from './lib/Products'
import ProductCard from './components/ProductCard'
import { useSearchParams } from 'next/navigation'
import axios from 'axios'
import url from '../url'

const page = () => {



  let current1 = 'Handpicked'

  const options = ['Handpicked', 'Semi Handpicked', 'Without Handpicked'];

  const searchParams = useSearchParams();

  const optionNumber = searchParams?.get('option');
  console.log(typeof (optionNumber));
  if (optionNumber && typeof (optionNumber) === 'string')
    current1 = options[parseInt(optionNumber)];

  console.log(current1);

  const [current, setCurrent] = useState(current1);

  let current_ = current
  if (current === 'Without Handpicked') {
    current_ = 'Machine-Picked'
  }

  return (
    <>
      <div className='text-lg flex justify-between bg-white py-2 fixed top-[45px] w-full px-2 '>
        {current === 'Handpicked' ? <button className='rounded-2xl border-2 border-black bg-white text-black  px-2 font-bold' onClick={() => { setCurrent('Handpicked') }}> Handpicked  </button> :
          <button className='bg-black text-white rounded-2xl px-2 font-bold' onClick={() => { setCurrent('Handpicked') }}> Handpicked  </button>
        }
        {current === 'Semi Handpicked' ? <button className='rounded-2xl border-2 border-black bg-white text-black  px-2 font-bold' onClick={() => { setCurrent('Semi Handpicked') }}> Semi-Handpicked  </button> :
          <button className='bg-black text-white rounded-2xl px-2 font-bold' onClick={() => setCurrent('Semi Handpicked')}>  Semi-Handpicked  </button>}
        {current === 'Without Handpicked' ? <button className='rounded-2xl border-2 border-black bg-white text-black  px-2 font-bold' onClick={() => { setCurrent('Without Handpicked') }}> Machine-Handpicked  </button> :
          <button className='bg-black text-white rounded-2xl px-2 font-bold' onClick={() => setCurrent('Without Handpicked')}>  Machine-Handpicked  </button>}
      </div>
      <div className='mt-[100px] py-2 px-2' >
        <div className='text-4xl font-bold mb-4 text-center'>
          {current_ ? `${current_} Makahana` : 'Invalid query parameters'}     </div>
        <div className='grid grid-cols-2 gap-2 '>
          {
            Products.map((element, index) =>
              element.quality == current &&
              (<ProductCard key={index} element={element} />)
            )
          }
        </div>

        <div onClick={async () => await axios.post(`${url}/api/auth/signin`, { email: 'dmmd', password: 'fff' })}>


          Clice
        </div>
      </div>
    </>
  )
}

export default page 