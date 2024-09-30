import React from 'react'

function Stripe({val}) {
    return (
      <div className='w-[16.66%] px-10 py-5 border-t-[1.2px] border-b border-r flex items-center justify-between border-zinc-600'>
        <img src={val.url} alt="logo" />
        <span className='font-semibold'>{val.number}</span>
      </div>
    );
  }

export default Stripe