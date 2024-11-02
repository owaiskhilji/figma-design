import React from 'react'
import Image from 'next/image'
import img from "@/../../public/image33.png"
import img1 from "@/../../public/image33.png"
import img2 from "@/../../public/image 33.png"
export default function page() {
  return (
      <div> 
<div>
    <h1 className='font-light text-5xl text-stone-400 mt-5 ml-36'>Sample</h1>
    <h2 className='font-extrabold text-5xl mt-3 ml-36'>Project 1</h2>
  </div>       
      <h1 className='mb-12 mt-12 flex justify-center text-container'>
      <Image src={img} alt='' width={1200} height={80} />
      </h1>
       
  <div className='flex  ml-40 mb-4 mt-10'>
  
  <Image src={img1} alt='' />  
  
  <p className="mt-3 ml-6 mr-32 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptate, ad tenetur consequuntur eius quibusdam rem. Exercitationem harum suscipit eveniet sint tenetur dignissimos ipsum corporis maiores dolorum soluta, earum reiciendis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptate, ad tenetur consequuntur eius quibusdam rem. Exercitationem harum suscipit eveniet sint tenetur dignissimos ipsum corporis maiores dolorum soluta, earum reiciendis..Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptate, ad tenetur consequuntur eius quibusdam rem. Exercitationem harum suscipit eveniet sint tenetur dignissimos ipsum corporis maiores dolorum soluta, earum reiciendi...Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptate, ad tenetur consequuntur eius quibusdam rem. Exercitationem harum suscipit eveniet sint tenetur dignissimos ipsum corporis maiores dolorum soluta, earum reiciendi...Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptate, ad tenetur consequuntur eius quibusdam rem. Exercitationem harum suscipit eveniet sint tenetur dignissimos ipsum corporis maiores dolorum soluta, earum reiciendi...Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptate, ad tenetur consequuntur eius quibusdam rem. Exercitationem harum suscipit eveniet sint tenetur dignissimos ipsum corporis maiores dolorum soluta, earum reiciendi...Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptate, ad tenetur consequuntur eius quibusdam rem. Exercitationem harum suscipit eveniet sint tenetur dignissimos ipsum corporis maiores dolorum soluta, earum reiciendi...Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptate, ad tenetur consequuntur eius quibusdam rem. Exercitationem harum suscipit eveniet sint tenetur dignissimos ipsum corporis maiores dolorum soluta, earum reiciendi.</p>
  
   </div>
  


  <div className='flex justify-center mt-24 mb-10 '>
    <Image src={img2} alt='' />
  </div>
</div>
      
    
  )
}



