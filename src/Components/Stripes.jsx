import React from 'react'
import Strip from './Stripe'

function Stripes() {
    const data = [
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d486ac04cccf98e13fff_bcgp.svg", no:"2"},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b997d53302df1b9075_63aeda082c152d7b32e74c9d_remind.svg", no:"11"},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b62de955b9aa4d2dd0_64868959b481181dd14c03a2_Silvr_logo_white.png", no:"2"},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b597d53302df1b88fc_660191edcdb42d79ba8c23aa_Logo.svg", no:"15"},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b5b40b9966a3a112d7_663a6cbf194837f9c0affe8e_logo.svg", no:"16"},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b850995827afaa8db9_63aed9b4493ff77bba5e9939_spotify.svg", no:"17"}
    ]
  return (
    <div className='flex mt-24'>
          { data.map((elem, index)=>(
            <Strip key={index} item={elem} />
          ))}
    </div>
  )
}

export default Stripes