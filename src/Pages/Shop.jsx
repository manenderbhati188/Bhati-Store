import React from 'react'
import { Hero } from '../Components/front Hero/Hero'
import { Popular } from '../Components/Popular section/Popular'
import {Offer} from '../Components/Offers/Offer'
import { Newcollection } from '../Components/New Collections/Newcollection'
import { Subscribe } from '../Components/Subscribe/Subscribe'
export const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <Newcollection/>
      <Subscribe/>
    </div>
    
  )
}
