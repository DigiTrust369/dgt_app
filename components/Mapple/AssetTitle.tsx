import React from 'react'

const AssetTitle = ({title}:any) => {
  return (
    <div className="mt-8 home__text-container">
        <h2 className="text-4xl font-semibold leading-[3.5rem] text-gray-900">
            {title}
        </h2>
    </div>
  )
}

export default AssetTitle