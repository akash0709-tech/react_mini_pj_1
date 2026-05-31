import React from 'react'
import Leftpart from './Leftpart'
import Rightpart from './Rightpart'
import Navbar from './Navbar'



const Page1 = (props)=> {
  return (
    <div className='px-[6vw] pt-[1.7rem] h-screen w-full'>
    <Navbar />
    <div className='flex gap-15 h-[90%] mt-10 w-full'>
    <Leftpart />
    <Rightpart users={props.users}/>
    </div>
    </div>
  )
}

export default Page1