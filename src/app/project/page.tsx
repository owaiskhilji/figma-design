import Link from 'next/link'
import React from 'react'
Link
import Image from 'next/image'
import img from "../../../public/Group 13.png"
import img1 from "../../../public/Group 14.png"
import img2 from "../../../public/Group 15.png"
 export default function page() {
  return (
    <div><div>
    <h1 className='font-light text-5xl text-stone-400 mt-5 ml-14'>Our</h1>
    <h2 className='font-extrabold text-5xl mt-3 ml-14'>Project</h2>
  </div>
  
  <div className='flex ml-14 mb-4 mt-10'>
  <div className="block rotate-scale-up-diag-1 border-2  w-{50%} h-{50%} bg-white p-3 flex">
  <Image src={img} alt='' />
  {/* <div className=' sm:block sm:w-64 ml-10 '>
  <h1 className="text-lg font-bold mt-20 sm:mt-8 md:mt-12">Sample projeec 01</h1>
  <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ea incidunt esse vero quasi, quidem, accusamus officiis molestias minima debitis rem! Veritatis accusantium rem magni! Ducimus dolorum quasi officiis fuga.</p>
  <div className="card-actions justify-end">
  <button className="btn w-40 h-1">View More</button>
</div>
  </div> */}
</div>
</div>
<div className='flex ml-14 mb-4 mt-4'>
  <div className="block rotate-scale-up-diag-1 border-2  w-{50%} h-{50%} bg-white p-3 flex">
  <Image src={img1} alt='' />
  {/* <div className=' sm:block sm:w-64 ml-10 '>
  <h1 className="text-lg font-bold mt-20 sm:mt-8 md:mt-12">Sample projeec 02</h1>
  <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa rem similique autem facilis itaque atque possimus deserunt obcaecati, accusantium consequuntur a tempore et asperiores quia delectus, eveniet enim quod beatae!</p>
  <div className="card-actions justify-end">
  <button className="btn w-40 h-1">View More</button>
</div>
  </div> */}
</div>
</div> 

<div className='flex ml-14 mb-4 mt-4'>
  <div className="block rotate-scale-up-diag-1 border-2  w-{50%} h-{50%} bg-white p-3 flex">
  <Image src={img2} alt='' />
  {/* <div className=' sm:block sm:w-64 ml-10 '>
  <h1 className="text-lg font-bold mt-20 sm:mt-8 md:mt-12">Sample projeec 03</h1>
  <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea possimus exercitationem magni, </p>
  <div className="card-actions justify-end">
  <button className="btn w-40 h-1">View More</button>
</div>
  </div> */}
</div>
</div>

<Link href="project1"><div>project 01</div></Link>
</div>
  )
}
