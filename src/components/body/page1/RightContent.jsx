import React from 'react'

const RightContent = (props) =>{
  console.log(props.users,props.id)
  
  return (
    <div className='h-full shrink-0 overflow-hidden w-80 rounded-4xl relative'>
      <img src={props.users.img} className='h-full w-full'/>

    <div className='absolute w-full h-full left-4 top-3'>
        <h1 className='text-3xl font-bold bg-zinc-100 w-fit rounded-full px-4 py-2 text-gray-700'>{props.id+1}</h1>
        <p className='text-gray-100 font-semibold text-left absolute top-[50%] left-5 pr-10'>Lorem ipsum dolor sit, amet consect adipisicing elit. Aliquam, ullam? Possimus doloremque dolorem debitis exercitationem sapiente minus eius cons itaque id laudantium, asperiores architecto necessitatibus eos tenetur, ut fuga!</p>
        <div className='flex absolute text-amber-50 top-[84%] left-5 gap-25 font-semibold'>
          <p className=' text-mist-100 rounded-3xl px-5 py-2' style={{background:props.users.color}}>{props.users.tag}</p>
          <i className="fa-solid fa-arrow-right py-3 font-bold"></i>

        </div>
      </div>
    </div>
   )
}

export default RightContent