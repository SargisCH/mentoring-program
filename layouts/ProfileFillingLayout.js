import React from 'react'

export default function ProfileFillingLayout({children, header ='', secondaryText =''}) {
  return (
    <div className="mt-10">
      <div className='grid justify-items-center'>
        <div className="text-center">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">{header}</h3>
            <p className="mt-1 text-sm text-gray-600"> {secondaryText} </p>
          </div>
        </div>
        <div className="mt-5 w-9/12">
          {children}
        </div>
      </div>
    </div>
  )
}
