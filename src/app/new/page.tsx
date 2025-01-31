'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const Page = () => {

    const router = useRouter();

    const [imageVisible, setImageVisible] = useState(false);

    if (!imageVisible) {

        return (
            <>
                <div className='p-2 flex flex-col gap-8  text-xs sm:text-sm lg:text-md xl:text-lg' >
                    <div className='text-4xl lg:text-6xl xl:text-8xl font-bold font-mono  text-custom-heading' > Premium Makhana for Local & Global Markets  </div>
                    <div className='border-[1px] rounded-md bg-white p-2'>
                        <div className='border-black '>
                            <div className='text-2xl font-bold  text-black mb-2   lg:text-4xl  xl:text-6xl  text-custom-subheading'> Products </div>
                            <div className='flex flex-col gap-4  w-full items-center md:grid md:grid-cols-2 md:justify-items-start  md:items-start lg:grid   lg:grid-cols-3'>
                                <div className='bg-[#FFF5F0] border-[1px] border-[1px] p-2 rounded-md cursor-pointer w-full flex flex-col gap-2 sm:gap-4   ' onClick={() => router.replace('/app?option=0')}    >
                                    <div className='text-custom-subheading font-bold  text-lg  w-max '>  Handpicked  Makhana </div>
                                    <div className=' font-bold text-xs '> Carefully selected for superior quality, handpicked makhana offers unmatched taste, purity, and freshness, ensuring the best snacking and health  experience.    </div>
                                    <Image src='/handpickedMakhana.jpeg' className='rounded-md' width={600} height={400} alt='' />
                                </div>
                                <div className='bg-[#F0F8FF] border-[1px] p-2   rounded-md cursor-pointer  w-full   ' onClick={() => { router.replace('/app?option=1') }}>
                                    <div className='  rounded-md cursor-pointer w-full    aspect-[4/3] flex flex-col gap-2 sm:gap-4    ' onClick={() => router.replace('/app?option=0')}    >
                                        <div className='text-custom-subheading font-bold  text-lg  w-max '>  Semi Handpicked  Makhana </div>
                                        <div className=' font-bold text-xs '>  Partially screened for better quality, semi-handpicked makhana balances affordable and refinement , delivering a satisfying snacking option. </div>
                                        <Image src='/semihandpicked.jpg' className='rounded-md' width={600} height={400} alt='' />
                                    </div>
                                </div>
                                <div className='bg-[#FFF0F5] border-[1px] p-2 rounded-md cursor-pointer w-full flex flex-col gap-2  sm:gap-4   ' onClick={() => { router.replace('/app?option=2') }} >
                                    <div className='text-custom-subheading font-bold  text-lg  w-max  '>  Non Handpicked  Makhana </div>
                                    <div className=' font-bold text-xs'>  Standard quality makhana processed in bulk,offering an economical option with a good taste and nutrition for everyday use.  </div>
                                    <Image src='/handpicked.jpg' className='rounded-md' width={600} height={400} alt='' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=' flex flex-col gap-8 md:grid md:grid-cols-2 text-xs sm:text-sm lg:text-md'>
                        <div className='border-[1px] bg-white px-4 py-2 rounded-md '>
                            <div className='font-bold text-custom-subheading text-lg   sm:text-xl  lg:text-2xl  '>
                                Why Makahana?
                            </div>
                            <div className=''>
                                <div> <span className='text-s font-bold'>Low in Calories:            </span> <span>Helps in weight management and makes it an ideal guilt-free snack.                    </span> </div>
                                <div> <span className='text-s font-bold'>Rich in Antioxidants:       </span> <span>Fights free radicals, prevents cell damage, and slows down aging.</span> </div>
                                <div> <span className='text-s font-bold'>High Magnesium Content:     </span> <span>Supports heart health, regulates blood pressure, and promotes better nerve function.</span> </div>
                                <div> <span className='text-s font-bold'>Good Source of Protein:     </span> <span>Aids in muscle growth, repair, and overall body strength.</span> </div>
                                <div> <span className='text-s font-bold'>Low Glycemic Index:         </span> <span>Helps manage blood sugar levels, making it suitable for people with diabetes.</span> </div>
                                <div> <span className='text-s font-bold'>High Fiber Content:         </span> <span>Improves digestion, prevents constipation, and promotes a healthy gut.</span> </div>
                                <div> <span className='text-s font-bold'>Rich in Calcium:            </span> <span>Strengthens bones and teeth, supporting better skeletal health.</span> </div>
                                <div> <span className='text-s font-bold'>Gluten-Free:                </span> <span>Suitable for people with gluten intolerance or celiac disease.</span> </div>
                                <div> <span className='text-s font-bold'>Anti-Aging Properties:      </span> <span>Promotes healthy skin and reduces wrinkles by combating aging signs.</span> </div>
                                <div> <span className='text-s font-bold'>Natural Detoxifier:         </span> <span>Cleanses the liver and kidneys, promoting better organ health.</span> </div>
                                <div> <span className='text-s font-bold'>Sleep-Inducing Properties:  </span> <span>Improves sleep quality with its calming effect.</span> </div>
                                <div> <span className='text-s font-bold'>Energy Boosting:            </span> <span>Provides sustained energy without causing sugar spikes.</span> </div>
                                <div> <span className='text-s font-bold'>Anti-Inflammatory:          </span> <span>Helps reduce chronic inflammation and pain.</span> </div>
                                <div> <span className='text-s font-bold'>Supports Hormonal Balance:  </span> <span>Particularly beneficial for women by balancing hormones naturally.</span> </div>
                                <div> <span className='text-s font-bold'>Stress-Relieving Properties:</span> <span>Reduces stress and anxiety with its calming and soothing effect.</span> </div>

                            </div>

                        </div>


                        <div className='bg-white px-4 py-2 rounded-md border-[1px]'>
                            <div className='font-bold text-custom-subheading  text-lg sm:text-xl md:text-2xl '> Why buy from  us?  </div>
                            <div>
                                <div> <span className='font-bold'> Premium-Quality Makhana:        </span><span>We offer a wide selection of high-quality makhana, available in sizes ranging from 4 mm to over 6.5 mm, catering to various preferences and needs.                     </span></div>
                                <div> <span className='font-bold'> Variety of Textures and Colors: </span><span>Our makhana is available in different textures and vibrant colors, providing a diverse range of options for all customers.</span></div>
                                <div> <span className='font-bold'> Handpicked Selection:           </span><span>Whether you prefer machine-picked, handpicked, or semi-handpicked makhana, each product is carefully selected to ensure the highest level of freshness and quality.</span></div>
                                <div> <span className='font-bold'> Commitment to Organic Practices:</span><span>Our makhana is produced using organic farming methods, ensuring it is grown naturally without the use of harmful chemicals.</span></div>
                                <div> <span className='font-bold'> Ideal Growing Conditions:       </span><span>Grown in the optimal environmental conditions of Bihar, our makhana benefits from the  perfect climate  of the region  for high-quality production.</span></div>
                                <div> <span className='font-bold'> Certified Buisness:         </span> <span> We are a fully certified and licensed business, ensuring quality and trustworthiness in every aspect of our operations. </span> </div>
                                <div> <span className='font-bold'> Reliable Suppliers:         </span> <span> Our network of trusted suppliers guarantees a consistent supply of premium-quality makhana.</span> </div>
                                <div> <span className='font-bold'> Global Reach:               </span> <span> We are certified to export our products internationally, ensuring seamless delivery across borders.</span> </div>
                                <div> <span className='font-bold'> Strong Network:             </span> <span> With established contacts in the industry, we ensure smooth operations and quick problem-solving at every step.</span> </div>
                                <div> <span className='font-bold'> Quality Assurance:          </span> <span> We adhere to the highest standards of quality, ensuring that every product delivered meets customer expectations.</span> </div>
                                <div> <span className='font-bold'> Customer-Centric Approach:  </span> <span> Our focus is always on providing the best experience to our customers, from order placement to delivery.</span> </div>
                                <div> <span className='font-bold'> Experienced Team:           </span> <span> Our team of professionals brings years of expertise, ensuring efficient management and superior service.</span> </div>
                                <div> <span className='font-bold'> Sustainability Focus:       </span> <span> We  are committed to environmentally friendly practices, ensuring that our operations are sustainable and responsible.</span> </div>
                            </div>
                        </div>
                    </div>



                    <div className='bg-white px-4 py-2 rounded-md border-[1px] '>
                        <div className=' font-bold text-lg sm:text-xl md:text-2xl text-custom-subheading'>  Certifications  </div>


                        <span className='font-bold'>  Certificate of Incorporation </span>
                        <button className='peer bg-black text-white font-bold p-4 rounded-xl' onClick={() => { setImageVisible(true) }}>
                            View
                        </button>






                    </div>

                    <div className='bg-white px-4 py-2 rounded-md border-[1px]'>
                        <div className='font-bold  text-lg sm:text-xl md:text-2xl  text-custom-subheading'> Testimonails </div>
                        <div>
                            Testimonail..
                        </div>
                    </div>
                </div>
            </>
        )
    }

    else {
        return (
            <div className='border-2 border-black p-2'  >
                <button className='cursor-pointer' onClick={() => setImageVisible(false)}>  <Image src='/close.svg' alt='' width={20} height={20} />  </button>
                <img style={{ objectFit: 'contain' }} src='/certificate1.png' alt='' />
            </div>)
    }
}

export default Page
