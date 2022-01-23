import React from "react"
import { useRouter } from "next/router"

const SingleGroup = ({ name, privilege, id }) => {
  const router = useRouter()

  return (
    <div className='w-full sm:w-1/2 lg:w-1/3 px-4 md:px-6 lg:px-8'>
      <div className='relative pt-4 bg-white rounded-2xl shadow-6xl'>
        <img className='w-full px-4 mb-8' src='/assets/uinel-assets/images/dashboard-content/pic3.png' alt='' />
        <div className='flex flex-wrap items-center px-8 mb-8'>
          <div>
            <h2 className='text-xl font-heading font-medium'>{name}</h2>
          </div>
        </div>
        <div className='px-8 pb-11 border-b border-gray-100'>
          <div className='flex flex-wrap justify-between items-center mb-3'>
            <p className='text-sm font-heading font-medium trackingr-tighter'>Last Update</p>
            <div className='inline-block px-6 py-1 leading-7 font-bold tracking-tight text-blue-500 bg-blue-50 rounded-9xl'>8 Dec 2021</div>
          </div>
          <div className='flex flex-wrap justify-between items-center mb-3'>
            <p className='text-sm font-heading font-medium tracking-tighter'>Rola</p>
            <div className='inline-block px-6 py-1 leading-7 font-bold tracking-tight text-blue-500 bg-indigo-100 rounded-9xl'>{privilege}</div>
          </div>
        </div>
        <div className='flex flex-wrap justify-between py-5 px-8'>
          <div className='w-full md:w-1/2'>
            <div className='flex flex-wrap items-center mb-6 md:mb-0'>
              <img src='/assets/uinel-assets/images/dashboard-content/av1.png' alt='' />
              <img className='-ml-4' src='/assets/uinel-assets/images/dashboard-content/av2.png' alt='' />
              <div className='relative flex justify-center items-center'>
                <span className='absolute left-1 text-sm font-heading font-semibold'>+3</span>
                <img className='relative' src='/assets/uinel-assets/elements/dashboard-content/dots.svg' alt='' />
              </div>
            </div>
          </div>
          <div className='w-full md:max-w-max'>
            <a
              className='block py-4 px-7 w-full text-lg leading-3 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl'
              onClick={(e) => {
                e.preventDefault()
                router.push(`/Groups/${id}`)
              }}
              href={`/Groups/${id}`}
            >
              Przejdź
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleGroup
