import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <div>
      <div className='flex flex-col lg:flex-row lg:ml-14 mb-4 mt-4'>
        {/* Left Section */}
        <div className="lg:w-1/2 p-4 lg:ml-0">
          <div className='lg:ml-20'>
            <h1 className='font-light text-3xl md:text-5xl text-gray-400 mt-5'>
              Contact
            </h1>
            <h2 className='font-extrabold text-3xl md:text-5xl mt-3'>
              Information
            </h2>
            <h1 className='font-bold mt-6 md:mt-9'>Company Name</h1>
            <h1>1234 Sample Street, Austin, Texas 76401</h1>
            <p className='font-bold mt-6 md:mt-9'>512.333.2222</p>
            <p className='mt-8 md:mt-12'>sampleemail@gmail.com</p>
            <button className="btn btn-neutral mt-6 md:mt-9 p-3 md:p-4">
              CONTACT US
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className='lg:ml-12 lg:w-1/2 p-4'>
          <iframe
            className="w-full h-64 md:h-96 lg:w-[800px] lg:h-[450px]"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28941.311047229745!2d66.9868871!3d24.94351785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1729687628663!5m2!1sen!2s"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
