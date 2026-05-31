import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const Leftpart = () => {
  return (
    <div className='w-2/5 h-auto'>
      <h1 className='text-2xl leading-8 md:text-4xl md:leading-10 lg:text-6xl font-bold pb-8 tracking-wide lg:leading-15
'>Prospective customer segmentation</h1>
      <p className='font-normal text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elist. Necessitatibus fugit provident ipsam optio similique unde. Ullam exercitationem totam ex ducimus veritatis ipsum natus eveniet. Minus doloribus, placeat eligendi accusamus assumenda, maiores in ipsam libero magnam, quo aliquam ipsa facilis soluta.</p>
      <div>icons<ArrowUpRight className='text-gray-500 w-18 h-18 mb-5 mt-1' />
      <i className="fa-brands fa-instagram text-2xl text-neutral-700 pr-2"></i>
      <i className="fa-brands fa-x-twitter text-2xl pr-2 text-neutral-700"></i>
      <i className="fa-brands fa-telegram text-2xl pr-2 text-neutral-700"></i>
      <i className="fa-brands fa-linkedin text-2xl pr-2 text-neutral-700"></i>
      </div>
    </div>
  )
}

export default Leftpart