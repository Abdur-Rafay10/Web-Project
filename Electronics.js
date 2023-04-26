import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Card from './Card'
import Pagination from './Pagination'
import Crauusel from './Crauusel'
export default function Electronics() {
  return (
    <>
    <Navbar/>
    <Crauusel/>
    <div className='con'>
    <Card image = 'https://tse2.mm.bing.net/th?id=OIP.I96-STyp4kRO2P_m8yT0oAHaEo&pid=Api&P=0' title = 'Super Car' detail = 'Super Car' button = 'Add to Cart'/>
    <Card image = 'https://tse2.mm.bing.net/th?id=OIP.Eb4fTG6ESbiCTM74_l97SwHaEv&pid=Api&P=0' title = 'Laser' detail = 'Laser' button = 'Add to Cart'/>
    <Card image = 'https://tse4.mm.bing.net/th?id=OIF.FeysovZ6fdAPvD9AJo2yqA&pid=Api&P=0' title = 'LED' detail = 'LED' button = 'Add to Cart'/>
    </div>

    <Pagination/>
    <Footer/>
    </>
  )
}
