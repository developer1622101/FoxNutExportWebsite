'use client'
import React from 'react'
import { useState } from 'react'
import axios from 'axios'

import OTP from '../../app/components/otp'

const Page = () => {
    const [phone, setPhone] = useState<string>('+91')

    const [isError, setIsError] = useState('')



    const sendVerificationCode = async () => {
        const response = await axios.post('/api/authOTP/', { phoneNumber: phone })
        console.log(response)
    }

    return (
        <div className=''>
            <div className='flex justify-center items-center  h-[90vh] mx-[5%] '>
                <div className=' rounded-xl p-2  bg-[#E9EAF2] flex flex-col gap-16 justify-between  '>
                    <div className=''>
                        <div className='text-2xl font-semibold text-black text-center'>
                            Welcome to <span className='text-[#3F6EEA]'>YKDevoutExports</span>
                        </div>
                        <div className='text-xs font-bold text-center '>
                            Signup to get exclusive products and services!
                        </div>
                    </div>
                    <div className='text-lg  text-black text-center'>
                        {' '}
                        Enter Phone Number{' '}
                    </div>
                    <div className=''>
                        <OTP setPhone={setPhone} />
                    </div>
                    <br />
                    <button
                        onClick={() => {
                            sendVerificationCode()
                        }}
                        className=' text-white  px-4 py-2 rounded-md w-full  text-xs'
                    >
                        {' '}
                        Get Verification code{' '}
                    </button>
                </div>
            </div>

            {isError && (
                <div className='w-[50%] p-2 rounded-md bg-red-500 my-2  text-white mx-[25%]'>
                    {isError}
                </div>
            )}
        </div>
    )
}

export default Page