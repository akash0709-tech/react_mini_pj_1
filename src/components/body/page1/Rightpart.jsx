import React from 'react'
import RightContent from './RightContent'

const Rightpart = (props) => {
  return (
    <div className='w-3/5 h-[95%] flex overflow-x-auto flex-nowrap gap-4'>
      {props.users.map((each,idx)=>{
      
        return <RightContent id={idx} users={each} />
      })}
      
    </div>
  )
}

export default Rightpart