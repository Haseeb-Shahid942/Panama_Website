import React from 'react'
import { BsChevronRight } from 'react-icons/bs'
import Link from 'next/link'
function Links({ linksObj }) {
  return (
    <>
      <div className='flex lg:justify-center'>
        <div className='flex flex-col space-y-4 items-start '>
          <h3 className='font-semibold text-lg '>{linksObj.title}</h3>
          <div className='flex flex-col space-y-2'>
            {linksObj.links.map((link, idx) => {
              return (
                <div className='flex items-center space-x-2' key={idx}>
                  <Link href={link.link} className='flex items-center space-x-2'>
                  <BsChevronRight />
                  <p className='text-md text-slate-300'>{link.name}</p>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Links
