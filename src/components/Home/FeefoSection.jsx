import React from 'react'

const FeefoSection = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
      {/* <AtolLogo className="h-9 w-auto" /> */}
      <div className="text-left">
        <p className="font-semibold text-gray-800 text-sm">Average Customer Rating</p>
        <div className="text-yellow-500 font-bold text-base">
          ⭐⭐⭐⭐⭐ <span className="text-black ml-1">4.8/5</span>
        </div>
      </div>
      <img
        src="/images/feefo-logo.svg"
        alt="Feefo"
        className="h-7 md:h-8"
      />
    </div>
  )
}

export default FeefoSection